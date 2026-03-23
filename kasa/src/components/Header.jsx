import { Link } from 'react-router-dom';

function Header() {
  return (
   <nav style={{ background: '#0004ff', padding: '1rem' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  );
}

export default Header;