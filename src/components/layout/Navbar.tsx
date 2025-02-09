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
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            {logo.url ? (
              <img 
                src={logo.url} 
                alt={logo.alt} 
                className="h-8 w-auto"
              />
            ) : (
              <Coins className="h-8 w-8 text-yellow-500" />
            )}
            <span className="text-xl font-bold text-white">Lozo's LotoFair</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link to="about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
            <Link to="whitepaper" className="text-gray-300 hover:text-white transition">
              Whitepaper
            </Link>
            <Link 
              to="presale"
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
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