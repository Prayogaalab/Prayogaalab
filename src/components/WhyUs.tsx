
import { CheckCircle2, Sparkles, Zap, Globe } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: <CheckCircle2 size={24} className="text-lab-500" />,
      title: 'State-of-the-Art Facilities',
      description: 'Our labs are equipped with the latest technology and tools to provide a modern learning environment.'
    },
    {
      icon: <Sparkles size={24} className="text-lab-500" />,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience and a passion for teaching.'
    },
    {
      icon: <Zap size={24} className="text-lab-500" />,
      title: 'Hands-on Learning',
      description: 'Our practical approach ensures you gain real-world skills that employers value.'
    },
    {
      icon: <Globe size={24} className="text-lab-500" />,
      title: 'Industry Connections',
      description: 'We maintain strong relationships with leading companies for internships and job opportunities.'
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-lab-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We're committed to providing exceptional educational experiences that prepare students for successful careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-lab-50">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-lab-600 to-lab-500 rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 flex items-center">
              <div className="space-y-4 text-white">
                <h3 className="text-2xl font-bold">Ready to start your journey?</h3>
                <p className="opacity-90">Join us today and discover why thousands of students choose our labs for their education.</p>
                <button className="px-6 py-3 bg-white text-lab-600 rounded-lg hover:bg-gray-100 transition-colors mt-2">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1581092787765-e3feb951d987?q=80&w=2070" 
                alt="Students in a modern lab" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
