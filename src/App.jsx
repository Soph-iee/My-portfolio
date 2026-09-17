import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main className="container">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
