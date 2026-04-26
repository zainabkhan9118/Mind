import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Also close mobile menu if open
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="bg-black/60 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
            <span className="text-2xl font-bold text-white">Mind Player</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-white font-bold' 
                  : 'text-gray-400 font-medium hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-white font-bold' 
                  : 'text-gray-400 font-medium hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              About Us
            </Link>
            <Link 
              to="/features" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/features') 
                  ? 'text-white font-bold' 
                  : 'text-gray-400 font-medium hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              Features
            </Link>
            <Link 
              to="/experiences" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/experiences') 
                  ? 'text-white font-bold' 
                  : 'text-gray-400 font-medium hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              Experiences
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/pricing') 
                  ? 'text-white font-bold' 
                  : 'text-gray-400 font-medium hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-white font-bold' 
                  : 'text-gray-400 font-medium hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              Contact Us
            </Link>
          </nav>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/contact" 
              className="bg-mind-violet text-white px-4 py-2 rounded-4xl text-sm font-medium hover:bg-mind-violet-light transition-colors duration-200"
              onClick={handleNavClick}
            >
              Try For Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-3">
              <Link 
                to="/" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/') 
                    ? 'text-white font-bold bg-white/5' 
                    : 'text-gray-400 font-medium hover:text-white hover:bg-white/5'
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick();
                }}

              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/about') 
                    ? 'text-white font-bold bg-white/5' 
                    : 'text-gray-400 font-medium hover:text-white hover:bg-white/5'
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick();
                }}
              >
                About Us
              </Link>
              <Link 
                to="/features" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/features') 
                    ? 'text-white font-bold bg-white/5' 
                    : 'text-gray-400 font-medium hover:text-white hover:bg-white/5'
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick();
                }}
              >
                Features
              </Link>
              <Link 
                to="/experiences" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/experiences') 
                    ? 'text-white font-bold bg-white/5' 
                    : 'text-gray-400 font-medium hover:text-white hover:bg-white/5'
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick();
                }}
              >
                Experiences
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/pricing') 
                    ? 'text-white font-bold bg-white/5' 
                    : 'text-gray-400 font-medium hover:text-white hover:bg-white/5'
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick();
                }}
              >
                Pricing
              </Link>

                <Link 
                to="/contact" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/contact') 
                    ? 'text-white font-bold bg-white/5' 
                    : 'text-gray-400 font-medium hover:text-white hover:bg-white/5'
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick();
                }}
              >
                Contact Us
              </Link>
                
              <Link 
                to="/contact" 
                className="block mx-3 mt-4 bg-mind-violet text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-mind-violet-light transition-colors"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick();
                }}
              >
                Try For Free
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;