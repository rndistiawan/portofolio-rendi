import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MoodMarquee } from "@/components/MoodMarquee";
import { Nav } from "@/components/Nav";
import { Platforms } from "@/components/Platforms";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { QuoteBand } from "@/components/QuoteBand";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { VisualBreak } from "@/components/VisualBreak";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MoodMarquee />
        <About />
        <Services />
        <Process />
        <Platforms />
        <Experience />
        <VisualBreak />
        <Projects />
        <QuoteBand />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
