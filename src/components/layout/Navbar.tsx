import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';
import { getLogo, EVENTS } from '../../lib/data';
import { dataEvents } from '../../lib/events';

const Navbar = () => {
  const [logo, setLogo] = useState(getLogo());

  useEffect(() => {
    const handleLogoUpdate = () => {
      setLogo(getLogo());
    };

    dataEvents.on(EVENTS.LOGO_UPDATED, handleLogoUpdate);
    return () => {
      dataEvents.off(EVENTS.LOGO_UPDATED, handleLogoUpdate);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-2 py-1">
            {logo.url ? (
              <img 
                src={logo.url} 
                alt={logo.alt} 
                className="h-6 sm:h-8 w-auto"
              />
            ) : (
              <Coins className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-500" />
            )}
            <span className="text-lg sm:text-xl font-bold text-white">Lozo's LotoFair</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-sm lg:text-base text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link to="about" className="text-sm lg:text-base text-gray-300 hover:text-white transition">
              About
            </Link>
            <Link to="whitepaper" className="text-sm lg:text-base text-gray-300 hover:text-white transition">
              Whitepaper
            </Link>
            <Link 
              to="presale"
              className="bg-yellow-500 text-black px-3 sm:px-4 py-1.5 sm:py-2 text-sm lg:text-base rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Join Presale
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;