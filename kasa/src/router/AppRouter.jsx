import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home.jsx'
import Housingform from '../pages/Housingform.jsx'
import About from '../pages/About.jsx'
import NotFound from '../pages/NotFound.jsx'

function AppRouter() {
    return(
       <Router>
            <Header />
            <Routes>
                <Route path = "/" element ={<Home/>} />
                <Route path = "/housing-form" element ={<Housingform/>} />
                <Route path = "/about" element ={<About/>} />
                <Route path = "*" element ={<NotFound/>} />
            </Routes>
        </Router>
    )
}
export default AppRouter;