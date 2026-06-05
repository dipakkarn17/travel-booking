import React from 'react'
import { FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaPlane className="text-4xl text-green-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Flight Booking',
      description: 'We provide the best flight booking services with affordable prices and comfortable journeys.'
    },
    {
      icon: <FaHotel className="text-4xl text-green-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Hotel Booking',
      description: 'Stay at the best hotels with our exclusive deals and packages for a luxurious experience.'
    },
    {
      icon: <FaUmbrellaBeach className="text-4xl text-green-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Beach Tours',
      description: 'Enjoy relaxing beach tours with our curated packages to the most beautiful coastal destinations.'
    },
    {
      icon: <FaConciergeBell className="text-4xl text-green-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Concierge Services',
      description: 'Our dedicated concierge team is available 24/7 to assist you with all your travel needs.'
    }
  ]

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We offer a wide range of services to make your travel experience unforgettable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-500 transition-all duration-300 text-center cursor-pointer transform hover:-translate-y-2">
              <div className="mb-6 flex justify-center bg-green-100 group-hover:bg-white/20 w-20 h-20 mx-auto rounded-full items-center transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services