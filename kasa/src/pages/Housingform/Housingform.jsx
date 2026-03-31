import { useParams, Navigate } from 'react-router-dom';
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
  const data = allhouses.find(i => i.id === houseid.id)            //recupere dans le json les infos correspondantes à l'ID
    
  if (!data) {
    return <Navigate to="*" />;               //Navigate redirige vers URL
  }

  return (
    <main className='Housingbody'>
      <Carousel pictures={data.pictures}/>
      <section className='desc_container_section_1'>
        <Titlelocation title={data.title} location={data.location}/>
        <Host host={data.host}/>
      </section>
      <section className='desc_container_section_2'>
        <Tags tags={data.tags}/>
        <Rating rating={data.rating}></Rating>
      </section>
      <section className='desc_container_section_3'>
        <Collapsebutton title = "Description" text = {data.description}/>
        <Collapsebutton title = "Équipements" text = {data.equipments.join('\n')}/> 
      </section>
    </main>
  )
}

export default Housingform;