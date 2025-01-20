import { pageLinks,socialLinks } from "../data"

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links" key={pageLinks.id}>
        {pageLinks.map((pLinks)=>{
          return  <li>
             <a href={pLinks.href} className="footer-link">{pLinks.text}</a>
          </li>
        })}
      </ul>
      <ul className="footer-icons">
      {socialLinks.map((socials)=>{
          return <li key={socials.id}>
          <a href={socials.href} target="_blank" className="footer-icon"
            ><i i className={socials.icon}></i></a>
        </li>
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Safari tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer