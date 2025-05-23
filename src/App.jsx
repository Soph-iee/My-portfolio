import Hero from "./hero";
import "./app.css";
import Projects from "./portfolio";
import Contact from "./contact";
import Navigation from "./nav";
import Footer from "./footer";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Hero />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
