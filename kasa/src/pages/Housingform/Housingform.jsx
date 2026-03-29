import { useState, useRef, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import allhouses from '../../../recent_homes.json';

import './Housingform.scss'



function CarouselImg({src,alt}){
  return(
    <img src={src} alt={alt} />
    
  )
}


function Carousel({pictures}){
  console.log(pictures)
  return( 
  <div className= 'carousel'>
    {pictures.map((img,index) => (
      <CarouselImg 
      key = {index} src ={img} alt ={img}
      />  
    ))} 
  </div>)
}


function Nextbutton(images){

    const[index, setIndex] = useState(0);
  
  const nextbuttonclick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevbuttonclick = () => {
    setIndex((prevIndex) => (prevIndex - 1) % images.length);
  };

  return(
    <button><i className="fa-solid fa-chevron-up"></i></button>
  )

}



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

  useEffect(() => {
    const text = textcontainer.current;
    const padding = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--padding-text"));
   

    if (inputstate){
      text.style.height = text.scrollHeight + (padding*2) +"px";
    }
    else{
      text.style.height = "0px";

    }



  },[inputstate]);

  return(
    <div>
      <div className='container_btn'>
        <h2>{title}</h2>
        <button className={inputstate ? 'button__on' : ''} onClick={buttonclick}><i className="fa-solid fa-chevron-up"></i></button>
      </div>
      <p ref ={textcontainer} className={inputstate ? 'show' : ''}>{text}</p>
    </div>
  );
}


function Listbutton({description,equipments}){

  const Buttontextandtitle = [
    { title: "Description", text: description },
    { title: "Équipements", text: equipments }
  ];


  return(
    <div className='desc_container_section_3'>
      {Buttontextandtitle.map((btn, index) =>(
        <Houseformbutton 
          key={`tag-${index}`}
          title={btn.title}
          text={btn.text}
        />
      ))}
    </div>
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
      <Listbutton description={data.description} equipments={data.equipments}/>
    </main>
  )
}

export default Housingform;