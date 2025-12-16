import { useState, useEffect } from "react";

const categories = ["fans", "switches", "bulbs", "lights", "appliances", "wires"];

// Define a reusable Product Card Component to handle its own state
const ProductCard = ({ product }) => {
  // Local state to manage the visibility of the message for *this specific card*
  const [showMsg, setShowMsg] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumSignificantDigits: 3
    }).format(price);
  };

  return (
    // STEP 2: Set the card to position: relative
    <div
      key={product.ID}
      className="group bg-neutral-900 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-800 transition-all duration-300 overflow-hidden flex flex-col relative"
    >
      <div className="relative h-48 overflow-hidden bg-neutral-800">
        <img
          src={`http://localhost:5000/api/${product.Image}`}
          alt={product.Title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-lg font-bold text-gray-100 line-clamp-1 group-hover:text-blue-400 transition-colors">
            {product.Title}
          </h2>
          <p className="text-sm text-gray-400 mt-2 line-clamp-2 h-10">
            {product.Description}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Price</span>
            <span className="text-lg font-bold text-emerald-400">
              {formatPrice(product["Estimated Price"])}
            </span>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setShowMsg(true)} // Toggle message for THIS card
            className="p-2.5 bg-white text-black rounded-xl hover:bg-blue-500 hover:text-white transition-colors shadow-lg shadow-black/20 active:scale-95"
          >
            {/* Assuming CartIcon is defined elsewhere */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          </button>
        </div>
      </div>

      {/* STEP 3: Message Box (absolute inside the card) */}
      {showMsg && (
        // Positioned over the card, slightly transparent, and includes a close button
        <div className="absolute inset-0 bg-neutral-900/95 backdrop-blur-sm text-gray-100 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-opacity duration-300">
          <button 
            onClick={() => setShowMsg(false)} 
            className="absolute top-2 right-2 text-gray-400 hover:text-white p-1 rounded-full"
          >
            {/* Cross Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <p className="text-lg font-medium">Hey! Please dial:</p>
          <p className="text-2xl font-bold text-emerald-400 my-2"> +91 9719209991 </p>
          <p className="text-sm text-gray-400">to quickly place your order.</p>
        </div>
      )}
    </div>
  );
};


function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState("fans");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/${activeCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      {/* ... (Category Tabs remain the same) ... */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out capitalize
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "bg-neutral-900 text-gray-400 border border-neutral-800 hover:bg-neutral-800 hover:text-white"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading
          ? /* Render Skeletons */
            [...Array(4)].map((_, i) => (
              <div key={i} className="bg-neutral-900 rounded-2xl p-4 h-80 animate-pulse border border-neutral-800">
                <div className="h-40 bg-neutral-800 rounded-xl mb-4"></div>
                <div className="h-4 bg-neutral-800 rounded w-3/4 mb-2"></div>
              </div>
            ))
          : products.map((product) => (
              // STEP 1: Use the new ProductCard component
              <ProductCard key={product.ID} product={product} />
            ))}
      </div>
    </div>
  );
}

export default CategoriesPage;