import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaRegClock, FaUsers, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { tourPackages } from '../tourPackages'

const TourDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const tour = tourPackages.find((t) => t.id === parseInt(id))
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(1);
  const [travelDate, setTravelDate] = useState('');

  if (!tour) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Tour not found</h2>
        <Link to="/tours" className="text-green-600 hover:underline mt-4 inline-block">Back to Tours</Link>
      </div>
    )
  }

  const handleConfirmBooking = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to book a tour.');
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          tourName: tour.title,
          guests: guestCount,
          date: travelDate || new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert(`Successfully booked "${tour.title}"!`);
        setIsModalOpen(false);
        setGuestCount(1);
        setTravelDate('');
        navigate('/profile');
      } else {
        const data = await response.json();
        alert(data.message || 'Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('An error occurred during booking.');
    }
  };

  return (
    <div className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl font-bold mb-2">{tour.title}</h1>
                <div className="flex items-center gap-6 text-sm font-semibold">
                  <div className="flex items-center"><FaRegClock className="mr-2" /> {tour.duration}</div>
                  <div className="flex items-center"><FaUsers className="mr-2" /> {tour.groupSize}</div>
                  <div className="flex items-center"><FaMapMarkerAlt className="mr-2" /> {tour.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{tour.overview}</p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <FaCheckCircle className="text-green-500 mr-2" /> {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-fit border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">{tour.price}</div>
              <p className="text-gray-500 mb-6">per person</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 px-6 rounded-full transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaXmark size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Book {tour.title}</h2>
            
            <form onSubmit={handleConfirmBooking}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Number of Guests</label>
                <input 
                  type="number" 
                  min="1" 
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Travel Date</label>
                <input 
                  type="date" 
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default TourDetails