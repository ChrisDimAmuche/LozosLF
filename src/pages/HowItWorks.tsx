import React from 'react';
import { Dices, Target, Users, BarChart3, Timer, Coins, Award, Share2 } from 'lucide-react';

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
                  { icon: <Award className="w-8 h-8" />, text: "Tournament Progression System" },
                  { icon: <Share2 className="w-8 h-8" />, text: "Flexible Participation" },
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

            {/* Betting Mechanisms */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Betting Mechanisms</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Section Investment</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Invest in any section</li>
                    <li>• Multiple players per section</li>
                    <li>• No capacity limit</li>
                    <li>• Investment determines share</li>
                    <li>• Split based on percentage</li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Drop Betting</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Predict next drop</li>
                    <li>• Pre-spin betting window</li>
                    <li>• Split pool by bet ratio</li>
                    <li>• Unused pool carries over</li>
                    <li>• Multiple round entry</li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Advance Betting</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Predict advancing sections</li>
                    <li>• Level-based predictions</li>
                    <li>• Proportional rewards</li>
                    <li>• Multiple entry allowed</li>
                    <li>• Progressive difficulty</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tournament Example */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Live Tournament Example</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Starting Conditions</h4>
                  <p className="text-gray-300 mb-4">Total Pool: $100,000</p>
                  <div className="space-y-2">
                    <p className="text-gray-300">Initial Distribution:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <div>Red: $15,000 (150 players)</div>
                      <div>Blue: $12,000 (120 players)</div>
                      <div>Green: $10,000 (100 players)</div>
                      <div>Yellow: $9,500 (95 players)</div>
                      <div>Purple: $9,000 (90 players)</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Level Progression</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>• 10 → 9 sections (predict 9)</p>
                    <p>• 9 → 8 sections (predict 8)</p>
                    <p>• 8 → 7 sections (predict 7)</p>
                    <p>• 7 → 6 sections (predict 6)</p>
                    <p>• 6 → 5 sections (predict 5)</p>
                    <p>• Final winner determined</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Challenge System Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">The Color Challenge System</h2>
          <div className="grid gap-8">
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

            {/* Game Mechanics */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Game Mechanics</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Tournament Timeline</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>• 30-minute initial window</li>
                    <li>• +1 hour if players join</li>
                    <li>• Automatic spin after time limit</li>
                    <li>• Random selection of 3 colors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Jackpot Reserve</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Accumulates from sub-Cap wins</li>
                    <li>• Claimable with matching contribution</li>
                    <li>• Resets after claim</li>
                    <li>• Risk-free betting system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Features Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Social Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Group Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Team formation</li>
                <li>• Strategy sharing</li>
                <li>• Investment pooling</li>
                <li>• Performance tracking</li>
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