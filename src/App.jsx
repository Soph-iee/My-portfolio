import Navigation from "./navbar";
import Hero from "./hero";
import Projects from "./portfolio";
import Contact from "./contact";

import Footer from "./footer";
import "./index .css";
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
