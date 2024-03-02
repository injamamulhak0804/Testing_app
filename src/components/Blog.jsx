import React from 'react'

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-poppins"> 
    <h2 className="text-3xl font-bold mb-8">Welcome to My Blog</h2>
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">Exploring the Beauty of Nature</h3>
        <p className="text-gray-700">Today, let's delve into the serene landscapes of countryside life. There's something magical about waking up to the chirping of birds and the gentle rustle of leaves...</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">The Art of Cooking: A Culinary Journey</h3>
        <p className="text-gray-700">Cooking is not just about following recipes; it's about creativity and expression. Join me as we explore the rich tapestry of flavors and aromas from around the world...</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">Finding Balance in a Hectic World</h3>
        <p className="text-gray-700">In the hustle and bustle of modern life, it's easy to lose sight of what truly matters. Let's take a step back and reflect on the importance of finding balance...</p>
      </div>
      {/* You can add more blog posts here */}
    </div>
  </div>
  )
}

export default Blog