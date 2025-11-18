import { Link } from "react-router-dom";

// Simple SVG Icon for the site logo to enhance the brand look
const ShopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow-xl bg-white/95 backdrop-blur-md dark:bg-neutral-900/95 dark:shadow-neutral-800 transition-colors duration-500 border-b border-gray-100 dark:border-neutral-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        
        {/* Logo/Brand Name */}
        <Link to="/" className="flex items-center">
          <ShopIcon className="text-blue-600 dark:text-amber-400" />
          <h1 className="text-xl sm:text-2xl font-black tracking-widest 
                          text-gray-800 dark:text-gray-200 
                          hover:text-blue-600 dark:hover:text-amber-400 
                          transition-colors duration-300">
            National Electronics
          </h1>
        </Link>
        
        {/* Navigation Links (Desktop) */}
        <div className="hidden sm:flex space-x-6 lg:space-x-10">
          <NavLink to="/" label="Home" />
          <NavLink to="/categories" label="Products" />
          <NavLink to="/contact" label="Contact" />
        </div>

        {/* Mobile menu button slot */}
        <div className="sm:hidden">
            {/* Hamburger icon/button would go here */}
        </div>
      </div>
    </nav>
  );
}

// Reusable Navigation Link Component
const NavLink = ({ to, label }) => (
  <Link 
    to={to} 
    className="relative text-base font-semibold text-gray-700 dark:text-gray-300 
               transition-colors duration-300 group 
               hover:text-blue-600 dark:hover:text-amber-400 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-sm"
  >
    {label}
    {/* Underline hover effect */}
    <span className="absolute bottom-[-5px] left-0 w-full h-[3px] 
                     bg-blue-600 dark:bg-amber-400 
                     transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
    </span>
  </Link>
);

export default Navbar;