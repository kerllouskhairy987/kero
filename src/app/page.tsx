import Header from "@/components/homePage/Header";
import Hero from "@/components/homePage/Hero";
import About from "@/components/homePage/About";
import Skills from "@/components/homePage/Skills";
import Certificates from "@/components/homePage/Certificates";
import Projects from "@/components/homePage/Projects";
import Contact from "@/components/homePage/Contact";
import Footer from "@/components/homePage/Footer";

export default async function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 dark:bg-black transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
