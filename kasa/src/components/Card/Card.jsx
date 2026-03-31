
import { Link } from "react-router-dom";
import './Card.scss'


function Card({imgSrc, title , houseid}) { 
  return (
    <Link to={`/housing-form/${houseid}`} className="card">
      <article>
        <img src={imgSrc} alt={title} />
        <p>{title}</p>
      </article>
    </Link>
  );
}

export default Card;