import './Footer.scss';
import logo from '../../images/logo/logo_kasa.png';

function Footer() {
  return (
    <footer className= "footer">
              <img src={logo} alt="logo" />
              <p>© 2026 Kasa. All rights reserved</p>       
    </footer>
  );
}

export default Footer;