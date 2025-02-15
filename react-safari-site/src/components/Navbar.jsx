import logo from '../images/safariLogo.svg';
import { pageLinks } from '../data';
import { socialLinks } from '../data';

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
        {pageLinks.map((link)=>{
          return <li key={link.id}>
          <a href={link.href} className="nav-link"> {link.text} </a>
        </li>

        })}
      </ul>

      <ul className="nav-icons">
        {socialLinks.map((socials)=>{
          return <li key={socials.id}>
          <a href={socials.href} target="_blank" className="nav-icon"
            ><i i className={socials.icon}></i></a>
        </li>
        })}
      </ul>
    </div>
  </nav>
  );
};

export default Navbar