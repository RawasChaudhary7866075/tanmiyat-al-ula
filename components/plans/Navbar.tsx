export default function Navbar() {
  return (
    <nav className="plans-nav">
      <a href="/" className="plans-logo">
        Tanmiyat <b>Al-Ula</b>
      </a>

      <div className="plans-navlinks">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/plans" className="active">
          Plans
        </a>
        <a href="/calculator">Calculator</a>
        <a href="/contact">Contact</a>
      </div>

      <a
        href="https://wa.me/966561213606"
        className="plans-nav-btn"
      >
        Subscribe now
      </a>
    </nav>
  );
}