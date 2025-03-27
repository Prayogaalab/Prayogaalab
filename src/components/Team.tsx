
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lab Director',
      bio: 'Ph.D. in Computer Science with 15+ years of experience in AI research and education.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2376&auto=format&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@labx.com',
      },
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Senior Instructor',
      bio: 'Specializes in robotics and automation with industry experience at leading tech companies.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149&auto=format&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@labx.com',
      },
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Research Lead',
      bio: 'Expert in data science and machine learning with multiple published papers in top journals.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@labx.com',
      },
    },
    {
      name: 'Dr. James Wilson',
      role: 'Lab Coordinator',
      bio: 'Manages lab operations and develops innovative teaching methodologies for practical learning.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2370&auto=format&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james@labx.com',
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our exceptional faculty brings together academic expertise and industry experience to provide an unparalleled learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white">
                      <Twitter size={18} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-lab-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-6 py-3 border border-lab-600 text-lab-600 rounded-lg hover:bg-lab-50 transition-colors">
            View All Team Members
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
