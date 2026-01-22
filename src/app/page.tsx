import Header from "@/components/homePage/Header";
import Hero from "@/components/homePage/Hero";
import About from "@/components/homePage/About";

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 dark:bg-black transition-colors duration-300">
      <Header />
      <Hero />
      <About />

    </div>
  );
}
