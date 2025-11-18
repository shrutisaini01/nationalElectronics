function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-500 border-t border-gray-200 dark:border-gray-700">
        
        {/* 1. Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Branding and Contact */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-2xl font-extrabold tracking-wider text-blue-600 dark:text-amber-400 transition-colors duration-300">
              National Electronics
            </h3>
            <p className="text-sm max-w-sm">
              Your reliable source for electrical and electronic goods, specializing in quality products for home and business.
            </p>
            
            <div className="pt-2 text-sm space-y-1">
              <p>
                📞 <span className="font-semibold">Contact:</span>{" "}
                <a
                  href="tel:+919719209991"
                  className="hover:text-blue-500 dark:hover:text-amber-300 transition-colors"
                >
                  +91-9719209991
                </a>
              </p>
              <p>
                📧 <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:vikassaini.0123@rediffmail.com"
                  className="hover:text-blue-500 dark:hover:text-amber-300 transition-colors"
                >
                  vikassaini.0123@rediffmail.com
                </a>
              </p>
            </div>
          </div>
  
          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-500 dark:hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-blue-500 dark:hover:text-amber-300 transition-colors">Product Catalog</a></li>
              <li><a href="/about" className="hover:text-blue-500 dark:hover:text-amber-300 transition-colors">About Us</a></li>
            </ul>
          </div>
  
          {/* Column 3: Categories */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              Top Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/category/lighting" className="hover:text-blue-500 dark:hover:text-amber-300 transition-colors">Lights & LEDs</a></li>
              <li><a href="/category/appliances" className="hover:text-blue-500 dark:hover:text-amber-300 transition-colors">Home Appliances (TVs, Washers)</a></li>
              <li><a href="/category/fans" className="hover:text-blue-500 dark:hover:text-amber-300 transition-colors">Fans & Cooling</a></li>
              <li><a href="/category/bulbs" className="hover:text-blue-500 dark:hover:text-amber-300 transition-colors">Electrical Bulbs</a></li>
            </ul>
          </div>
        </div>
  
        {/* 2. Copyright Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 transition-colors duration-500 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-600 dark:text-gray-400">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              National Electronics
            </span>{" "}
            — All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  