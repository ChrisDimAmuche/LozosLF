import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any }) => Promise<any>;
    };
  }
}
import { Wallet, Timer, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { getPresaleMode, getPageSettings, EVENTS } from '../lib/data';
import { dataEvents } from '../lib/events';

const Presale = () => {
  const [mode, setMode] = useState(getPresaleMode());
  const [settings, setSettings] = useState(getPageSettings());

  // Listen for mode changes
  useEffect(() => {
    const handleModeChange = () => {
      setMode(getPresaleMode());
      setSettings(getPageSettings());
    };

    dataEvents.on(EVENTS.PRESALE_MODE_CHANGED, handleModeChange);

    return () => {
      dataEvents.off(EVENTS.PRESALE_MODE_CHANGED, handleModeChange);
    };
  }, []);
  const { content } = settings.presale;

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endTime = new Date(content.endTime).getTime();
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [content.endTime]);

  const handleConnectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Add token to wallet
        if (content.tokenAddress) {
          await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20',
              options: {
                address: content.tokenAddress,
                symbol: 'LLF',
                decimals: 18,
                image: 'https://your-token-logo-url.com/llf.png'
              },
            },
          });
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Error connecting wallet. Please try again.');
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet!');
    }
  };

  if (mode === 'production') {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Presale Coming Soon!
            </h1>
            <p className="text-xl text-gray-300">
              Get ready to be part of something revolutionary
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-12 border border-white/10 text-center">
            <div className="flex justify-center items-center mb-8">
              <Timer className="w-16 h-16 text-yellow-500" />
              <Sparkles className="w-12 h-12 text-yellow-500 ml-4" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Join the Future of Decentralized Betting!
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be among the first to own LLF tokens and shape the future of fair, transparent, and community-driven betting. Our presale is launching soon with exclusive early-bird opportunities and special benefits for early supporters.
            </p>
            <div className="text-lg text-yellow-500 font-semibold mb-8">
              Get Ready for the Revolution in Betting!
            </div>
            <div className="bg-black/30 rounded-lg p-6 max-w-xl mx-auto">
              <h3 className="text-white font-bold mb-4">Presale Highlights:</h3>
              <ul className="text-gray-300 text-left space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Early access to LLF tokens at exclusive presale prices</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Be part of a revolutionary betting platform</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Special benefits and rewards for early supporters</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Join a community-driven platform where fairness is guaranteed</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 text-gray-300">
              <p>Stay tuned for the announcement of our presale date!</p>
              <p className="mt-2">Follow us on social media to be the first to know.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join <span className="text-yellow-500">Presale Now!</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be among the first to own LLF tokens and participate in the future of
            decentralized lottery and betting.
          </p>
        </div>
  
        {/* Timer Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-8 text-center">
          <Timer className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-white mb-4">Presale Ends In</h2>
          <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-black/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-500">{value}</div>
                <div className="text-sm text-gray-400">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Participation Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">How to Participate</h2>
            <div className="space-y-4 text-gray-300" dangerouslySetInnerHTML={{ __html: content.howToParticipate }} />
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Presale Details</h2>
            <div className="space-y-4 text-gray-300" dangerouslySetInnerHTML={{ __html: content.details }} />
          </div>
        </div>

        {/* Connect Wallet Button */}
        <div className="text-center">
          <button 
            className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105"
            onClick={handleConnectWallet}
          >
            <Wallet className="w-5 h-5" />
            <span>Connect Wallet</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="mt-4 flex items-center justify-center text-gray-400">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>Make sure you're connected to Binance Smart Chain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;