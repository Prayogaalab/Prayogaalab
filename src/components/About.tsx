
import { BookOpen, School, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: <BookOpen size={28} className="text-lab-600" />,
      value: '30+',
      label: 'Courses'
    },
    { 
      icon: <School size={28} className="text-lab-600" />,
      value: '2000+',
      label: 'Students'
    },
    { 
      icon: <Award size={28} className="text-lab-600" />,
      value: '15+',
      label: 'Years'
    },
    { 
      icon: <Users size={28} className="text-lab-600" />,
      value: '35+',
      label: 'Instructors'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Our Lab</h2>
          <p className="section-subtitle">
            We're dedicated to providing cutting-edge educational experiences that prepare students for success in a rapidly evolving technological landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900">Shaping the Future Through Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2008, our lab has been at the forefront of educational innovation, providing students with hands-on learning experiences that bridge theory and practice. Our state-of-the-art facilities are designed to foster creativity, critical thinking, and technical expertise.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that education goes beyond traditional classroom learning. That's why we've created an environment where students can experiment, create, and innovate under the guidance of industry experts and academic leaders.
            </p>
            <div className="pt-4">
              <button className="px-6 py-3 bg-lab-500 text-white rounded-lg hover:bg-lab-600 transition-colors shadow-sm">
                Learn More About Us
              </button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581092919535-7146ee1bd4ce?q=80&w=2070" 
                alt="Modern laboratory with students working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-lab-100 rounded-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-lab-200 rounded-xl -z-10"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass flex flex-col items-center justify-center p-6 rounded-xl text-center"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
