import React from 'react';
import { Award, Zap, Handshake, MapPin } from 'lucide-react'; // Icons for visual appeal

function About() {
    return (
        // Main container matching the dark theme and ensuring Navbar clearance
        <div className="bg-neutral-950 text-gray-100 transition-colors duration-500 min-h-screen pt-20 pb-16 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header Section */}
                <header className="text-center pt-8 pb-4">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 
                                   bg-clip-text text-transparent bg-gradient-to-r 
                                   from-blue-500 to-teal-400 dark:from-amber-400 dark:to-orange-500">
                        Our Legacy of Excellence
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Powering homes and businesses in Uttarakhand since 2009.
                    </p>
                </header>

                {/* 1. History and Origin */}
                <section className="bg-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-800 space-y-8">
                    <div className="flex items-center space-x-4 mb-6">
                        <Award className="w-8 h-8 text-blue-500 dark:text-amber-400" />
                        <h2 className="text-3xl font-bold text-white">Our Journey Starts Here</h2>
                    </div>

                    <div className="text-lg text-gray-300 space-y-6">
                        <p className="border-l-4 border-blue-600 dark:border-amber-400 pl-4">
                            Established in <strong>2009</strong> as National Electricals and Electronics, our firm was founded on the simple premise of providing <strong>high-quality, reliable electrical goods</strong>. What began as a modest local shop serving the immediate community has blossomed into a widely recognized and trusted brand across Bhagwanpur, Uttarakhand.
                        </p>
                        <p>
                            Under the dedicated leadership of owner <strong>Mr. Vikash Kumar Saini</strong>, we have maintained a relentless focus on customer satisfaction and quality assurance. Our growth is a direct reflection of the long-standing trust placed in us by local families and growing businesses who rely on our expertise daily.
                        </p>
                    </div>
                </section>

                {/* 2. Products and Brands */}
                <section className="grid md:grid-cols-2 gap-8">
                    
                    {/* Brands Section */}
                    <div className="p-8 rounded-2xl bg-neutral-900 shadow-xl border border-neutral-800 space-y-6">
                        <div className="flex items-center space-x-4">
                            <Handshake className="w-6 h-6 text-blue-500 dark:text-amber-400" />
                            <h3 className="text-2xl font-bold text-white">Trusted Partnerships</h3>
                        </div>
                        <p className="text-gray-400">
                            We believe that quality starts with the manufacturer. We proudly deal with big, established, and certified national brands to ensure maximum reliability and warranty support for our customers.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 text-lg font-semibold text-gray-200">
                            <li>— Havells</li>
                            <li>— Crompton</li>
                            <li>— Samsung</li>
                            <li>— LG</li>
                            <li>— Syska</li>
                            <li>— And many more trusted suppliers...</li>
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div className="p-8 rounded-2xl bg-neutral-900 shadow-xl border border-neutral-800 space-y-6">
                        <div className="flex items-center space-x-4">
                            <Zap className="w-6 h-6 text-blue-500 dark:text-amber-400" />
                            <h3 className="text-2xl font-bold text-white">Our Exclusive Range</h3>
                        </div>
                        <p className="text-gray-400">
                            We are your one-stop solution for all electrical and electronic needs, covering everything from basic fittings to major home appliances.
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
                            <li>Premium Lighting Solutions (LEDs, Bulbs, Panels)</li>
                            <li>Home Appliances (TVs, Washing Machines, Refrigerators)</li>
                            <li>Fans, Coolers, and Climate Control Systems</li>
                            <li>Switches, Wires, and Wiring Accessories</li>
                            <li>Wholesale and Retail Solutions Available</li>
                        </ul>
                    </div>
                </section>

                {/* 3. Commitment and Location */}
                <section className="text-center py-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Commitment</h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                        Our aim is simple: <strong>to provide high quality items to everybody.</strong> Be it a large wholesale order for a construction project or a single retail purchase for your home, we are dedicated to serving you with honesty, value, and superior products.
                    </p>

                    <div className="flex items-center justify-center space-x-4 text-lg font-medium text-gray-300">
                        <MapPin className="w-6 h-6 text-blue-500 dark:text-amber-400" />
                        <span>Proudly serving the community of Bhagwanpur, Roorkee, Uttarakhand.</span>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default About;