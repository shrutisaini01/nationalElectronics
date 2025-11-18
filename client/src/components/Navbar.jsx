import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Outer container: Fixed width, padding, and background/text colors that swap in dark mode
    <nav className="sticky top-0 z-50 shadow-lg bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 dark:shadow-2xl dark:shadow-gray-800 transition-colors duration-500">
      
      {/* Inner container: Max width, centered, and set up for flex layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center h-16">
        
        {/* Logo/Brand Name */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-extrabold tracking-wider 
                         text-blue-600 dark:text-amber-400 
                         hover:text-blue-700 dark:hover:text-amber-300 
                         transition-colors duration-300">
            National Electronics
          </h1>
        </Link>
        
        {/* Navigation Links */}
        {/* Hidden on small screens, shown as a horizontal row on medium/large screens */}
        <div className="hidden sm:flex space-x-8 text-lg font-medium">
          <Link 
            to="/" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/categories" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-200"
          >
            Products
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* --- You would typically add a mobile menu button (hamburger icon) here --- */}
        {/* For simplicity, I've omitted the mobile menu for now, showing only the desktop links. */}
        
      </div>
    </nav>
  );
}

export default Navbar;