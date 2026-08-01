import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Sidebars from "@/components/Sidebars";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Preloader />

      <a href="#main-content" className="skip-to-content">
        Skip to Content
      </a>

      <Navbar />
      <Sidebars />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
