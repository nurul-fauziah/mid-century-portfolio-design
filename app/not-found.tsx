import { ArrowLeft } from "lucide-react";
import { Starburst } from "@/components/shapes/Starburst";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center text-center px-6 bg-[color:var(--paper)] text-[color:var(--ink)]">
      <div className="max-w-md mx-auto p-10 sm:p-12 rounded-3xl border-3 border-[color:var(--ink)] bg-[color:var(--surface)] shadow-[8px_8px_0_var(--ink)] relative">
        <div className="flex justify-center mb-4">
          <Starburst size={48} variant="sparkle" fillColor="var(--burnt)" strokeColor="var(--ink)" />
        </div>

        <p className="font-mono text-xs uppercase tracking-widest font-extrabold text-[color:var(--burnt)]">
          404 · PAGE NOT FOUND
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight text-[color:var(--ink)] my-4">
          Record Not In Catalog
        </h1>

        <p className="font-body text-sm sm:text-base text-[color:var(--ink-muted)] mb-8 leading-relaxed">
          The requested mid-century portfolio document or route could not be found.
        </p>

        <a
          href="/"
          className="retro-btn !bg-[color:var(--mustard)] !text-[#2B2118]"
        >
          <ArrowLeft size={15} strokeWidth={2.5} />
          <span>Return to Cover</span>
        </a>
      </div>
    </main>
  );
}
