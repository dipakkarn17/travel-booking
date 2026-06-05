import React, { useState, useEffect } from 'react'
import { FaRegClock, FaUsers, FaMapMarkerAlt, FaHeart, FaRegHeart } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { useNavigate, Link } from 'react-router-dom'
import { tourPackages } from '../tourPackages'

const Tours = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [travelDate, setTravelDate] = useState('');
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const response = await fetch('http://localhost:5000/api/wishlist', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setWishlist(data.map(item => item.title));
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
    fetchWishlist();
  }, []);

  const toggleWishlist = async (tour) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to save to wishlist.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(tour)
      });
      if (response.ok) {
        const data = await response.json();
        if (data.action === 'add') setWishlist([...wishlist, tour.title]);
        else setWishlist(wishlist.filter(t => t !== tour.title));
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  const openBookingModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

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
          tourName: selectedTour.title,
          guests: guestCount,
          date: travelDate || new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert(`Successfully booked "${selectedTour.title}"!`);
        setIsModalOpen(false);
        setGuestCount(1);
        setTravelDate('');
        navigate('/profile'); // Redirect to profile to see the booking
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Tour Packages</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Discover our curated tour packages designed for every type of traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {tourPackages.map((tour, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row group">
              <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <button onClick={() => toggleWishlist(tour)} className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  {wishlist.includes(tour.title) ? <FaHeart className="text-red-500 text-xl" /> : <FaRegHeart className="text-gray-400 text-xl" />}
                </button>
              </div>
              <div className="p-6 flex flex-col justify-between md:w-1/2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <FaRegClock className="mr-2 text-green-500" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <FaUsers className="mr-2 text-green-500" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-2 text-green-500" />
                    <span>{tour.location}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-green-600">{tour.price}</span>
                  <button
                    onClick={() => openBookingModal(tour)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
                  >
                    Book Now
                  </button>
                  <Link to={`/tours/${tour.id}`} className="text-green-600 font-bold hover:underline ml-4">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
            
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Book {selectedTour?.title}</h2>
            
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

export default Tours