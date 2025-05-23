import heroImage from "./images/hero-image.jpg";

import "./index.css";

function Hero() {
  return (
    <>
      <header className="hero-section">
        <div className="hero-content">
          <h1>
            Hello, I'm Blessing, a <span>Frontend Developer</span>
          </h1>
          <p className="tagline">
            Driven frontend developer, ready to learn, grow, and add value to
            forward-thinking teams.
          </p>
          <a href="https://wa.link/u9492n" target="blank">
            Contact me
          </a>
        </div>
        <img className="hero-img" src={heroImage} />
      </header>
    </>
  );
}
export default Hero;
