
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-lg bg-lab-600 flex items-center justify-center mr-3">
                <span className="text-white font-mono">L</span>
              </div>
              <span className="text-2xl font-bold">LabX</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing innovative educational experiences to help students thrive in a technology-driven world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-lab-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-lab-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-lab-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-lab-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Certificate Programs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Summer Bootcamps</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Weekend Workshops</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Online Courses</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Training</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest courses and events.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-lab-500"
                />
                <button className="bg-lab-500 hover:bg-lab-600 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LabX. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-800 hover:bg-lab-500 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
