
import source_img from '../../images/source/Image_source_2.png';
import './About.scss'
import about_data from './About.json'
import Banner from '../../../src/components/Banner/Banner.jsx';
import Collapsebutton from '../../../src/components/Collapsebutton/Collapsebutton.jsx';




function About() {
  return(
      <main className='aboutbody'>
        <Banner source_img ={source_img} text={""}/>
        <section className='container_list'>
          {about_data.map((btn) => (
            <Collapsebutton 
              key={btn.id}
              title={btn.title}
              text={btn.text}
            />
          ))}
        </section>  
      </main>
    ) 
}

export default About;