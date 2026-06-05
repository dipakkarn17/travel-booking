import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data))
        alert("Login Successful!")
        navigate('/')
        window.location.reload()
      } else {
        setError(data.message || "Login Failed")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Something went wrong! Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button 
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} 
              type="submit"
              disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account? <Link to="/signup" className="text-green-500 hover:text-green-700 font-bold">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login