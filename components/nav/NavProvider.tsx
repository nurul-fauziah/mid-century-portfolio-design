"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "motion/react";
import { sectionIds, type SectionId } from "./config";

// 1. Definisikan tipe untuk Context
interface NavContextType {
  active: SectionId | null;
  href: (id: SectionId) => string;
  go: (id: SectionId) => void;
}

const NavContext = createContext<NavContextType | null>(null);

// 2. Custom Hook untuk menggunakan navigasi
export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav harus digunakan di dalam NavProvider");
  }
  return context;
};

// 3. Provider Component Utama
export default function NavProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  const [active, setActive] = useState<SectionId | null>(isHome ? "home" : null);
  
  // Referensi waktu untuk mengunci deteksi scroll saat user mengklik menu
  // (mencegah efek kedap-kedip saat animasi smooth scroll berjalan)
  const scrollLock = useRef<number>(0);

  useEffect(() => {
    // Tangani status aktif untuk halaman selain Beranda (misal: /projects atau /blog)
    if (!isHome) {
      if (pathname.startsWith("/projects")) {
        setActive("projects");
      } else if (pathname.startsWith("/blog")) {
        setActive("blog");
      } else {
        setActive(null);
      }
      return;
    }

    let rafId = 0;

    // Fungsi utama untuk mendeteksi section mana yang sedang dilihat
    const calculateActiveSection = () => {
      rafId = 0;
      
      // Batalkan kalkulasi jika layar sedang otomatis scroll karena klik menu
      if (Date.now() < scrollLock.current) return;

      // Garis target diatur 35% dari atas layar
      const targetLine = window.innerHeight * 0.35;
      let currentSection: SectionId = "home";

      // Cek setiap section untuk melihat mana yang melewati garis target
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= targetLine) {
          currentSection = id;
        }
      }

      // Edge case: Jika user scroll mentok sampai ujung bawah, otomatis set ke "contact"
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (isAtBottom) {
        currentSection = "contact";
      }

      setActive(currentSection);
    };

    // Menggunakan requestAnimationFrame agar deteksi scroll tidak bikin lag
    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(calculateActiveSection);
      }
    };

    // Jalankan kalkulasi sekali saat halaman pertama kali dimuat
    calculateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isHome, pathname]);

  // Fungsi pembantu untuk membuat link navigasi (menangani hash routing dari halaman lain)
  const href = (id: SectionId) => (isHome ? `#${id}` : `/#${id}`);

  // Fungsi pembantu untuk menangani klik menu navigasi
  const go = (id: SectionId) => {
    if (isHome) {
      // Kunci deteksi scroll selama 900ms saat animasi perpindahan halaman berjalan
      scrollLock.current = Date.now() + 900;
      setActive(id);
    }
  };

  return (
    <NavContext.Provider value={{ active, href, go }}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </NavContext.Provider>
  );
}