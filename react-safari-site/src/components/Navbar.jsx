import logo from '../images/safariLogo.svg';
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ul className="nav-links" id="nav-links">
        <li>
          <a href="#home" className="nav-link"> home </a>
        </li>

        <li>
          <a href="#about" className="nav-link"> about </a>
        </li>

        <li>
          <a href="#services" className="nav-link"> services </a>
        </li>

        <li>
          <a href="#tours" className="nav-link"> tours</a>
        </li>
      </ul>

      <ul className="nav-icons">
        <li>
          <a href="https://github.com/AnelFakic?tab=overview&from=2025-01-01&to=2025-01-18" target="_blank" className="nav-icon"
            ><i i className="fab fa-github"></i></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/anel-fakic/" target="_blank" className="nav-icon"
            ><i className="fab fa-linkedin"></i></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><i className="fas fa-laptop-code"></i
          ></a>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar