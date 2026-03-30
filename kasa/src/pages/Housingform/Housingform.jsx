import { useState, useRef, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import allhouses from '../../../recent_homes.json';

import './Housingform.scss'

/////////////////////////////////////////////////////////////CAROUSEL////////////////////////////////////////////////////////////////

function CarouselImg({src,alt}){
  return(
    <img src={src} alt={alt} />
    
  )
}

 
function Carousel({pictures}){

    const[index, setIndex] = useState(0);                              //Numero de l'image 
    console.log(index);
  
  const nextbuttonclick = () => {
    if (index === pictures.length - 1) {                                  //Si + que le nombre d'images on revien à 0
      setIndex(0);}
    else{
      setIndex(index +1);
    };
    
  };

  const prevbuttonclick = () => {
    if (index === 0 ) {
      setIndex(pictures.length- 1);}          
    else{
     setIndex(index - 1); 
    };
    
  };

  useEffect(() => {
    console.log("Index mis à jour :", index);
  }, [index]);

  return( 
  <section className='section_carousel_container'>
    <div className= 'carousel'>
        <CarouselImg 
        src ={pictures[index]} alt ={pictures[index]}
        />  
    </div>
    <div>
      <Nextbutton onClick = {prevbuttonclick} className = 'buttonNext buttonNext--buttonprev'/>
      <Nextbutton onClick = {nextbuttonclick}className = 'buttonNext'/>
    </div>
  </section>)
}


function Nextbutton({onClick,className}){            //Transmet le click
  return(

    <button onClick={onClick} className={className}><i className="fa-sharp fa-solid fa-angle-up"></i></button>
  )

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Title({title,location}){                                   //Titre et localisation

  return (
    <div className='Title_box'>
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  )
}


function Tag_box({tags}){
  console.log(tags);
  return(
     <div className='tag_box'>
        <p>{tags}</p>
     </div>
  )
}




function Tags({tags}){                                   //Tags
  return (
    <div className='container_tag_box'>
      {tags.map((i , index) =>(
        <Tag_box 
          key={`tag-${index}`}                       //invente une clé quelconque
          tags={i}
        />
      ))}
    </div>
  )
}


function Host({host}){                                   //Titre et localisation

    const [firstname, name] = host.name.split(' ');      // dans l'element name de host faire un retour à la ligne au moment de l'espace pour mettre les Nom et prenom l'un sur l'autre


  return (
    <div className='Host_container'>
      <p>{firstname}<br/>{name}</p>
      <img src = {host.picture} alt ={host.picture}/> 
    </div>
  )
}


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


/////////////////////////////////////////////////////////////////////////

function Houseformbutton({title,text}) {

  const[inputstate, setinputstate] = useState(false);
  const textcontainer = useRef(null);


  const buttonclick = () => {
    setinputstate(!inputstate);
  };

  return(
    <div className='container'>
      <div className = 'container_btn'>
        <h2>{title}</h2>
        <button className={inputstate ? 'button__on' : ''} onClick={buttonclick}><i className="fa-solid fa-chevron-up"></i></button>
      </div>
      <p ref ={textcontainer} className={`${inputstate ? 'show' : ''} ${title === 'Équipements' ? 'equipements' : ''}`}>{text}</p>
    </div>
  );
}


function Descriptionbutton({description}){
    const title = 'Description'
  return(
    
        <Houseformbutton 
          title={title}
          text={description}
        />
    
  )
}

function Equipementbutton({equipments}){
    const title = 'Équipements'

    const textmodify = equipments.join("\n"); //ajoute les retours à la ligne

  return(
        <Houseformbutton 
          title={title}
          text={textmodify}
        />
    
  )
}

//////////////////////////////////////////////////////////////////

function Housingform() {
  const houseid = useParams();
  const data = allhouses.find(i => i.id === houseid.id)            //recupere dans le json les infos correspondantes à l'ID


  return (
    <main className='Housingbody'>
      <Carousel pictures={data.pictures}/>
      <section className='desc_container_section_1'>
        <Title title={data.title} location={data.location}/>
        <Host host={data.host}/>
      </section>
      <section className='desc_container_section_2'>
        <Tags tags={data.tags}/>
        <Rating rating={data.rating}></Rating>
      </section>
      <section className='desc_container_section_3'>
        <Descriptionbutton description = {data.description}/>
        <Equipementbutton equipments = {data.equipments}/>
      </section>
    </main>
  )
}

export default Housingform;