import { Link } from "react-router-dom";
import { useState } from "react";

// Logo Icon
const ShopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-gray-100 dark:border-neutral-800 shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <ShopIcon />
          <h1 className="text-xl sm:text-2xl font-black tracking-widest 
                          text-gray-800 dark:text-gray-200 
                          hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
            National Electronics
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 lg:space-x-10">
          <NavLink to="/" label="Home" />
          <NavLink to="/categories" label="Products" />
          <NavLink to="/contact" label="Contact" />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 
                     hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
        >
          {open ? (
            /* Close Icon */
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-4 space-y-4 bg-white dark:bg-neutral-900 border-t border-gray-100 dark:border-neutral-800">
          <MobileNavLink to="/" label="Home" onClick={() => setOpen(false)} />
          <MobileNavLink to="/categories" label="Products" onClick={() => setOpen(false)} />
          <MobileNavLink to="/contact" label="Contact" onClick={() => setOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

// Desktop NavLink
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="relative text-base font-semibold text-gray-700 dark:text-gray-300 
               transition-colors duration-300 group
               hover:text-blue-600 dark:hover:text-amber-400"
  >
    {label}
    <span className="absolute bottom-[-5px] left-0 w-full h-[3px]
                     bg-blue-600 dark:bg-amber-400
                     transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </Link>
);

// Mobile NavLink
const MobileNavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-lg font-semibold text-gray-800 dark:text-gray-200
               hover:text-blue-600 dark:hover:text-amber-400 transition"
  >
    {label}
  </Link>
);

export default Navbar;
