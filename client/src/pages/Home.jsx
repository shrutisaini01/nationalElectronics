import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500 flex items-center justify-center p-4 sm:p-8">
      <section className="max-w-4xl w-full p-6 sm:p-10 rounded-3xl shadow-2xl bg-white dark:bg-gray-800 border-t-8 border-blue-500 dark:border-amber-400 transition-all duration-500">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="National Electronics Logo"
            // Ensure logo is visible and slightly larger on larger screens
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain p-2 rounded-full ring-4 ring-blue-500 dark:ring-amber-400 transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 dark:from-amber-400 dark:to-orange-500 transition-colors duration-500">
          Welcome to National Electronics ⚡
        </h2>
        
        {/* Subtitle/Description */}
        <p className="text-lg sm:text-xl mb-8 text-center font-medium leading-relaxed text-gray-600 dark:text-gray-300">
  Your trusted source for{" "}
  <span className="font-semibold text-gray-800 dark:text-gray-100 text-xl">
    quality electronic and electrical goods
  </span>
  . We stock everything from lights and bulbs to fans, LEDs, TVs, and washing machines.
</p>


        {/* Call to Action (CTA) */}
        <div className="flex justify-center">
            <a 
                href="/products" // Replace with a link to your product catalog or 'Contact Us' page
                className="py-3 px-8 text-xl font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out 
                           bg-blue-600 hover:bg-blue-700 text-white 
                           dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-gray-900 
                           hover:shadow-xl hover:translate-y-[-2px]"
            >
                View Our Catalog
            </a>
        </div>
        
      </section>
    </div>
  );
}

export default Home;