import './Gallerycard.scss'
import Card from '../Card/Card.jsx';


function Gallerycard({gallery_data}){
  return(
    <div className='container_cards'>
      {gallery_data.map((card) =>(
        <Card 
          key={card.id}
          imgSrc={card.cover}
          title={card.title}
          houseid={card.id}
        />
      ))}
    </div>
  )
}

export default Gallerycard;
