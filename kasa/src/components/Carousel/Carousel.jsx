import { useState, useEffect} from 'react';
import './Carousel.scss'
import Nextbutton from '../Nextbutton/Nextbutton.jsx';
 
function Carousel({pictures}){

    const[index, setIndex] = useState(0);                                               
    console.log(index);
  
  const nextbuttonclick = () => {
    if (index === pictures.length - 1) {                                  
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
        <img src ={pictures[index]} alt ={pictures[index]}/> 
    </div>
    <div className= 'btn_system'>
      <Nextbutton onClick = {prevbuttonclick} className={`buttonNext buttonNext--buttonprev${pictures.length <= 1 ? ' buttonNext--hidden' : ''}`}/>
      <p className={pictures.length <= 1 ? 'hidden' : ''}>{index + 1}/{pictures.length}</p>
      <Nextbutton onClick = {nextbuttonclick}className = {`buttonNext${pictures.length <= 1 ? ' buttonNext--hidden' : ''}`}/>
    </div>
  </section>)
}

export default Carousel;