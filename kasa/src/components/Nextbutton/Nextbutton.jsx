import './Nextbutton.scss'

function Nextbutton({onClick,className}){            //Transmet le click
  return(

    <button onClick={onClick} className={className}><i className="fa-sharp fa-solid fa-angle-up"></i></button>
  )

}

export default Nextbutton;