import { Link } from "react-router-dom"; // Assuming Link is available
import { Mail, Phone, MapPin } from 'lucide-react'; // Assuming lucide-react is available for icons

// Component to handle the links (just internal anchor tags for simplicity, but Link can be used)
const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="hover:text-blue-500 dark:hover:text-amber-400 transition-colors duration-200 text-gray-500 dark:text-gray-400 hover:tracking-wide inline-block"
    >
      {children}
    </a>
  </li>
);

// Component to handle the contact info
const ContactItem = ({ Icon, title, content, href, type = 'text' }) => (
    <div className="flex items-start space-x-3 text-sm">
        <Icon className="w-4 h-4 mt-1 text-blue-500 dark:text-amber-400 flex-shrink-0" />
        <div className="flex flex-col">
            <span className="font-semibold text-gray-800 dark:text-gray-200">{title}</span>
            {type === 'link' ? (
                <a 
                    href={href} 
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-amber-400 transition-colors"
                >
                    {content}
                </a>
            ) : (
                <p className="text-gray-500 dark:text-gray-400">{content}</p>
            )}
        </div>
    </div>
);


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Outer container: Using neutral shades for a cleaner dark/light transition
    <footer className="bg-gray-50 dark:bg-neutral-900 transition-colors duration-500 border-t border-gray-200 dark:border-neutral-800">
      
      {/* 1. Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
        
        {/* Column 1: Branding and Contact (Expanded to 2 cols on MD) */}
        <div className="md:col-span-2 lg:col-span-2 space-y-5">
          <Link to="/" className="flex items-center space-x-2">
            <h3 className="text-3xl font-black tracking-widest text-gray-800 dark:text-gray-100 transition-colors duration-300">
              National 
              <span className="text-blue-600 dark:text-amber-400">Electronics</span>
            </h3>
          </Link>

          <p className="text-sm max-w-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Your trusted provider of high-quality electronic and electrical products, focusing on innovation and customer service.
          </p>
          
          <div className="pt-4 space-y-3">
            <ContactItem 
                Icon={Phone} 
                title="Call Us" 
                content="+91-9719209991"
                href="tel:+919719209991"
                type="link"
            />
            <ContactItem 
                Icon={Mail} 
                title="Email" 
                content="vikassaini.0123@rediffmail.com"
                href="mailto:vikassaini.0123@rediffmail.com"
                type="link"
            />
             <ContactItem 
                Icon={MapPin} 
                title="Location" 
                content="Bhagwanpur - 247661, Uttarakhand, India"
            />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-extrabold text-lg text-gray-900 dark:text-white border-l-4 border-blue-600 dark:border-amber-400 pl-3">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/categories">Product Catalog</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Get in Touch</FooterLink>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div className="space-y-4">
          <h4 className="font-extrabold text-lg text-gray-900 dark:text-white border-l-4 border-blue-600 dark:border-amber-400 pl-3">
            Top Categories
          </h4>
          <ul className="space-y-3 text-sm">
            <FooterLink href="/categories">Lights & LEDs</FooterLink>
            <FooterLink href="/categories">Home Appliances</FooterLink>
            <FooterLink href="/categories">Fans & Cooling</FooterLink>
            <FooterLink href="/categories">Electrical Bulbs</FooterLink>
          </ul>
        </div>
        
        {/* Column 4: Newsletter/Social (Placeholder for future feature) */}
        <div className="space-y-4 hidden lg:block">
             <h4 className="font-extrabold text-lg text-gray-900 dark:text-white border-l-4 border-blue-600 dark:border-amber-400 pl-3">
                Stay Updated
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
                Join our newsletter for exclusive offers.
            </p>
            {/* Newsletter input placeholder */}
            <div className="flex">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="p-2 text-sm rounded-l-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-200 w-full"
                />
                <button className="p-2 text-sm bg-blue-600 dark:bg-amber-400 text-white dark:text-black rounded-r-md font-semibold hover:bg-blue-700 dark:hover:bg-amber-500 transition-colors">
                    Go
                </button>
            </div>
        </div>

      </div>
      
      {/* 2. Copyright Bar */}
      <div className="border-t border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-neutral-950 transition-colors duration-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {currentYear}{" "}
            <span className="font-bold text-gray-800 dark:text-gray-200">
              National Electronics.
            </span>{" "}
            All Rights Reserved.
          </p>
          
          <div className="flex space-x-4 mt-2 md:mt-0 text-sm">
            <a href="/privacy" className="hover:text-blue-500 dark:hover:text-amber-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-500 dark:hover:text-amber-400">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;