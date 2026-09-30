import React from 'react'
import Home from './components/home'
import AboutUs from './components/AboutUs'
import Courses from './components/Courses'
import Testimonial from './components/testimonial'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Home/>
      <AboutUs />
      <Courses />
      <Testimonial />
      <Gallery />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
