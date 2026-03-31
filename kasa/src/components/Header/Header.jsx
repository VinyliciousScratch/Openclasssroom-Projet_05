import { NavLink} from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo/logo_kasa.png';

function Header() {                             //NavLink connait la route active le "isActive" renvoyé automatiquement"
  return (
    <header className= "header">
      <img src={logo} alt="logo" />
      <nav>
          <ul>
            <li><NavLink to="/"  className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;