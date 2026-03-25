
import './Home.scss'
import source_img from '../../images/source/Image_source_1.png';
import gallery_data from '../../../recent_homes.json';


function Card({imgSrc, title}) { //rajouter "link" en variable d'entrée quand il y aura besoin du lien et remplacer href="#" par href={link}
  return (
    <a href="#" className="card">
      <article>
        <img src={imgSrc} alt={title} />
        <p>{title}</p>
      </article>
    </a>
  );
}


function Gallerycard(){
  return(
    <div className='container_cards'>
      {gallery_data.map((card) =>(
        <Card 
          key={card.id}
          imgSrc={card.cover}
          title={card.title}
          //link={card.link}
        />
      ))}
    </div>
  )
}




function Home() {
  return (
    <main className='homebody'>
      <div className='container_img'>
        <img src={source_img} alt="source" />
        <h1>Chez vous, partout et ailleurs</h1> 
      </div>
      <Gallerycard/>
      
    </main>
  );
}

export default Home;


