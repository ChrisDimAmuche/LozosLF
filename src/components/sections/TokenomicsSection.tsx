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
    <section className="py-12 sm:py-20 bg-black/80">
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12">
          <span className="text-yellow-500">Tokenomics</span>
        </h2>

        {/* Token Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 auto-rows-fr">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 flex flex-col min-h-[150px]">
            <Coins className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500 mb-3 sm:mb-4" />
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">Token Name</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">{name}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col">
            <CircleDollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500 mb-3 sm:mb-4" />
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">Symbol</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">{symbol}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col">
            <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500 mb-3 sm:mb-4" />
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">Total Supply</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">{totalSupply.toLocaleString()}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col">
            <Percent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500 mb-3 sm:mb-4" />
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">Token Type</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">{type}</p>
          </div>
        </div>

        {/* Token Allocation */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 mb-8 sm:mb-12 lg:mb-16 overflow-hidden">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8">Token Allocation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
            {allocations.map((allocation) => (
              <div key={allocation.id} className="flex items-start space-x-3 sm:space-x-4 min-h-[100px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-yellow-500/10 rounded-lg flex-shrink-0">
                  <span className="text-lg sm:text-xl font-bold text-yellow-500">{allocation.percentage}%</span>
                </div>
                <div className="flex-grow overflow-y-auto">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{allocation.category}</h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-1">{allocation.tokens.toLocaleString()} tokens</p>
                  {allocation.vestingPeriod && (
                    <p className="text-xs sm:text-sm text-gray-400">Vesting: {allocation.vestingPeriod}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 min-h-[300px] flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Token Utility</h3>
            <div className="space-y-4 flex-grow overflow-y-auto">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Staking</h4>
                <p className="text-sm sm:text-base text-gray-300">{stakingInfo}</p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Rewards</h4>
                <p className="text-sm sm:text-base text-gray-300">{rewardsInfo}</p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Burn Mechanism</h4>
                <p className="text-sm sm:text-base text-gray-300">{burnMechanism}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 min-h-[300px] flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Token Pricing</h3>
            <div className="space-y-4 flex-grow overflow-y-auto">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Presale Price</h4>
                <p className="text-sm sm:text-base text-gray-300">{presalePrice}</p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Launch Price</h4>
                <p className="text-sm sm:text-base text-gray-300">{launchPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;