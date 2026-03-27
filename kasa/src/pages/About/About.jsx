
import { useState, useRef, useEffect} from 'react';
import source_img from '../../images/source/Image_source_2.png';
import './About.scss'
import about_data from './About.json'



function Aboutbutton({title,text}) {

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


function Listbutton(){
  return(
    <div className='container_list'>
      {about_data.map((btn) =>(
        <Aboutbutton 
          key={btn.id}
          title={btn.title}
          text={btn.text}
        />
      ))}
    </div>
  )
}



function About() {
  return(
      <main className='aboutbody'>
        <img src={source_img} alt="source" />
        <Listbutton/>
      </main>
    ) 
}

export default About;