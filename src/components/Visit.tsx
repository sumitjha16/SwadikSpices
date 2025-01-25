import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Visit = () => {
  return (
    <div id="visit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Visit Our Store</h2>
          <p className="text-xl text-gray-600">Experience the goodness of Swadik Spices at our offline store</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-amber-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-6">Store Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-600">Swadik Spices · 86, <br/>Income Tax Colony, I R V, I COLONY,<br/> Jagatpura, Jaipur, <br/>Rajasthan 302017
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">+91 92567 15459 </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">swadikspices@gmail.com</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.open('https://www.google.com/maps/place/Swadik+Spices/@26.828139,75.8456041,996m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396dc909112baab9:0xd4e58620b7d309bf!8m2!3d26.828139!4d75.848179!16s%2Fg%2F11wx0m588l?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D', '_blank')}
              className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center w-full"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </button>
          </div>

          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4339.202570789015!2d75.84560407543655!3d26.828138976697677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc909112baab9%3A0xd4e58620b7d309bf!2sSwadik%20Spices!5e1!3m2!1sen!2sin!4v1736427956919!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="Store Location"
/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;