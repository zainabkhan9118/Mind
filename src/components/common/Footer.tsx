
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';
import AutoRotatingCarousel from './AutoRotatingCarousel';
import { Link } from 'react-router-dom';
import { SiTiktok } from 'react-icons/si';




const Footer = () => {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="text-white">
      {/* Path to Deeper Calm Section */}
      <div className="bg-mind-navy/80 text-white py-16 px-4">
       <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            A simple path to deeper calm, clarity,<br />
            and personal growth!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold">1. Choose Your Path</h3>
              </div>
              <p className="text-sm text-gray-400">
                Pick from guided meditation, immersive 360° VR worlds, or AI-powered mindfulness — all tailored to your specific mental wellness needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-bold">2. Dive Into the Experience</h3>
              </div>
              <p className="text-sm text-gray-400">
                Put on your headset or press play to enter a personalized, multi-sensory environment designed to support your mental wellness goals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6L12 2L8 6M12 2V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 12L18 16L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold">3. Grow with Every Session</h3>
              </div>
              <p className="text-sm text-gray-400">
                Track your progress, receive daily insights, and build healthy mental habits with the help of your AI Mind Coach.
              </p>
            </div>
          </div>
        </div>
      </div>

            {/* CTA Section - Auto Rotating Carousel */}
      <div className=" w-full">
        <div className="w-full">
          <AutoRotatingCarousel />
        </div>
      </div>

      {/* Main Footer Navigation */}
      <div className="bg-mind-navy/60 backdrop-blur-sm py-16 px-4 text-white">
        <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] 4xl:max-w-[80%] mx-auto px-4 xl:px-8 2xl:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10">
          {/* Quick Links */}
          <div className="text-center xl:text-left min-w-0">
            <h3 className="font-bold mb-4 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors"
              onClick={handleNavClick}
              >
                Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors"
              onClick={handleNavClick}
              >
                About Us</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors"
              onClick={handleNavClick}
              >
                Features</Link></li>
              <li><Link to="/experiences" className="text-gray-400 hover:text-white transition-colors"
              onClick={handleNavClick}
              >
                Experiences</Link></li>
              
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors"
              onClick={handleNavClick}
              >
                Pricing</Link></li>

              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors"
              onClick={handleNavClick}
              >
                Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Features */}
          <div className="text-center xl:text-left min-w-0">
            <h3 className="font-bold mb-4 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl uppercase tracking-wider text-white">Our Features</h3>
            <ul className="space-y-2 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">
              <li className="text-gray-400 hover:text-white transition-colors">Mind Sessions for Inner Calm</li>
              <li className="text-gray-400 hover:text-white transition-colors">Healing Music & Frequencies</li>
              <li className="text-gray-400 hover:text-white transition-colors">AI-Powered Mind Coach</li>
              <li className="text-gray-400 hover:text-white transition-colors">Supportive Wellness Community</li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="text-center xl:text-left min-w-0">
            <h3 className="font-bold mb-4 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl uppercase tracking-wider text-white">Experiences</h3>
            <ul className="space-y-2 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">
              <li className="text-gray-400 hover:text-white transition-colors">Deep VR Guided Meditation</li>
              <li className="text-gray-400 hover:text-white transition-colors">Calm Your Heightened Anxiety</li>
              <li className="text-gray-400 hover:text-white transition-colors">Rest and Relax Together</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="text-center xl:text-left min-w-0">
            <h3 className="font-bold mb-4 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl uppercase tracking-wider text-white">Why Choose Us</h3>
            <ul className="space-y-2 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">
              <li className="text-gray-400 hover:text-white transition-colors">Calm Your Inner World</li>
              <li className="text-gray-400 hover:text-white transition-colors">Strengthen from the Inside Out</li>
              <li className="text-gray-400 hover:text-white transition-colors">Ease Into Restful Sleep</li>
              <li className="text-gray-400 hover:text-white transition-colors">Find Your Mental Reset</li>
              <li className="text-gray-400 hover:text-white transition-colors">Sharpen Your Mental Flow</li>
            </ul>
          </div>

          {/* Help */}
          <div className="text-center xl:text-left min-w-0">
            <h3 className="font-bold mb-4 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl uppercase tracking-wider text-white">Help</h3>
            <ul className="space-y-2 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">
              <li><Link to="/faqs" className="text-gray-400 hover:text-white transition-colors" onClick={handleNavClick}>FAQs</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors" onClick={handleNavClick}>Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors" onClick={handleNavClick}>Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors" onClick={handleNavClick}>Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="text-center xl:text-left min-w-0">
            <h3 className="font-bold mb-4 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl uppercase tracking-wider text-white">Connect With Us</h3>
            <ul className="space-y-2 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">
              <li><a href="https://www.facebook.com/mindplayerapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Facebook Page</a></li>
              <li><a href="https://www.instagram.com/mindplayerapp/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram Gallery</a></li>
              <li><a href="https://x.com/mindplayerapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">X Updates</a></li>
              <li><a href="http://www.linkedin.com/company/mindplayerapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn Profile</a></li>
              <li><a href="https://www.tiktok.com/@mindplayerapp?_t=ZG-8z4AFuVLHSC&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">TikTok Videos</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* MindPlayer Logo Before Divider */}
      <div className="bg-mind-navy/40 pt-2 pb-6 px-4 text-white">
        <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] 4xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold">Mind Player</h2>
        </div>
      </div>
      
      {/* Footer Bottom - Simple Version */}
      <div className="bg-mind-navy/40 py-6 px-4 text-white border-t border-white/10">
        <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] 4xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Mind Player. All rights reserved.
            </p>
            
            <div className="flex space-x-4 2xl:space-x-6 3xl:space-x-8 4xl:space-x-10">
              <a href="https://www.facebook.com/mindplayerapp" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={16} className="2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8" />
              </a>
              <a href="https://www.instagram.com/mindplayerapp/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={16} className="2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8" />
              </a>
              <a href="https://x.com/mindplayerapp" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="X (Twitter)">
                <X size={16} className="2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8" />
              </a>
              <a href="http://www.linkedin.com/company/mindplayerapp" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} className="2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8" />
              </a>
              <a href="https://www.tiktok.com/@mindplayerapp?_t=ZG-8z4AFuVLHSC&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="TikTok">
                <SiTiktok size={16} className="2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;