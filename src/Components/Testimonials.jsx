import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "This was the best travel experience of my life! The booking process was seamless and the destination was breathtaking.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      location: "London, UK",
      rating: 5,
      text: "Excellent customer service. They helped me plan a last-minute trip to Bali and everything was perfect.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emily Davis",
      location: "Sydney, Australia",
      rating: 4,
      text: "Highly recommend! The tour packages are very affordable and the guides are knowledgeable.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We take pride in providing exceptional travel experiences. Here is what our travelers have to say about their journeys with us.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className='flex items-center mb-6'>
                    <img src={testimonial.image} alt={testimonial.name} className='w-14 h-14 rounded-full mr-4 object-cover border-2 border-green-500' />
                    <div>
                        <h3 className='font-bold text-lg text-gray-800'>{testimonial.name}</h3>
                        <p className='text-green-600 text-sm font-medium'>{testimonial.location}</p>
                    </div>
                </div>
                
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials