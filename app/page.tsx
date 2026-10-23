import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import {
  Profile,
  Works,
  Stack,
  History,
  Writing,
  Contact,
  Footer,
} from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Works />
        <Stack />
        <History />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
