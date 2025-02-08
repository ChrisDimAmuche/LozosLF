import React from 'react';
import { Dices, Target, Users, BarChart3, Award, Share2, Shield } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
            How <span className="text-yellow-500">It Works</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-300 mb-4">
              Lozo: "Lotterie Optimisée pour le Zest Of chance"
            </p>
            <p className="text-xl text-gray-400">
              (Optimized Lottery for the Thrill of Chance)
            </p>
          </div>
        </div>

        {/* Platform Overview */}
        <section className="mb-20">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-8">Platform Overview</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Shield className="w-8 h-8" />, title: "Transparent Lottery System", desc: "Fully verifiable and fair gaming system" },
                { icon: <Target className="w-8 h-8" />, title: "Dual Betting Mechanisms", desc: "Section investment and drop betting options" },
                { icon: <BarChart3 className="w-8 h-8" />, title: "Advanced Pool Distribution", desc: "Sophisticated prize pool allocation" },
                { icon: <Users className="w-8 h-8" />, title: "Social Interaction Hub", desc: "Community-driven gaming experience" },
                { icon: <Award className="w-8 h-8" />, title: "Tournament Progression", desc: "Multi-level competitive structure" },
                { icon: <Share2 className="w-8 h-8" />, title: "Flexible Participation", desc: "Multiple entry opportunities per game" }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-colors">
                  <div className="text-yellow-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tournament System */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">The Tiered Tournament System</h2>
          
          {/* System Summary */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The Tiered Tournament System is an innovative multi-level competition where players progress through 10 distinct stages. 
              Each stage offers unique betting opportunities and strategic challenges. Players can invest in colored sections, 
              predict which sections will be eliminated, or bet on advancing sections.
            </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-500 mb-3">How It Progresses</h3>
                  <p className="text-gray-300">
                    Starting with 10 colored sections, each round eliminates one section through random selection. 
                    Players can participate in multiple ways: investing in sections for long-term returns, betting on 
                    immediate drops, or predicting which sections will advance to the next stage.
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-500 mb-3">Winning Strategy</h3>
                  <p className="text-gray-300">
                    Success comes from combining different betting mechanisms. Players can spread investments across sections, 
                    capitalize on drop predictions, and earn additional rewards through advance betting. All winnings are 
                    distributed proportionally based on investment or bet size.
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-500 mb-3">Growing Prize Pools</h3>
                  <p className="text-gray-300">
                    The system features an innovative prize pool accumulation mechanism. Any unclaimed prizes or remaining amounts 
                    after distribution (including from sections with no investors) are automatically added to future tournament pools. 
                    Every Thursday, a special tournament takes place where all accumulated prize money is distributed equally among 
                    the winning section's participants. This weekly event requires a fixed entry fee (either $20 or $50, to be finalized), 
                    and after distribution, the prize pool resets to zero, returning to the normal flexible investment strategy.
                  </p>
                </div>
            </div>
          </div>
          
          {/* Tournament Structure */}
          <div className="grid gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-yellow-500 mb-8">Tournament Structure</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-6">Basic Setup</h4>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>10 Distinct Sections (Colors)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>10 Tournament Levels</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Time-scheduled tournaments</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Verifiable random selection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Multiple round participation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-6">Section Colors</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Red", "Blue", "Green", "Yellow", "Purple",
                      "Orange", "Pink", "Brown", "White", "Black"
                    ].map((color, index) => (
                      <div key={color} className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <span className="text-lg text-gray-300">{index + 1}. {color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Betting Mechanisms */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-yellow-500 mb-8">Betting Mechanisms</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Section Investment</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Players invest in any section</li>
                    <li>• Multiple players per section</li>
                    <li>• No capacity limit</li>
                    <li>• Investment determines share</li>
                    <li>• Split based on percentage</li>
                    <li>• Multiple entry allowed</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Drop Betting</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Predict next drop</li>
                    <li>• Pre-spin betting window</li>
                    <li>• Split pool by bet ratio</li>
                    <li>• Unused pool carries over</li>
                    <li>• Multiple betting rounds</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Advance Betting</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Predict advancing sections</li>
                    <li>• Level-based predictions</li>
                    <li>• Proportional rewards</li>
                    <li>• Progressive difficulty</li>
                    <li>• Multiple entry options</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tournament Example */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-yellow-500 mb-8">Live Tournament Example</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-6">Starting Conditions</h4>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
                    <p className="text-xl text-yellow-500 mb-2">Total Pool</p>
                    <p className="text-3xl text-white">$1,000</p>
                    <p className="text-gray-400">100 Players</p>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-xl text-white mb-4">Initial Distribution</h5>
                    <div className="grid gap-3">
                      {[
                        { color: "Red", players: 15, amount: 150 },
                        { color: "Blue", players: 12, amount: 120 },
                        { color: "Green", players: 10, amount: 100 },
                        { color: "Yellow", players: 9, amount: 90 },
                        { color: "Purple", players: 9, amount: 90 }
                      ].map((section) => (
                        <div key={section.color} className="bg-white/5 p-4 rounded-lg border border-white/10 flex justify-between items-center">
                          <span className="text-gray-300">{section.color}</span>
                          <div className="text-right">
                            <span className="text-yellow-500">${section.amount.toLocaleString()}</span>
                            <span className="text-gray-400 text-sm ml-2">({section.players} players)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-6">Level Progression</h4>
                  <div className="space-y-4">
                    {[
                      "10 → 9 sections (predict 9)",
                      "9 → 8 sections (predict 8)",
                      "8 → 7 sections (predict 7)",
                      "7 → 6 sections (predict 6)",
                      "6 → 5 sections (predict 5)",
                      "5 → 4 sections (predict 4)",
                      "4 → 3 sections (predict 3)",
                      "3 → 2 sections (predict 2)",
                      "2 → 1 wins (predict winner)"
                    ].map((step, index) => (
                      <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <span className="text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pool Distribution */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-yellow-500 mb-8">Pool Distribution Examples</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Section Investment</h4>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-yellow-500 mb-2">Formula</p>
                      <p className="text-lg text-white">Win = (Your Investment ÷ Section Total) × Prize Pool</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-yellow-500 mb-2">Example</p>
                      <div className="space-y-2">
                        <p className="text-gray-300">Total Prize Pool: $1,000</p>
                        <p className="text-gray-300">Red Section Total: $100</p>
                        <p className="text-gray-300">Alice's Investment: $20</p>
                        <p className="text-lg text-white mt-2">Calculation:</p>
                        <p className="text-yellow-500">($20 ÷ $100) × $1,000 = $200</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Drop Betting</h4>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-yellow-500 mb-2">Formula</p>
                      <p className="text-lg text-white">Win = (Your Bet ÷ Total Correct Bets) × Prize Pool</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-yellow-500 mb-2">Example</p>
                      <div className="space-y-2">
                        <p className="text-gray-300">Prize Pool: $500</p>
                        <p className="text-gray-300">Total Correct Bets: $100</p>
                        <p className="text-gray-300">Bob's Bet: $25</p>
                        <p className="text-lg text-white mt-2">Calculation:</p>
                        <p className="text-yellow-500">($25 ÷ $100) × $500 = $125</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Advance Betting</h4>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-yellow-500 mb-2">Formula</p>
                      <p className="text-lg text-white">Win = (Your Bet ÷ Total Correct Predictions) × Prize Pool</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-yellow-500 mb-2">Example</p>
                      <div className="space-y-2">
                        <p className="text-gray-300">Prize Pool: $2,000</p>
                        <p className="text-gray-300">Total Correct Predictions: $400</p>
                        <p className="text-gray-300">Carol's Bet: $100</p>
                        <p className="text-lg text-white mt-2">Calculation:</p>
                        <p className="text-yellow-500">($100 ÷ $400) × $2,000 = $500</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Thursday Special</h4>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-yellow-500 mb-2">Weekly Tournament</p>
                      <p className="text-lg text-white">Equal Split = Total Accumulated Pool ÷ Number of Winners</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-yellow-500 mb-2">Example</p>
                      <div className="space-y-2">
                        <p className="text-gray-300">Accumulated Pool: $10,000</p>
                        <p className="text-gray-300">Fixed Entry: $50</p>
                        <p className="text-gray-300">Winners in Section: 20</p>
                        <p className="text-lg text-white mt-2">Calculation:</p>
                        <p className="text-yellow-500">$10,000 ÷ 20 = $500 each</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Challenge System */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12">The Color Challenge System</h2>
          <div className="grid gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-yellow-500 mb-8">Overview</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                A color-based lottery system where a Challenger sets up a tournament with a prize pool, and Color Bettors 
                attempt to predict the three winning colors. The system ensures fairness by refunding losing bettors and 
                rewarding the challenger only if no one correctly predicts the winning combination.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">The Challenger</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li>• Minimum entry: $10</li>
                    <li>• Cap Quote: $50 or above</li>
                    <li>• Proportional winnings below Cap Quote</li>
                    <li>• Full reserve claim above Cap Quote</li>
                    <li>• Claims entire reserve with matching contribution</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">The Color Bettors</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li>• Select 3 colors from 20 options</li>
                    <li>• Fixed bet amount per tournament</li>
                    <li>• Maximum 50% of prize pool bet</li>
                    <li>• Equal split for correct predictions</li>
                    <li>• Refund for incorrect predictions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Game Mechanics */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-yellow-500 mb-8">Game Mechanics</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Timeline</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li>• 30-minute initial window</li>
                    <li>• +1 hour with player entry</li>
                    <li>• Automatic spin after time</li>
                    <li>• Instant result verification</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Example Scenario</h4>
                  <div className="space-y-3 text-gray-300">
                    <p>• Challenger sets $750 prize</p>
                    <p>• 15 bettors join, each betting $25</p>
                    <p>• Each picks 3 colors from wheel</p>
                    <p>• If no winner: Challenger gets $1,125</p>
                    <p>• If one wins: Gets full $750 prize</p>
                    <p>• Others get $25 refund each</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Selection Process</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li>• 20-section color wheel</li>
                    <li>• Random 3-color selection</li>
                    <li>• Equal split for winners</li>
                    <li>• Challenger backup win</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Jackpot Reserve</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li>• Accumulates below Cap Quote</li>
                    <li>• Claimable with match</li>
                    <li>• Resets after claim</li>
                    <li>• Risk-free betting system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Features */}
        <section>
          <h2 className="text-4xl font-bold text-white mb-12">Social Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Chat System</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• Public tournament chat</li>
                <li>• Section-specific rooms</li>
                <li>• Private messaging</li>
                <li>• Investment tracking</li>
                <li>• Real-time updates</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Group Features</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• Team formation</li>
                <li>• Strategy sharing</li>
                <li>• Investment pooling</li>
                <li>• Performance tracking</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Dashboard Features</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• Real-time tournament tracking</li>
                <li>• Investment distribution</li>
                <li>• Betting statistics</li>
                <li>• Historical data</li>
                <li>• Performance analytics</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;