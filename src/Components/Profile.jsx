import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [bookings, setBookings] = useState([])
  const [wishlist, setWishlist] = useState([])

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      setName(parsedUser.name)
      fetchBookings()
      fetchWishlist()
    }
  }, [])

  const fetchBookings = async () => {
    const token = localStorage.getItem('token')
    if (!token) return

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (response.ok) {
        const data = await response.json()
        setBookings(data)
      }
    } catch (error) {
      console.error("Error fetching bookings:", error)
    }
  }

  const fetchWishlist = async () => {
    const token = localStorage.getItem('token')
    if (!token) return

    try {
      const response = await fetch('http://localhost:5000/api/wishlist', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (response.ok) {
        const data = await response.json()
        setWishlist(data)
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error)
    }
  }

  const handleRemoveWishlist = async (item) => {
    const token = localStorage.getItem('token')
    if (!token) return

    try {
      const response = await fetch('http://localhost:5000/api/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(item)
      })

      if (response.ok) {
        const data = await response.json()
        if (data.action === 'remove') {
          setWishlist(wishlist.filter((i) => i._id !== item._id))
        }
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error)
    }
  }

  const handleCancelBooking = async (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        alert('Booking canceled successfully.');
        setBookings(bookings.filter(b => b._id !== bookingId));
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to cancel booking.');
      }
    } catch (error) {
      console.error('Error canceling booking:', error);
      alert('An error occurred while canceling the booking.');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const token = localStorage.getItem('token')
    if (!token) {
      setError('You are not authenticated.')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name })
      })

      const data = await response.json()

      if (response.ok) {
        const updatedUser = { ...user, ...data }
        localStorage.setItem('user', JSON.stringify(updatedUser))
        setUser(updatedUser)
        setIsEditing(false)
        alert('Profile updated successfully!')
      } else {
        setError(data.message || 'Failed to update profile.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    navigate('/login')
  }

  if (!user) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please log in to view your profile.</h2>
          <Link to="/login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">My Profile</h1>
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
          
          {isEditing ? (
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <p className="text-gray-800 text-lg">{user.email}</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Saving...' : 'Save'}
                </button>
                <button 
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="mb-4">
                <p className="text-gray-600 font-semibold">Name:</p>
                <p className="text-gray-800 text-lg capitalize">{user.name}</p>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 font-semibold">Email:</p>
                <p className="text-gray-800 text-lg">{user.email}</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button 
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors"
                >
                  Edit Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors"
                >
                  Logout
                </button>
              </div>
            </>
          )}

          {/* My Bookings Section */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Bookings</h2>
            {bookings.length > 0 ? (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking._id} className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:shadow-md transition-shadow">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{booking.tourName}</h3>
                      <p className="text-sm text-gray-600">Date: {new Date(booking.date).toLocaleDateString()}</p>
                      <p className="text-sm text-gray-600">Guests: {booking.guests}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                      <button
                        onClick={() => handleCancelBooking(booking._id)}
                        className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-full transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center italic">You haven't booked any trips yet.</p>
            )}
          </div>

          {/* My Wishlist Section */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Wishlist</h2>
            {wishlist.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {wishlist.map((item) => (
                  <div key={item._id} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                    <div className="flex gap-4 items-center">
                      <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                        <p className="text-green-600 font-semibold">{item.price}</p>
                        <p className="text-sm text-gray-500">{item.duration} • {item.location}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveWishlist(item)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-4 rounded-full transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center italic">Your wishlist is empty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile