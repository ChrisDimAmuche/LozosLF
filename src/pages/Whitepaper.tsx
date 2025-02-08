import React, { useState, useEffect } from 'react';
import { FileText, Eye, Timer, Sparkles } from 'lucide-react';
import { getWhitepaperMode, getPageSettings, EVENTS } from '../lib/data';
import { dataEvents } from '../lib/events';

const Whitepaper = () => {
  const [mode, setMode] = useState(getWhitepaperMode());
  const [settings, setSettings] = useState(getPageSettings());

  // Listen for mode changes
  useEffect(() => {
    const handleModeChange = () => {
      setMode(getWhitepaperMode());
      setSettings(getPageSettings());
    };

    dataEvents.on(EVENTS.WHITEPAPER_MODE_CHANGED, handleModeChange);

    return () => {
      dataEvents.off(EVENTS.WHITEPAPER_MODE_CHANGED, handleModeChange);
    };
  }, []);
  const { content } = settings.whitepaper;

  if (mode === 'production') {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-gray-300">
              {content.subtitle}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-12 border border-white/10 text-center">
            <div className="flex justify-center items-center mb-8">
              <Timer className="w-16 h-16 text-yellow-500" />
              <Sparkles className="w-12 h-12 text-yellow-500 ml-4" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Coming Soon - Get Ready for Something Revolutionary!
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our comprehensive whitepaper is in its final stages. Soon you'll discover how Lozo's LotoFair is revolutionizing the betting ecosystem with groundbreaking technology and unmatched transparency.
            </p>
            <div className="text-lg text-yellow-500 font-semibold">
              Stay tuned - The future of decentralized betting is about to be unveiled!
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Whitepaper
          </h1>
          <p className="text-xl text-gray-300">
            Learn more about Lozo's LotoFair's technology, tokenomics, and vision
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-24 h-24 text-yellow-500" />
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {content.title}
            </h2>
            <p className="text-gray-300 mb-8">
              Our comprehensive whitepaper details the technical architecture, tokenomics,
              and roadmap of Lozo's LotoFair platform.
            </p>
            
            {mode === 'main' ? (
              <a 
                href={content.documentUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105"
              >
                <Eye className="w-5 h-5" />
                <span>View Whitepaper</span>
              </a>
            ) : (
              <button 
                className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 opacity-50 cursor-not-allowed"
                disabled
              >
                <Eye className="w-5 h-5" />
                <span>View Whitepaper</span>
              </button>
            )}
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-xl font-bold text-white mb-4">Contents Include:</h3>
            <ul className="text-gray-300 space-y-2">
              {content.sections.map((section, index) => (
                <li key={index}>• {section}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;