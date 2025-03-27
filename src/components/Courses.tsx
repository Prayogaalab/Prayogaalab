
import { useState } from 'react';
import { Clock, Calendar, Users, ChevronRight } from 'lucide-react';

const Courses = () => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Introduction to Artificial Intelligence',
      description: 'Learn the fundamentals of AI, including machine learning, neural networks, and practical applications.',
      image: 'https://images.unsplash.com/photo-1677442135073-c238bdcf3bf7?q=80&w=2070',
      duration: '8 weeks',
      startDate: 'September 15, 2023',
      students: '24 students',
      level: 'Beginner',
      category: 'Computer Science',
    },
    {
      id: 2,
      title: 'Advanced Robotics Laboratory',
      description: 'Hands-on experience with robot programming, sensors, actuators, and real-world applications.',
      image: 'https://images.unsplash.com/photo-1581093058853-2e1a8191e754?q=80&w=2070',
      duration: '12 weeks',
      startDate: 'October 5, 2023',
      students: '18 students',
      level: 'Intermediate',
      category: 'Robotics',
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      description: 'Master data analysis, visualization, and statistical methods using Python and industry tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      duration: '10 weeks',
      startDate: 'November 1, 2023',
      students: '30 students',
      level: 'Beginner',
      category: 'Data Science',
    },
    {
      id: 4,
      title: 'Cybersecurity Essentials',
      description: 'Learn to identify vulnerabilities, implement security measures, and protect digital assets.',
      image: 'https://images.unsplash.com/photo-1610572589077-e80d04096a51?q=80&w=2070',
      duration: '8 weeks',
      startDate: 'September 20, 2023',
      students: '22 students',
      level: 'Intermediate',
      category: 'Security',
    },
  ];

  const categories = ['All', 'Computer Science', 'Robotics', 'Data Science', 'Security'];

  return (
    <section id="courses" className="py-20 bg-lab-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">
            Discover our wide range of courses designed to help you master the skills needed for success in today's digital world.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                index === 0 
                  ? 'bg-lab-500 text-white hover:bg-lab-600' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${hoveredCourse === course.id ? 'scale-105' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-lab-500 text-white mb-3">
                      {course.level}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {course.startDate}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {course.students}
                  </div>
                </div>
                <button className="flex items-center text-lab-600 hover:text-lab-700 transition-colors group">
                  Learn More 
                  <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-lab-500 text-white rounded-lg hover:bg-lab-600 transition-colors shadow-sm">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
