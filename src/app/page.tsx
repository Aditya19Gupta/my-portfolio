import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 dark:text-white dark:bg-black">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm bg-gray-50 dark:bg-black border-t border-gray-100 dark:border-gray-800">
        <p>© {new Date().getFullYear()} Aditya Gupta. All rights reserved.</p>
      </footer>
    </main>
  );
}
