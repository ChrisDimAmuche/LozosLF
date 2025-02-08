import React from 'react';
import { Dices, Target, Users, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How <span className="text-yellow-500">It Works</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lozo: "Lotterie Optimisée pour le Zest Of chance" (Optimized Lottery for the Thrill of Chance)
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Lozo's Lotofair is an innovative, fairness-driven lottery and betting platform designed to maximize 
            player engagement, strategic participation, and transparency. The platform introduces two core systems:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">1. Lozo's Tiered Tournament System</h3>
              <p className="text-gray-300">
                A multi-level lottery competition where players advance through ten progressive stages by 
                predicting outcomes. Each level offers unique betting opportunities, risk-free investments, 
                and dynamic prize distributions.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">2. Lozo's Lotofair Color Challenge System</h3>
              <p className="text-gray-300">
                A color-based lottery where a Challenger sets up a prize pool, and bettors attempt to predict 
                the three winning colors. Features refunds for losing bets and a unique Jackpot Reserve system.
              </p>
            </div>
          </div>
        </div>

        {/* Tournament System Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">The Tiered Tournament System</h2>
          
          <div className="grid gap-8">
            {/* Core Features */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Core Features</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Dices className="w-8 h-8" />, text: "Transparent Lottery System" },
                  { icon: <Target className="w-8 h-8" />, text: "Dual Betting Mechanisms" },
                  { icon: <BarChart3 className="w-8 h-8" />, text: "Advanced Pool Distribution" },
                  { icon: <Users className="w-8 h-8" />, text: "Social Interaction Hub" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-black/30 rounded-lg">
                    <div className="text-yellow-500">{feature.icon}</div>
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tournament Structure */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Tournament Structure</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Basic Setup</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 10 Distinct Sections (Colors)</li>
                    <li>• 10 Tournament Levels</li>
                    <li>• Time-scheduled tournaments</li>
                    <li>• Verifiable random selection</li>
                    <li>• Multiple round participation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Section Colors</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Red", "Blue", "Green", "Yellow", "Purple",
                      "Orange", "Pink", "Brown", "White", "Black"
                    ].map((color, index) => (
                      <div key={color} className="bg-black/30 p-2 rounded">
                        <span className="text-gray-300">{index + 1}. {color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Challenge System Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">The Color Challenge System</h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-yellow-500 mb-6">The Challenger</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Sets up tournament with prize pool</li>
                  <li>• Minimum entry: $10</li>
                  <li>• Cap Quote: $50 or above</li>
                  <li>• Proportional winnings below Cap Quote</li>
                  <li>• Full reserve claim above Cap Quote</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-500 mb-6">The Color Bettors</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Select 3 colors from 20 options</li>
                  <li>• Fixed bet amount per tournament</li>
                  <li>• Maximum 50% of prize pool</li>
                  <li>• Equal split for correct predictions</li>
                  <li>• Refund for incorrect predictions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Features Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Social Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Chat System</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Public tournament chat</li>
                <li>• Section-specific rooms</li>
                <li>• Private messaging</li>
                <li>• Investment tracking</li>
                <li>• Real-time updates</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Dashboard Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Real-time tournament tracking</li>
                <li>• Investment distribution</li>
                <li>• Betting statistics</li>
                <li>• Historical data</li>
                <li>• Performance analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;