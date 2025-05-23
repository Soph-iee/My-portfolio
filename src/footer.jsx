import LinkedinLogo from "./assets/bxl-linkedin-square.svg";
import gmailLogo from "./assets/bxl-gmail.svg";
import twitterLogo from "./assets/bxl-twitter.svg";
import whatsappLogo from "./assets/bxl-whatsapp.svg";
import "./app.css";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <a target="blank" href="https://linkedin.com/opeyemiblessing">
              <img src={LinkedinLogo} />
            </a>
          </li>
          <li>
            <a target="blank" href="mailto:iyanuopeyemii@gmail.com">
              <img src={gmailLogo} />
            </a>
          </li>
          <li>
            <a target="blank" href="https://x.com/_dela_creme">
              <img src={twitterLogo} />
            </a>
          </li>
          <li>
            <a target="blank" href="https://wa.link/u9492n">
              <img src={whatsappLogo} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
