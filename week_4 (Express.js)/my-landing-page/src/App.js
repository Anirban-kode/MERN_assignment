import React from "react";

const Navbar = () => (
  <nav className="bg-white p-4 shadow-md flex justify-between items-center">
    <h1 className="text-lg font-bold text-green-700">EcoStore</h1>
    <ul className="flex gap-6 text-gray-700">
      <li><a href="#" className="hover:text-green-600">Home</a></li>
      <li><a href="#" className="hover:text-green-600">Shop</a></li>
      <li><a href="#" className="hover:text-green-600">About</a></li>
      <li><a href="#" className="hover:text-green-600">Contact</a></li>
    </ul>
  </nav>
);

const Hero = () => (
  <section className="flex flex-col items-center justify-center text-center bg-green-50 py-24 px-6">
    <h2 className="text-4xl font-extrabold text-green-700">Sustainable Living</h2>
    <p className="mt-2 text-gray-600 max-w-md">Discover eco-friendly products that are kind to you and the planet.</p>
    <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Shop Now</button>
  </section>
);

const products = [
  { id: 1, name: "Reusable Bottle", price: "$15", image: "https://i.pinimg.com/originals/42/ac/23/42ac2366c0978fda40c6fa4e03c8c4fd.jpg" },
  { id: 2, name: "Eco-Friendly Bag", price: "$10", image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6130a094622557.5e8373506b486.jpg" },
  { id: 3, name: "Bamboo Toothbrush", price: "$5", image: "https://www.unclejonssoap.com/uploads/2/6/7/0/26700255/s841777213772365416_p136_i3_w1600.jpeg" },
];

const Products = () => (
  <section className="py-12 bg-green-100 text-center">
    <h2 className="text-3xl font-bold text-green-700 mb-6">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-4 text-lg font-semibold text-gray-700">{product.name}</h3>
          <p className="text-green-600 font-bold">{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white text-gray-700 text-center p-4 shadow-inner">
    <p>&copy; 2025 EcoStore. All rights reserved.</p>
    <div className="flex justify-center gap-6 mt-2">
      <a href="#" className="text-green-600 hover:underline">Facebook</a>
      <a href="#" className="text-green-600 hover:underline">Twitter</a>
      <a href="#" className="text-green-600 hover:underline">Instagram</a>
    </div>
  </footer>
);

const App = () => (
  <div className="bg-green-50 min-h-screen flex flex-col items-center">
    <Navbar />
    <Hero />
    <Products />
    <Footer />
  </div>
);

export default App;