import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import a from '../assets/airasia.png'
import b from '../assets/turkish.png'
import c from '../assets/Thai_Airways_logo.svg.png'
import d from '../assets/dragonair.png'

const Footer = () => {
  return (
    <div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-8 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p className="text-gray-300">We are a leading travel agency providing exceptional experiences around the globe.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="text-gray-300">
                            <li className="mb-2"><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                            <li className="mb-2"><Link to="/destinations" className="hover:text-green-400 transition-colors">Destinations</Link></li>
                            <li className="mb-2"><Link to="/tours" className="hover:text-green-400 transition-colors">Packages</Link></li>
                            <li className="mb-2"><Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                        <p className="text-gray-300">123 Travel Street, malanwa, Nepal</p>
                        <p className="text-gray-300">Email: info@travel.com</p>
                        <p className="text-gray-300">Phone: +977 981 208 6413</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition-colors"><FaFacebookF /></a>
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition-colors"><FaTwitter /></a>
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-pink-500 transition-colors"><FaInstagram /></a>
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-700 transition-colors"><FaLinkedinIn /></a>
                        </div>
                    </div>

                </div>

                {/* Partners Section */}
                <div className="mt-4 border-t border-gray-800 pt-6">
                    <h3 className="text-center text-sm font-semibold mb-4 uppercase tracking-wider">Our Trusted Partners</h3>
                    <div className="flex justify-center items-center gap-8 ">
                        <img src={a} alt="AirAsia" className="h-8 md:h-10 object-contain rounded-full shadow-lg" />
                        <img src={b} alt="Turkish Airlines" className="h-8 md:h-10 object-contain" />
                        <img src={c} alt="Thai Airways" className="h-8 md:h-10 object-contain" />
                        <img src={d} alt="Dragonair" className="h-8 md:h-10 object-contain" />
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Dipak Travel Agency. All rights reserved.
                </div>

            </div>

        </div>

    </div >
  )
}

export default Footer