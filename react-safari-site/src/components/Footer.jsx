const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">home</a>
        </li>
        <li>
          <a href="#about" className="footer-link">about</a>
        </li>
        <li>
          <a href="#services" className="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" className="footer-link">featured</a>
        </li>
      </ul>
      <ul className="footer-icons">
        <li>
          <a href="https://github.com/AnelFakic?tab=overview&from=2025-01-01&to=2025-01-18" target="_blank" className="footer-icon"
            ><i className="fab fa-github"></i
          ></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anel-fakic/" target="_blank" className="footer-icon"
            ><i className="fab fa-linkedin"></i
          ></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anel-fakic/" target="_blank" className="footer-icon"
            ><i className="fas fa-laptop-code"></i>
            </a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer