import { Link } from "react-router-dom"; 
import newLogo from "../assets/newLogo.png"
import { Zap, ShieldCheck, Truck, Clock, Lightbulb, Fan, WashingMachine } from 'lucide-react'; 

// --- Reusable Utility Components ---

const FeatureCard = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-neutral-800 shadow-lg border-t-4 border-blue-400 dark:border-amber-400 transition-all duration-300 hover:shadow-xl group">
    <Icon className="w-10 h-10 mb-4 text-blue-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);

const CategoryDisplayCard = ({ Icon, title }) => (
  <div
    className="flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-800 border border-neutral-700 transition-all duration-300 shadow-md h-full"
  >
    <Icon className="w-8 h-8 mb-2 text-blue-600 dark:text-amber-400" />
    <span className="text-sm font-semibold text-gray-200 capitalize text-center">{title}</span>
  </div>
);

// --- Main Home Component ---

function Home() {
  return (
    // Ensuring background color and full height
    <div className="min-h-screen bg-neutral-950 text-gray-100 flex items-center justify-center py-20 px-4">
      <div className="max-w-7xl mx-auto py-12 sm:py-20 space-y-16">
        
        {/* 1. HERO SECTION (Main Banner) */}
        <section className="bg-neutral-900 rounded-3xl shadow-2xl p-6 sm:p-12 lg:p-16 border-t-8 border-blue-600 dark:border-amber-400 transition-all duration-500">
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            
            {/* Text Content */}
            <div className="md:w-3/5 space-y-6 text-center md:text-left">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-amber-400 dark:to-orange-500">
                  Powering Your Home
                </span>
                <br />
                with Quality Electronics ⚡
              </h2>
              
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-300">
                Your trusted source for <strong>reliable electrical and electronic goods.</strong> From energy-efficient LEDs, Fans, Wires and Cables to modern TVs and Appliances, we stock everything you need.
              </p>
              
              {/* Call to Action (CTA) */}
              <div className="flex justify-center md:justify-start pt-4">
                <Link 
                  to="/categories" 
                  className="py-3 px-8 text-xl font-bold rounded-full shadow-lg transition-all duration-300 ease-in-out 
                            bg-blue-600 hover:bg-blue-700 text-white 
                            dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-gray-900 
                            hover:shadow-xl hover:translate-y-[-2px] tracking-wide"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            {/* Logo/Image Section - NOW USING IMPORTED LOGO */}
<div className="md:w-2/5 flex justify-center">
  {/* Removed the gray background box and its padding. 
      The image itself now carries the border and styling. */}
  <img
    src={newLogo}
    alt="National Electronics Logo"
    // Adjusted dimensions for "little enlarged" and removed unnecessary p-4 from the image
    className="w-80 h-auto object-contain border-2 border-white rounded-2xl 
               transform scale-110 hover:scale-115 transition-transform duration-300"
  />
</div>
            
          </div>
        </section>

        {/* --- */}

        {/* 2. VALUE PROPOSITION / GUARANTEES */}
        <section>
            <h2 className="text-3xl font-bold text-center mb-10 text-white">Why Shop With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                    Icon={ShieldCheck}
                    title="Certified Quality"
                    description="All products sourced are guaranteed genuine and come with a full manufacturer warranty."
                />
                <FeatureCard
                    Icon={Truck}
                    title="Fast & Secure Delivery"
                    description="Reliable logistics ensuring your electronics arrive safely and quickly to your location."
                />
                <FeatureCard
                    Icon={Clock}
                    title="24/7 Support"
                    description="Our expert customer service team is ready to assist you around the clock with any queries."
                />
            </div>
        </section>
        
        {/* --- */}

        {/* 3. TOP CATEGORIES DISPLAY (Non-Clickable) */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Products We Deal In
          </h2>
          {/* Centering the 5 items in the grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
            <CategoryDisplayCard Icon={Lightbulb} title="Bulbs & Lights" />
            <CategoryDisplayCard Icon={Fan} title="Fans & Cooling" />
            <CategoryDisplayCard Icon={Zap} title="Switches & Plugs" />
            <CategoryDisplayCard Icon={WashingMachine} title="Appliances" />
            <CategoryDisplayCard Icon={Zap} title="LED Panels" />
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;