import './Home.scss'
import source_img from '../../images/source/Image_source_1.png';
import gallery_data from '../../../recent_homes.json';
import Banner from '../../../src/components/Banner/Banner.jsx';
import Gallerycard from '../../../src/components/Gallerycard/Gallerycard.jsx';


function Home() {
  return (
    <main className='homebody'>
      <Banner source_img ={source_img} text={"Chez vous, partout et ailleurs"}></Banner>
      <Gallerycard gallery_data ={gallery_data}/>
    </main>
  );
}

export default Home;


