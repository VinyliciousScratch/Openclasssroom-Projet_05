import { useParams, Navigate } from 'react-router-dom';
import {useEffect,useState} from 'react';
import allhouses from '../../../recent_homes.json';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Collapsebutton from '../../../src/components/Collapsebutton/Collapsebutton.jsx';
import Titlelocation from '../../../src/components/Titlelocation/Titlelocation.jsx'
import Tags from '../../../src/components/Tags/Tags.jsx'
import Rating from '../../../src/components/Rating/Rating.jsx'
import Host from '../../../src/components/Host/Host.jsx'


import './Housingform.scss';


/////////////////////////////////////////////////////////////////////////

function Housingform() {
  const houseid = useParams();
  const data = allhouses.find(i => i.id === houseid.id)                                             
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);                               

//pour déplacer le HOST dans le container 3 en version mobile
  useEffect(() => {
    const media = window.matchMedia("(max-width: 375px)");                                          

    const listener = (i) => setIsMobile(i.matches);                                                 

    media.addEventListener("change", listener);                                                     

    return () => media.removeEventListener("change", listener);                                     
  }, []);


  if (!data) {
    return <Navigate to="*" />;                                                                      //Navigate redirige vers URL Erreur
  }

  return (
    <main className='Housingbody'>
      <Carousel pictures={data.pictures}/>
      <section className='desc_container_section_1'>
        <Titlelocation title={data.title} location={data.location}/>
        {!isMobile && <Host host={data.host}/>}
      </section>
      <section className='desc_container_section_2'>
        <Tags tags={data.tags}/>
        <Rating rating={data.rating}></Rating>
        {isMobile && <Host host={data.host}/>}
      </section>
      <section className='desc_container_section_3'>
        <Collapsebutton title = "Description" text = {data.description}/>
        <Collapsebutton title = "Équipements" text = {data.equipments.join('\n')}/> 
      </section>
    </main>
  )
}

export default Housingform;