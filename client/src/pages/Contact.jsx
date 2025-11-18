import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; 
import StoreLocation from '../components/StoreLocation';

// Helper component for contact links to consolidate styling
const ContactLink = ({ Icon, title, content, href, type = 'text' }) => (
    <div className="flex items-start space-x-4">
        <Icon className="h-6 w-6 text-blue-500 dark:text-amber-400 flex-shrink-0 mt-1" />
        <div>
            <p className="font-semibold text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">{title}</p>
            {type === 'link' ? (
                <a 
                    href={href} 
                    className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-amber-300 transition-colors"
                >
                    {content}
                </a>
            ) : (
                <p className="text-lg font-bold text-gray-900 dark:text-white">{content}</p>
            )}
        </div>
    </div>
);


function Contact() {
  return (
    // Updated background to neutral-950 for full black coverage and added pt-20 for Navbar clearance
    <div className="bg-neutral-950 text-gray-800 dark:text-gray-100 transition-colors duration-500 min-h-screen pt-20 pb-16 px-4 sm:px-8">
      
      {/* Centered Content Area */}
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 
                        bg-clip-text text-transparent bg-gradient-to-r 
                        from-blue-500 to-teal-400 dark:from-amber-400 dark:to-orange-500">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're here to power your home and business. Contact us for product inquiries, orders, or service requests.
          </p>
        </header>

        {/* --- 1. Contact Details Grid --- */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* A. Information Block */}
          <div className="space-y-8 p-8 lg:p-10 rounded-2xl shadow-2xl bg-neutral-900 border border-neutral-800">
            <h2 className="text-3xl font-extrabold mb-4 text-white border-l-4 border-blue-600 dark:border-amber-400 pl-3">
                Store Information
            </h2>
            
            {/* Owner Name */}
            <div className="flex items-start space-x-4">
                <span className="text-3xl mr-2">👤</span>
                <div>
                    <p className="font-semibold text-gray-400 text-sm uppercase tracking-wider">Owner Name</p>
                    <p className="text-xl font-bold text-white">Mr. Vikash Kumar Saini</p>
                </div>
            </div>

            {/* Address */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
                <ContactLink Icon={MapPin} title="Store Location" type="text" />
                <address className="text-lg font-medium not-italic pl-10 text-gray-300">
                    National Electronics, <br/>
                    Near Axis Bank (100m from Dehradun-Roorkee flyover), <br/>
                    Makkhanpur, Bhagwanpur - 247661, Uttarakhand, India
                </address>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
                <p className="font-semibold text-white flex items-center text-lg">
                    <Phone className="h-6 w-6 mr-3 text-blue-500 dark:text-amber-400" /> 
                    Contact Numbers
                </p>
                <ul className="space-y-2 pl-10 text-gray-400">
                    <li className="text-sm"><a href="tel:+919719209991" className="hover:text-blue-400 transition">+91-9719209991 (Primary)</a></li>
                    <li className="text-sm"><a href="tel:+919410932425" className="hover:text-blue-400 transition">+91-9410932425</a></li>
                </ul>
            </div>

            {/* Emails */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
                <p className="font-semibold text-white flex items-center text-lg">
                    <Mail className="h-6 w-6 mr-3 text-blue-500 dark:text-amber-400" /> 
                    Email Addresses
                </p>
                <ul className="space-y-2 pl-10 text-gray-400">
                    <li className="text-sm"><a href="mailto:vikassaini.0123@rediffmail.com" className="hover:text-blue-400 transition">vikassaini.0123@rediffmail.com</a></li>
                    <li className="text-sm"><a href="mailto:nationalelectricals.2009@rediffmail.com" className="hover:text-blue-400 transition">nationalelectricals.2009@rediffmail.com</a></li>
      </ul>
            </div>
          </div>
          
          {/* B. Location Map (Assuming StoreLocation is a fully themed map component) */}
          <StoreLocation/>
          
        </div> {/* closes the grid */}

        {/* --- 2. Contact Form --- */}
        <section className="pt-8">
  <h2 className="text-3xl font-extrabold text-center mb-10 text-white">Send Us a Message</h2>
  {/* IMPORTANT CHANGE: Added action and method for mailto: */}
  <form 
    action="mailto:nationalelectricals.2009@rediffmail.com" 
    method="POST" 
    encType="text/plain" // Important for mailto: to correctly encode fields
    className="max-w-xl mx-auto p-8 bg-neutral-900 rounded-2xl shadow-2xl space-y-6 border border-neutral-800"
  >
    
    {/* Name Field - Changed name to 'Name' */}
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
      <input type="text" id="name" name="Name" placeholder="Your Name" 
              className="mt-1 block w-full border-b-2 border-neutral-700 bg-neutral-900 rounded-none p-3 
                        text-white placeholder-gray-500 focus:ring-0 focus:border-blue-500 transition-colors" 
              required />
    </div>

    {/* Email Field - Changed name to 'Sender_Email' for clarity in the email body */}
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
      <input type="email" id="email" name="Sender_Email" placeholder="you@example.com" 
              className="mt-1 block w-full border-b-2 border-neutral-700 bg-neutral-900 rounded-none p-3 
                        text-white placeholder-gray-500 focus:ring-0 focus:border-blue-500 transition-colors" 
              required />
    </div>

    {/* Message Field - Changed name to 'Body' to capture the main content */}
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
      <textarea id="message" name="Body" rows="4" placeholder="How can we help you?" 
                className="mt-1 block w-full border border-neutral-700 bg-neutral-900 rounded-lg p-3 
                           text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                required></textarea>
    </div>

    {/* Submit Button */}
    <button type="submit" 
            className="w-full py-3 mt-6 text-xl font-bold rounded-xl shadow-lg 
                       bg-blue-600 hover:bg-blue-700 text-white 
                       dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-gray-900 
                       transition-all duration-300 ease-in-out hover:shadow-2xl active:scale-[0.99]">
      Submit Inquiry
    </button>
  </form>
</section>
        
      </div>
    </div>
  );
}

export default Contact;