
import { useEffect } from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Team from '@/components/Team';
import Courses from '@/components/Courses';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  // This effect ensures smooth scrolling for navigation links
  useEffect(() => {
    const handleScrollToAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleScrollToAnchor);
    return () => document.removeEventListener('click', handleScrollToAnchor);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <About />
      <WhyUs />
      <Team />
      <Courses />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
