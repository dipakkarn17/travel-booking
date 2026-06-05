import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { FaEarthAmericas } from 'react-icons/fa6'

const Navbar = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    navigate('/login')
  }

  return (
    <div className='sticky top-0 z-50 flex justify-between items-center px-4 py-4 bg-white/90 backdrop-blur-md shadow-md uppercase transition-all duration-300'>
        {/*Navbar */}

        <div className='flex items-center gap-2'>
            <FaEarthAmericas  className='text-center text-green-500 text-3xl'/>
            <h1 className='text-green-500 text-2xl font-bold tracking-wide'>TRAVEL<span className='text-yellow-500'>IN</span></h1>
        </div>

        <div className='hidden md:flex items-center space-x-6 font-semibold'>
            <Link to='/' className='text-gray-600 hover:text-green-500 transition-colors duration-300'>Home</Link>
            <Link to='/about' className='text-gray-600 hover:text-green-500 transition-colors duration-300'>About us</Link>
            <Link to='/destinations' className='text-gray-600 hover:text-green-500 transition-colors duration-300'>Destinations</Link>
            <Link to='/tours' className='text-gray-600 hover:text-green-500 transition-colors duration-300'>Tours</Link>
            <a href='#' className='text-gray-600 hover:text-green-500 transition-colors duration-300'>Pages</a>
            <Link to='/blog' className='text-gray-600 hover:text-green-500 transition-colors duration-300'>Blog</Link>
            <Link to='/contact' className='text-gray-600 hover:text-green-500 transition-colors duration-300'>Contact</Link>
            <FaSearch className='text-gray-600 hover:text-green-500 cursor-pointer transition-colors'/>
        </div>

        <div className='flex items-center gap-4 justify-end'>
            <Link to={user ? "/profile" : "/login"}>
            <BsPersonCircle
             className='text-gray-600 hover:text-green-500 text-2xl cursor-pointer transition-colors'/>
            </Link>
            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/profile" className="text-green-600 font-bold capitalize hover:text-green-700 transition-colors">
                  {user.name}
                </Link>
                <button onClick={handleLogout} className='text-gray-600 font-semibold hover:text-red-500 cursor-pointer transition-colors'>Logout</button>
              </div>
            ) : (
              <Link to="/login" className=' text-gray-600 font-semibold hover:text-blue-500 cursor-pointer transition-colors'>Login/Register</Link>
            )}
            <button className='bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300'>Book Now</button>
        </div>
    </div>
  )
}

export default Navbar