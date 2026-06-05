import React from 'react'
import { FaUser, FaCalendarAlt } from 'react-icons/fa'

const blogPosts = [
  {
    title: "10 Tips for Your First Trip to Europe",
    author: "Jane Doe",
    date: "January 15, 2026",
    excerpt: "Planning your first European adventure? Here are 10 essential tips to make your trip smooth and unforgettable.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "How to Pack Light for a 2-Week Vacation",
    author: "John Smith",
    date: "January 10, 2026",
    excerpt: "Say goodbye to heavy luggage! Learn the art of packing light with our ultimate guide for a two-week trip.",
    image: "https://images.unsplash.com/photo-1562014293-35a873035c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Most Underrated Foodie Destinations",
    author: "Maria Garcia",
    date: "January 5, 2026",
    excerpt: "Forget Paris and Rome. Discover these hidden gems for food lovers that will tantalize your taste buds.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">From Our Blog</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Get inspired with our latest travel articles, tips, and stories from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-6">
                    <FaUser className="mr-2 text-green-500" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-green-500" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 h-16">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a href="#" className="font-semibold text-green-600 hover:text-green-700 transition-colors">
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog