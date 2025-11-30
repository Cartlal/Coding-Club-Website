import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Badge } from '@/components/ui';

export default function Home() {
  const [activeTab, setActiveTab] = useState('events');

  const highlights = {
    events: [
      {
        id: 1,
        title: 'Web Development Bootcamp',
        description: 'Master modern web development with React, Node.js, and more',
        icon: '🚀',
        date: 'Dec 5-15, 2025',
        attendees: '45+',
        status: 'upcoming',
      },
      {
        id: 2,
        title: 'Algorithm Masterclass',
        description: 'Deep dive into data structures and algorithms with industry experts',
        icon: '🧠',
        date: 'Dec 12-19, 2025',
        attendees: '32+',
        status: 'upcoming',
      },
      {
        id: 3,
        title: 'Hackathon 2025',
        description: '24-hour coding marathon with prizes and networking opportunities',
        icon: '⚡',
        date: 'Dec 20-21, 2025',
        attendees: '100+',
        status: 'upcoming',
      },
    ],
    achievements: [
      {
        id: 1,
        title: 'National Coding Championship Winner',
        description: 'Our team won 1st place at the National Coding Championship',
        icon: '🏆',
        year: '2025',
        category: 'Competition',
      },
      {
        id: 2,
        title: '500+ Active Members',
        description: 'Growing community of passionate developers and tech enthusiasts',
        icon: '👥',
        year: '2025',
        category: 'Milestone',
      },
      {
        id: 3,
        title: 'Open Source Contributions',
        description: '10+ successful open-source projects published and maintained',
        icon: '🌟',
        year: '2025',
        category: 'Community',
      },
    ],
  };

  const features = [
    {
      title: 'Skill Development',
      description: 'Learn from industry experts through workshops, bootcamps, and mentoring sessions',
      icon: '📚',
    },
    {
      title: 'Competitions',
      description: 'Participate in coding contests and hackathons to challenge yourself',
      icon: '🎯',
    },
    {
      title: 'Networking',
      description: 'Connect with like-minded developers and build lasting professional relationships',
      icon: '🤝',
    },
    {
      title: 'Projects',
      description: 'Collaborate on real-world projects and build your portfolio',
      icon: '💻',
    },
    {
      title: 'Mentorship',
      description: 'Get guidance from experienced members and senior developers',
      icon: '👨‍🏫',
    },
    {
      title: 'Community Support',
      description: 'Be part of a supportive community that celebrates your growth',
      icon: '❤️',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-secondary text-white py-24 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge removed per request */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Build, Learn & Grow
            <span className="block text-accent">Together</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slide-up-delayed">
            Join a vibrant community of developers and innovators at KLE. Master new skills, compete in challenges, and create amazing projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up-delayed-2">
            <Button
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-yellow-500 text-gray-900"
              as={Link}
              to="/events"
            >
              Explore Events
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {[
              { number: '500+', label: 'Active Members' },
              { number: '50+', label: 'Events Annually' },
              { number: '15+', label: 'Years Strong' },
            ].map((stat, index) => (
              <div key={index} className="animate-slide-up-delayed-3">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The Coding Club at KLE is a passionate community dedicated to fostering technical excellence and innovation. We bring together developers, designers, and tech enthusiasts to collaborate, learn, and create.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you're just starting your coding journey or you're an experienced developer, our club provides the resources, mentorship, and community support you need to grow and succeed.
              </p>

              <div className="space-y-3">
                {['Expert mentorship from industry professionals', 'Regular workshops and bootcamps', 'Opportunities to compete and showcase skills', 'Collaborative projects and hackathons'].map(
                  (point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent text-gray-900 font-bold">
                          ✓
                        </div>
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white min-h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-xl font-semibold mb-2">Join Our Community</p>
                  <p className="text-blue-100">Be part of something amazing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Join Coding Club?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the opportunities and benefits of being part of our thriving developer community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                variant="elevated"
                interactive
                className="h-full transform transition-transform duration-300 hover:scale-105"
              >
                <Card.Body className="text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Highlights & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our upcoming events and celebrate our achievements
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: 'events', label: 'Upcoming Events' },
              { id: 'achievements', label: 'Achievements' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights[activeTab].map((item) => (
              <Card key={item.id} variant="default" interactive>
                <Card.Body>
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    {activeTab === 'events' && (
                      <>
                        <p className="text-gray-600">
                          <span className="font-semibold">Date:</span> {item.date}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-semibold">Expected:</span> {item.attendees}
                        </p>
                        <Badge
                          variant="success"
                          size="sm"
                          className="inline-block mt-2"
                        >
                          {item.status}
                        </Badge>
                      </>
                    )}

                    {activeTab === 'achievements' && (
                      <>
                        <p className="text-gray-600">
                          <span className="font-semibold">Year:</span> {item.year}
                        </p>
                        <Badge
                          variant="primary"
                          size="sm"
                          outlined
                          className="inline-block mt-2"
                        >
                          {item.category}
                        </Badge>
                      </>
                    )}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" size="lg" as={Link} to="/events">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards becoming an amazing developer. Sign up now and start your journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="ghost"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
              as={Link}
              to="/signup"
            >
              Sign Up Now
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-yellow-500 text-gray-900"
              as={Link}
              to="/events"
            >
              Browse Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
