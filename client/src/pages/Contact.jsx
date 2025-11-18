import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; 
import StoreLocation from '../components/StoreLocation';

function Contact() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500 min-h-screen p-4 sm:p-8">
      
      {/* Centered Content Area */}
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <header className="text-center pt-8 pb-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 
                         bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 dark:from-amber-400 dark:to-orange-500">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're here to power your home and business. Contact us for product inquiries, orders, or service requests.
          </p>
        </header>

        {/* --- 1. Contact Details Grid --- */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* A. Information Block */}
          <div className="space-y-6 p-6 sm:p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 border-l-4 border-blue-500 dark:border-amber-500">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Store Information</h2>
            
            {/* Owner Name */}
            <div className="flex items-start">
              <span className="text-xl mr-4">👤</span>
              <div>
                <p className="font-semibold text-gray-600 dark:text-gray-400">Owner Name</p>
                <p className="text-xl font-bold text-gray-800 dark:text-white">Mr. Vikash Kumar Saini</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-500 dark:text-amber-500 flex-shrink-0 mt-1 mr-4" />
              <div>
                <p className="font-semibold text-gray-600 dark:text-gray-400">Store Location</p>
                <address className="text-lg font-medium not-italic">
                  National Electronics, <br/>
                  Near Axis Bank (100m from Dehradun-Roorkee flyover), <br/>
                  Makkhanpur, Bhagwanpur - 247661, Uttarakhand, India
                </address>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-2">
              <p className="font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-500 dark:text-amber-500" /> 
                Contact Numbers:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4 text-gray-600 dark:text-gray-400">
                <li><a href="tel:+919719209991" className="hover:text-blue-500 dark:hover:text-amber-300 transition">+91-9719209991 (Primary)</a></li>
                <li><a href="tel:+919876543210" className="hover:text-blue-500 dark:hover:text-amber-300 transition">+91-9876543210</a></li>
                <li><a href="tel:+918000123456" className="hover:text-blue-500 dark:hover:text-amber-300 transition">+91-8000123456</a></li>
              </ul>
            </div>

            {/* Emails */}
            <div className="space-y-2">
              <p className="font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-500 dark:text-amber-500" /> 
                Email Addresses:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4 text-gray-600 dark:text-gray-400">
                <li><a href="mailto:vikassaini.0123@rediffmail.com" className="hover:text-blue-500 dark:hover:text-amber-300 transition">vikassaini.0123@rediffmail.com</a></li>
                <li><a href="mailto:sales@nationalelectronics.com" className="hover:text-blue-500 dark:hover:text-amber-300 transition">sales@nationalelectronics.com</a></li>
                <li><a href="mailto:orders@nationalelectronics.com" className="hover:text-blue-500 dark:hover:text-amber-300 transition">orders@nationalelectronics.com</a></li>
              </ul>
            </div>
          </div>
          
          {/* B. Location Map */}
          <StoreLocation />
          
        </div> {/* <-- closes the grid */}

        {/* --- 2. Contact Form --- */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
          <form className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl space-y-4">
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" 
                     className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-3 
                                bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500" 
                     required />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" 
                     className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-3 
                                bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500" 
                     required />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="How can we help you?" 
                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-3 
                                   bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500" 
                        required></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" 
                    className="w-full py-3 mt-4 text-lg font-semibold rounded-lg shadow-md 
                               bg-blue-600 hover:bg-blue-700 text-white 
                               dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-gray-900 
                               transition-all duration-300 ease-in-out">
              Submit Inquiry
            </button>
          </form>
        </section>
        
      </div>
    </div>
  );
}

export default Contact;
