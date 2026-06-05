import React from 'react'

const allDestinations = [
  { image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Paris, France', description: 'The City of Light, known for its art, fashion, and culture.', price: '$1,200' },
  { image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Venice, Italy', description: 'A city of canals, gondolas, and Renaissance architecture.', price: '$1,500' },
  { image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'New York, USA', description: 'The city that never sleeps, a global hub of finance and culture.', price: '$1,800' },
  { image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Agra, India', description: 'Home to the iconic Taj Mahal, a monument of love.', price: '$900' },
  { image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Kyoto, Japan', description: 'Famous for its classical Buddhist temples, as well as gardens, imperial palaces.', price: '$1,400' },
  { image: 'https://images.unsplash.com/photo-1528214254222-0046c5a2a5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Cairo, Egypt', description: 'Set on the Nile River, with Giza\'s famed pyramids nearby.', price: '$1,100' },
  { image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Dubai, UAE', description: 'A futuristic city with ultramodern architecture and a lively nightlife scene.', price: '$2,000' },
  { image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Machu Picchu, Peru', description: 'An Incan citadel set high in the Andes Mountains in Peru.', price: '$1,700' },
];

const Destinations = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Destinations</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Explore our extensive list of travel destinations spanning across every continent.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allDestinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="relative h-56 overflow-hidden">
                <img src={destination.image} alt={destination.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.title}</h3>
                <p className="text-gray-600 text-sm mb-4 h-16">{destination.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-600 font-bold text-lg">{destination.price}</span>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Destinations