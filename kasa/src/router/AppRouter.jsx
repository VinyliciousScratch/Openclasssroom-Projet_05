import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Home from '../pages/Home/Home.jsx'
import Housingform from '../pages/Housingform/Housingform.jsx'
import About from '../pages/About/About.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'

function AppRouter() {
    return(
       <Router>
            <Header />
            <Routes>
                <Route path = "/" element ={<Home />} />
                <Route path = "/housing-form" element ={<Housingform />} />
                <Route path = "/about" element ={<About />} />
                <Route path = "*" element ={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default AppRouter;