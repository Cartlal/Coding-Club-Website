import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Members', path: '/members' },
    { name: 'Leaderboard', path: '/leaderboard' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">CC</div>
            <span className="hidden sm:inline text-lg font-semibold text-white transition-colors duration-300">
              Coding Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white/90 hover:text-white font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme removed - no toggle */}

            <Link
              to="/login"
              className="px-4 py-2 bg-accent text-white rounded-lg hover:opacity-95 transition-colors duration-150"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme removed - no toggle */}

            <button
              onClick={toggleMenu}
              className="flex flex-col space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slideDown bg-gradient-to-r from-primary to-secondary text-white rounded-b-lg p-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-white/90 hover:bg-white/5 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-4 py-2 bg-accent text-white rounded-lg transition-colors duration-150 text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

