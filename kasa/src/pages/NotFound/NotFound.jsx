import { Link } from 'react-router-dom';
import './NotFound.scss'

function NotFound() {
  return (
    <div className="notfoundbody">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;