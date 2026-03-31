
import { useState } from 'react';
import './Collapsebutton.scss'

function Collapsebutton({title,text}) {

  const[inputstate, setinputstate] = useState(false);

  const buttonclick = () => {
    setinputstate(!inputstate);
  };

  return(
    <div className='collapsebutton'>
      <div className='container_btn'>
        <h2>{title}</h2>
        <button className={inputstate ? 'button__on' : ''} onClick={buttonclick}><i className="fa-solid fa-chevron-up"></i></button>
      </div>
      <p className={inputstate ? 'show' : ''}>{text}</p>
    </div>
  );
}

export default Collapsebutton;