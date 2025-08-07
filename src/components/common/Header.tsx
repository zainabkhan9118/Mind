import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">MindPlayer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-black font-bold' 
                  : 'text-gray-700 font-medium hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-black font-bold' 
                  : 'text-gray-700 font-medium hover:text-gray-900'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/features" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/features') 
                  ? 'text-black font-bold' 
                  : 'text-gray-700 font-medium hover:text-gray-900'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/experiences" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/experiences') 
                  ? 'text-black font-bold' 
                  : 'text-gray-700 font-medium hover:text-gray-900'
              }`}
            >
              Experiences
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm transition-colors duration-200 ${
                isActive('/pricing') 
                  ? 'text-black font-bold' 
                  : 'text-gray-700 font-medium hover:text-gray-900'
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/contact" 
              className="bg-[#DCD3F7] text-black px-4 py-2 rounded-4xl text-sm font-medium hover:bg-[#ccc0f2] transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-3">
              <Link 
                to="/" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/') 
                    ? 'text-black font-bold bg-gray-50' 
                    : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/about') 
                    ? 'text-black font-bold bg-gray-50' 
                    : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/features" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/features') 
                    ? 'text-black font-bold bg-gray-50' 
                    : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/experiences" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/experiences') 
                    ? 'text-black font-bold bg-gray-50' 
                    : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive('/pricing') 
                    ? 'text-black font-bold bg-gray-50' 
                    : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="block mx-3 mt-4 bg-[#DCD3F7] text-black px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-[#ccc0f2] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;