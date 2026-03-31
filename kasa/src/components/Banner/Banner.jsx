import './Banner.scss'

function Banner({source_img,text}){
    return(
          <div className='container_img'>
            <img src={source_img} alt="source" />
            <h1>{text}</h1> 
          </div>
          );
}

export default Banner;
