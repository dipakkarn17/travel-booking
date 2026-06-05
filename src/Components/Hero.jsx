import React from 'react'
import { FiSearch } from "react-icons/fi";
import background from '../assets/4062.jpg'

const Hero = () => {
  return (
    <div>

        <div className='relative w-full h-[85vh]'>
            <img src={background} alt='sun' className='w-full h-full object-cover'/>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4'>
                <h1 className='text-white text-4xl  font-bold text-center drop-shadow-lg'><span className='text-green-400 font-serif italic'>Explore </span> the World with Us</h1>
                <p className='text-gray-100 font-medium text-lg text-center mt-4 max-w-2xl mx-auto drop-shadow-md'>Discover breathtaking destinations, unforgettable experiences, and seamless travel planning.</p>
                <button className='mt-8 bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-300 hover:text-green-600 transition-all duration-300'>Get Started</button>
            </div>

        {/* flight search */}
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-6 w-[90%] max-w-5xl z-20 border border-gray-100">
      <div className="flex flex-wrap items-end gap-2">

        {/* Flying From */}
        <div className="flex flex-col flex-1 min-w-37.5">
          <label className="text-sm font-semibold text-gray-600 mb-1">Flying From</label>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>City or airport</option>
          </select>
        </div>

        {/* Flying To */}
        <div className="flex flex-col flex-1 min-w-37.5">
          <label className="text-sm font-semibold text-gray-600 mb-1">Flying To</label>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>City or airport</option>
          </select>
        </div>

        {/* Depart */}
        <div className="flex flex-col min-w-32.5">
          <label className="text-sm font-semibold text-gray-600 mb-1">Depart</label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Return */}
        <div className="flex flex-col min-w-32.5">
          <label className="text-sm font-semibold text-gray-600 mb-1">Return</label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Travellers */}
        <div className="flex flex-col min-w-30">
          <label className="text-sm font-semibold text-gray-600 mb-1">Travellers</label>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>1 traveller</option>
            <option>2 travellers</option>
            <option>3 travellers</option>
            <option>4 travellers</option>
            <option>5 travellers</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-bold shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
          <FiSearch size={18} />
          Search Now
        </button>

      </div>
    </div>


        </div>
    </div>
  )
}

export default Hero