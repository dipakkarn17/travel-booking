import React from 'react'

const PopularDestinations = () => {
  const destinations = [
    {
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Paris, France',
      description: 'The City of Light draws millions of visitors every year with its unforgettable ambiance.',
      price: '$1,200',
    },
    {
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Venice, Italy',
      description: 'Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands.',
      price: '$1,500',
    },
    {
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'New York, USA',
      description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.',
      price: '$1,800',
    },
    {
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Agra, India',
        description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna.',
        price: '$900',
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our top-rated destinations and find your perfect getaway.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src={destination.image} alt={destination.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold text-lg">{destination.price}</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularDestinations