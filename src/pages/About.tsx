import React from 'react';
import { Shield, Zap, Lock, Mail } from 'lucide-react';
import { getFounders } from '../lib/data';
import { Link } from 'react-router-dom';

const About = () => {
  const founders = getFounders();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-yellow-500">Lozo's LotoFair</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            A revolutionary decentralized lottery and betting platform built on the Binance Smart Chain,
            designed to provide fair, transparent, and exciting opportunities for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/10">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Secure & Transparent</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Built on blockchain technology, ensuring complete transparency and security for all transactions
              and lottery draws.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <Zap className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Fast & Efficient</h3>
            <p className="text-gray-300">
              Leveraging Binance Smart Chain for quick transactions and minimal fees, making participation
              accessible to everyone.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <Lock className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Fair & Decentralized</h3>
            <p className="text-gray-300">
              Smart contract-powered lottery system ensures fairness and eliminates the possibility of
              manipulation.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Lozo's LotoFair aims to revolutionize the traditional lottery and betting industry by leveraging
            blockchain technology to create a transparent, fair, and accessible platform for everyone.
            We believe in the power of decentralization to eliminate intermediaries and return more value
            to our participants.
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Connect with the <span className="text-yellow-500">Creator</span>
            </h2>
            <p className="text-xl text-gray-300 mt-4">
              Explore Partnership Opportunities and Strategic Collaborations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {founders.map((founder) => (
              <div key={founder.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-8">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden rounded-xl flex-shrink-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{founder.name}</h3>
                    <p className="text-yellow-500 text-base sm:text-lg mb-3 sm:mb-4">{founder.title}</p>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{founder.description}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {founder.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          {link.icon}
                        </a>
                      ))}
                      <a
                        href={`mailto:${founder.email}`}
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                    {founder.showVisionButton && (
                      <Link
                        to={`/vision/${founder.id}`}
                        className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                      >
                        <span>Vision</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;