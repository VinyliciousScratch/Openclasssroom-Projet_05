
import { useState} from 'react';
import source_img from '../../images/source/Image_source_2.png';
import './About.scss'
import about_data from './About.json'



function Aboutbutton({title,text}) {

  const[inputstate, setinputstate] = useState(false);

  const buttonclick = () => {
    setinputstate(!inputstate);
  };


  return(
    <div>
      <div className='container_btn'>
        <h2>{title}</h2>
        <button className={inputstate ? 'button__on' : ''} onClick={buttonclick}><i className="fa-solid fa-chevron-up"></i></button>
      </div>
      <p className={inputstate ? 'show' : ''}>{text}</p>
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