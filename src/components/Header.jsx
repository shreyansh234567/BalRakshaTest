import { useState, useEffect } from 'react';

import { Menu, X, Phone, Mail, Search, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* TOP BAR (Hidden on mobile) */}
      <div className="hidden lg:flex bg-[#e31837] text-white text-[13px] py-1.5 px-4 sm:px-6 lg:px-8 justify-end items-center gap-6 font-medium">
        <a href="tel:01140538140" className="flex items-center gap-1.5 hover:text-gray-200">
          <Phone size={14} />
          011-40538140
        </a>
        <a href="mailto:info@balrakshabharat.org" className="flex items-center gap-1.5 hover:text-gray-200">
          <Mail size={14} />
          info@balrakshabharat.org
        </a>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className={`bg-white w-full border-b border-gray-100 ${isScrolled ? 'fixed top-0 shadow-md py-2' : 'relative py-4'
          }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center">
              {/* Logo */}
              <a href="#home" className="flex-shrink-0 flex items-center">
                <img
                  src="https://balrakshabharat.org/wp-content/themes/ngo/images/logo.png"
                  alt="Bal Raksha Bharat Logo"
                  className="h-14 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback text logo agar image load na ho */}
                <div className="hidden flex-col">
                  <span className="font-bold text-3xl leading-none text-[#e31837] tracking-tighter">BAL RAKSHA BHARAT</span>
                  <span className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Save The Children India</span>
                </div>
              </a>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <div className="relative group cursor-pointer">
                <a href="#about" className="text-gray-800 hover:text-[#e31837] font-semibold text-[15px] flex items-center gap-1 ">
                  About Us <ChevronDown size={14} className="text-gray-400 group-hover:text-[#e31837]" />
                </a>
              </div>
              <div className="relative group cursor-pointer">
                <a href="#programs" className="text-gray-800 hover:text-[#e31837] font-semibold text-[15px] flex items-center gap-1 ">
                  What we do <ChevronDown size={14} className="text-gray-400 group-hover:text-[#e31837]" />
                </a>
              </div>
              <div className="relative group cursor-pointer">
                <a href="#partnership" className="text-gray-800 hover:text-[#e31837] font-semibold text-[15px] flex items-center gap-1 ">
                  Partnership <ChevronDown size={14} className="text-gray-400 group-hover:text-[#e31837]" />
                </a>
              </div>
              <div className="relative group cursor-pointer">
                <a href="#contact" className="text-gray-800 hover:text-[#e31837] font-semibold text-[15px] flex items-center gap-1 ">
                  Get Involved <ChevronDown size={14} className="text-gray-400 group-hover:text-[#e31837]" />
                </a>
              </div>
              <div className="relative group cursor-pointer">
                <a href="#resources" className="text-gray-800 hover:text-[#e31837] font-semibold text-[15px] flex items-center gap-1">
                  Resources <ChevronDown size={14} className="text-gray-400 group-hover:text-[#e31837]" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
                <button className="text-gray-600 hover:text-[#e31837]">
                  <Search size={20} />
                </button>
                <a href="#donate" className="bg-[#e31837] hover:bg-[#cc1531] text-white px-7 py-3 rounded-md font-bold uppercase text-sm tracking-wider transition-colors shadow-md">
                  Donate Now
                </a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <a href="#donate" className="bg-[#e31837] text-white px-4 py-2 rounded font-bold uppercase text-xs">
                Donate
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 hover:text-[#e31837] focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[80vh]">
            <div className="flex flex-col py-2">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 text-gray-800 font-bold uppercase text-sm border-b border-gray-50 hover:bg-gray-50 flex justify-between">
                About Us <ChevronDown size={16} className="text-gray-400" />
              </a>
              <a href="#programs" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 text-gray-800 font-bold uppercase text-sm border-b border-gray-50 hover:bg-gray-50 flex justify-between">
                What we do <ChevronDown size={16} className="text-gray-400" />
              </a>
              <a href="#partnership" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 text-gray-800 font-bold uppercase text-sm border-b border-gray-50 hover:bg-gray-50 flex justify-between">
                Partnership <ChevronDown size={16} className="text-gray-400" />
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 text-gray-800 font-bold uppercase text-sm border-b border-gray-50 hover:bg-gray-50 flex justify-between">
                Get Involved <ChevronDown size={16} className="text-gray-400" />
              </a>
              <a href="#resources" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 text-gray-800 font-bold uppercase text-sm border-b border-gray-50 hover:bg-gray-50 flex justify-between">
                Resources <ChevronDown size={16} className="text-gray-400" />
              </a>

              <div className="px-6 py-6 bg-gray-50 flex flex-col gap-4">
                <a href="tel:01140538140" className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Phone size={16} className="text-[#e31837]" /> 011-40538140
                </a>
                <a href="mailto:info@balrakshabharat.org" className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Mail size={16} className="text-[#e31837]" /> info@balrakshabharat.org
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
