import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Testimonials from './Components/Testimonials'
import Services from './Components/Services'
import PopularDestinations from './Components/PopularDestinations'
import SpecialOffers from './Components/SpecialOffers'
import About from './Components/About'
import Destinations from './Components/Destinations'
import Tours from './Components/Tours'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Profile from './Components/Profile'
import TourDetails from './Components/TourDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <SpecialOffers />
            <PopularDestinations />
            <Services />
            <Testimonials />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App