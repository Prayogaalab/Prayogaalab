
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Team', href: '#team' },
    { label: 'Courses', href: '#courses' },
    { label: 'Contact', href: '#contact' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-lab-800 flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-lab-600 flex items-center justify-center">
              <span className="text-white font-mono">L</span>
            </div>
            <span className="hidden sm:inline">LabX</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="px-3 py-2 text-sm rounded-md text-gray-700 hover:text-lab-700 hover:bg-lab-50 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* WhatsApp Contact */}
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-lab-500 text-white hover:bg-lab-600 transition-colors"
        >
          <Phone size={16} />
          <span className="hidden lg:inline">Contact Us</span>
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-3 text-left text-gray-700 hover:text-lab-700 hover:bg-lab-50 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 mt-2 rounded-md bg-lab-500 text-white"
            >
              <Phone size={16} />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
