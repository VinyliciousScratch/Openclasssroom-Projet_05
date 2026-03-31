import './Rating.scss';



function Rating({rating}){

  const stars = [1, 2, 3, 4, 5];                                  //Nb max etoiles

   //si star est inferieur ou égale ajouter la classe active  sinon  laisser classique  
  return (
    
    <div className="container_rating">
      {stars.map((star) => (
        <span key={star} className={star <= rating ? "star active" : "star"}><i className="fa-solid fa-star"></i> </span>))} 
    </div>
  );
}

export default Rating;