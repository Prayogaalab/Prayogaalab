
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or need more information? Get in touch with our team, and we'll be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-lab-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lab-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lab-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lab-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Your message here..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lab-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-lab-500 text-white rounded-lg hover:bg-lab-600 transition-colors shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col">
            <div className="glass p-8 rounded-xl mb-8 h-1/2">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-lab-100 mr-4">
                    <Mail size={20} className="text-lab-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                    <p className="text-gray-900">info@labx.edu</p>
                    <p className="text-gray-900">admissions@labx.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-lab-100 mr-4">
                    <Phone size={20} className="text-lab-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Phone</h4>
                    <p className="text-gray-900">+1 (555) 123-4567</p>
                    <p className="text-gray-900">+1 (555) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-lab-100 mr-4">
                    <MapPin size={20} className="text-lab-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                    <p className="text-gray-900">123 Innovation Street</p>
                    <p className="text-gray-900">Tech City, TC 10101</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-1/2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215583705894!2d-73.98696108459447!3d40.75805877932715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625761275600!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Lab location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
