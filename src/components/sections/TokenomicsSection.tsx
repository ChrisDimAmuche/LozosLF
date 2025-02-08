import React from 'react';
import { Coins, Percent, Users, CircleDollarSign } from 'lucide-react';

interface TokenAllocation {
  id: string;
  category: string;
  percentage: number;
  tokens: number;
  vestingPeriod?: string;
}

interface TokenomicsProps {
  name: string;
  symbol: string;
  totalSupply: number;
  type: string;
  allocations: TokenAllocation[];
  stakingInfo: string;
  rewardsInfo: string;
  burnMechanism: string;
  presalePrice: string;
  launchPrice: string;
}

const TokenomicsSection: React.FC<TokenomicsProps> = ({
  name,
  symbol,
  totalSupply,
  type,
  allocations,
  stakingInfo,
  rewardsInfo,
  burnMechanism,
  presalePrice,
  launchPrice
}) => {
  return (
    <section className="py-20 bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          <span className="text-yellow-500">Tokenomics</span>
        </h2>

        {/* Token Overview */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <Coins className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Token Name</h3>
            <p className="text-gray-300">{name}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <CircleDollarSign className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Symbol</h3>
            <p className="text-gray-300">{symbol}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <Users className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Total Supply</h3>
            <p className="text-gray-300">{totalSupply.toLocaleString()}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <Percent className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Token Type</h3>
            <p className="text-gray-300">{type}</p>
          </div>
        </div>

        {/* Token Allocation */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Token Allocation</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {allocations.map((allocation) => (
              <div key={allocation.id} className="flex items-start space-x-4">
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-500/10 rounded-lg flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-500">{allocation.percentage}%</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{allocation.category}</h4>
                  <p className="text-gray-300 mb-1">{allocation.tokens.toLocaleString()} tokens</p>
                  {allocation.vestingPeriod && (
                    <p className="text-sm text-gray-400">Vesting: {allocation.vestingPeriod}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Token Utility</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Staking</h4>
                <p className="text-gray-300">{stakingInfo}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Rewards</h4>
                <p className="text-gray-300">{rewardsInfo}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Burn Mechanism</h4>
                <p className="text-gray-300">{burnMechanism}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Token Pricing</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Presale Price</h4>
                <p className="text-gray-300">{presalePrice}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Launch Price</h4>
                <p className="text-gray-300">{launchPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;