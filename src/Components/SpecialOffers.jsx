import React from 'react'
import { FaCalendarAlt, FaStar } from 'react-icons/fa'

const SpecialOffers = () => {
  const offers = [
    {
      title: "Bali Weekend Getaway",
      price: "$500",
      originalPrice: "$800",
      discount: "35% OFF",
      rating: 4.8,
      duration: "3 Days",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Swiss Alps Adventure",
      price: "$1200",
      originalPrice: "$1500",
      discount: "20% OFF",
      rating: 4.9,
      duration: "5 Days",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Maldives Honeymoon",
      price: "$2000",
      originalPrice: "$2500",
      discount: "20% OFF",
      rating: 5.0,
      duration: "7 Days",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Special Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Grab these exclusive deals before they're gone! Limited time offers for your dream vacation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="relative h-64 overflow-hidden">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {offer.discount}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{offer.title}</h3>
                    <div className="flex items-center text-yellow-400 text-sm">
                        <FaStar className="mr-1" />
                        <span>{offer.rating}</span>
                    </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{offer.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-400 line-through text-sm mr-2">{offer.originalPrice}</span>
                        <span className="text-green-600 font-bold text-xl">{offer.price}</span>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                        View Deal
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

export default SpecialOffers