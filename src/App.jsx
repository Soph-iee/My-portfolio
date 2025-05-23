import Navigation from "./nav";
import Hero from "./hero";
import Projects from "./portfolio";
import Contact from "./contact";

import Footer from "./footer";
import "./app.css";
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
