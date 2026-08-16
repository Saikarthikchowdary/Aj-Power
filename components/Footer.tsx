import Link from "next/link";
import FooterMap from "./FooterMap";

export default function Footer() {
  return (
    <footer className="sitefooter">
      <div className="fgrid">
        <div>
          <h4>AJ Power Solutions</h4>
          <p>Specialized Electrical Contractors and Engineers — HT &amp; LT electrification across South India.</p>
          <div className="soc" style={{ justifyContent: "flex-start", marginTop: 18 }}>
            <a href="https://www.linkedin.com/in/aj-power-solutions-a887b316b/" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
            <a href="mailto:hyd@ajpowersolutions.com" aria-label="Email">✉</a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/admin/login">Admin Login</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: <a href="mailto:hyd@ajpowersolutions.com">hyd@ajpowersolutions.com</a></p>
          <p>Phone: <a href="tel:+918197496989">+91 8197496989</a> | <a href="tel:+917032901979">7032901979</a></p>
          <p>#225, Ground Floor, Doyens Colony, Serilingampalle (M), Hyderabad, Telangana 500019</p>
          <p>Branches: Bengaluru · Pune</p>
        </div>
        <div>
          <div>
            <h4>Our Presence</h4>
            <FooterMap />
          </div>
        </div>
        <div className="fcopy">© 2018–2026 AJ Power Solutions. All rights reserved.</div>
      </div>
    </footer>
  );
}