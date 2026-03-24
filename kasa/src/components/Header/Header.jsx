import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo/logo_kasa.png';

function Header() {
  return (
    <header className= "header">
      <img src={logo} alt="logo" />
      <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;