import './Nextbutton.scss'

function Nextbutton({onClick,className}){            //Transmet le clic
  return(

    <button onClick={onClick} className={className} aria-label="Bouton suivant"><i className="fa-sharp fa-solid fa-angle-up"></i></button>
  )

}

export default Nextbutton;