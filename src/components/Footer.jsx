import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <a href="#intro" className="back-to-top">
        Back to top ↑
      </a>
    </footer>
  );
}
