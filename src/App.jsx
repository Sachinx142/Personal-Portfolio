import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactForm from './Components/ContactForm'

function App() {
  

  return (
    <>
       <BrowserRouter>
        <Navbar/>
       <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<AboutPage/>}/>

        <Route path='/project' element={<ProjectPage/>}/>

        <Route path='/testimonial' element={<ReviewsPage/>}/>

        <Route path='/contact' element={<ContactForm/>}/>
        


       </Routes>
      <Footer/>
       </BrowserRouter>
        </>
  )
}

export default App