import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, Check } from 'lucide-react';
import { getTokenomics, toggleTokenomicsVisibility, updateTokenomics } from '../../../lib/data';

interface TokenAllocation {
  id: string;
  category: string;
  percentage: number;
  tokens: number;
  vestingPeriod?: string;
}

interface TokenDistribution {
  name: string;
  symbol: string;
  totalSupply: number;
  type: string;
  visible: boolean;
  allocations: TokenAllocation[];
  stakingInfo: string;
  rewardsInfo: string;
  burnMechanism: string;
  presalePrice: string;
  launchPrice: string;
}

const TokenomicsManagement = () => {
  const [tokenomics, setTokenomics] = useState<TokenDistribution>(getTokenomics());
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // Reset success message after 3 seconds
  useEffect(() => {
    if (saveSuccess) {
      const timer = setTimeout(() => setSaveSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [saveSuccess]);

  // Initialize with current data
  useEffect(() => {
    setTokenomics(getTokenomics());
  }, []);

  const handleVisibilityChange = (visible: boolean) => {
    toggleTokenomicsVisibility(visible);
    setTokenomics({ ...tokenomics, visible });
    setSaveSuccess(true);
  };

  const [initialData] = useState<TokenDistribution>({
    name: "Lozo's LotoFair",
    symbol: "LLF (Lozo)",
    totalSupply: 2000000000,
    type: "Utility Token",
    visible: true,
    allocations: [
      {
        id: '1',
        category: 'Founders and Team',
        percentage: 15,
        tokens: 300000000,
        vestingPeriod: '12 months with a 3-month cliff'
      },
      {
        id: '2',
        category: 'Private Investors',
        percentage: 5,
        tokens: 100000000,
        vestingPeriod: '6 months'
      },
      {
        id: '3',
        category: 'Public Sale (Presale & ICO)',
        percentage: 35,
        tokens: 700000000
      },
      {
        id: '4',
        category: 'Ecosystem Development',
        percentage: 15,
        tokens: 300000000
      },
      {
        id: '5',
        category: 'Partnerships and Collaborations',
        percentage: 10,
        tokens: 200000000
      },
      {
        id: '6',
        category: 'Reserve',
        percentage: 10,
        tokens: 200000000
      },
      {
        id: '7',
        category: 'Charity and Disabled Support',
        percentage: 10,
        tokens: 200000000
      }
    ],
    stakingInfo: 'Users can stake LLF tokens for rewards and governance participation',
    rewardsInfo: 'LLF holders can earn tokens by engaging with the ecosystem',
    burnMechanism: 'A portion of fees will be burned to reduce supply',
    presalePrice: '0.001 USDT per LLF',
    launchPrice: '0.1 USDT per LLF'
  });

  const addAllocation = () => {
    const newAllocation: TokenAllocation = {
      id: crypto.randomUUID(),
      category: '',
      percentage: 0,
      tokens: 0
    };
    setTokenomics({
      ...tokenomics,
      allocations: [...tokenomics.allocations, newAllocation]
    });
  };

  const removeAllocation = (id: string) => {
    setTokenomics({
      ...tokenomics,
      allocations: tokenomics.allocations.filter(a => a.id !== id)
    });
  };

  const updateAllocation = (id: string, field: keyof TokenAllocation, value: any) => {
    setTokenomics({
      ...tokenomics,
      allocations: tokenomics.allocations.map(a => 
        a.id === id ? { ...a, [field]: value } : a
      )
    });
  };

  const handleSave = () => {
    try {
      // Save all tokenomics data
      updateTokenomics(tokenomics);
      setSaveSuccess(true);
    } catch (error) {
      console.error('Error saving tokenomics:', error);
      alert('Error saving changes. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Tokenomics Management</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="showTokenomics"
                checked={tokenomics.visible}
                onChange={(e) => handleVisibilityChange(e.target.checked)}
                className="w-4 h-4 bg-black/30 border border-white/10 rounded text-yellow-500"
              />
              <label htmlFor="showTokenomics" className="text-white">Show Tokenomics Section</label>
            </div>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Token Details */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Token Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-2">Token Name</label>
            <input
              type="text"
              value={tokenomics.name}
              onChange={(e) => setTokenomics({ ...tokenomics, name: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Token Symbol</label>
            <input
              type="text"
              value={tokenomics.symbol}
              onChange={(e) => setTokenomics({ ...tokenomics, symbol: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Total Supply</label>
            <input
              type="number"
              value={tokenomics.totalSupply}
              onChange={(e) => setTokenomics({ ...tokenomics, totalSupply: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Token Type</label>
            <input
              type="text"
              value={tokenomics.type}
              onChange={(e) => setTokenomics({ ...tokenomics, type: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
          </div>
        </div>
      </div>

      {/* Token Allocation */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Token Allocation</h3>
          <button
            onClick={addAllocation}
            className="flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <Plus className="w-4 h-4" />
            <span>Add Allocation</span>
          </button>
        </div>
        <div className="space-y-4">
          {tokenomics.allocations.map((allocation) => (
            <div key={allocation.id} className="grid grid-cols-5 gap-4 items-start">
              <div className="col-span-2">
                <input
                  type="text"
                  value={allocation.category}
                  onChange={(e) => updateAllocation(allocation.id, 'category', e.target.value)}
                  placeholder="Category"
                  className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                />
              </div>
              <div>
                <input
                  type="number"
                  value={allocation.percentage}
                  onChange={(e) => updateAllocation(allocation.id, 'percentage', Number(e.target.value))}
                  placeholder="Percentage"
                  className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                />
              </div>
              <div>
                <input
                  type="number"
                  value={allocation.tokens}
                  onChange={(e) => updateAllocation(allocation.id, 'tokens', Number(e.target.value))}
                  placeholder="Tokens"
                  className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                />
              </div>
              <div className="flex items-start space-x-2">
                <input
                  type="text"
                  value={allocation.vestingPeriod || ''}
                  onChange={(e) => updateAllocation(allocation.id, 'vestingPeriod', e.target.value)}
                  placeholder="Vesting Period"
                  className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                />
                <button
                  onClick={() => removeAllocation(allocation.id)}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Additional Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-white mb-2">Staking Information</label>
            <textarea
              value={tokenomics.stakingInfo}
              onChange={(e) => setTokenomics({ ...tokenomics, stakingInfo: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
              rows={2}
            />
          </div>
          <div>
            <label className="block text-white mb-2">Rewards Information</label>
            <textarea
              value={tokenomics.rewardsInfo}
              onChange={(e) => setTokenomics({ ...tokenomics, rewardsInfo: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
              rows={2}
            />
          </div>
          <div>
            <label className="block text-white mb-2">Burn Mechanism</label>
            <textarea
              value={tokenomics.burnMechanism}
              onChange={(e) => setTokenomics({ ...tokenomics, burnMechanism: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
              rows={2}
            />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-2">Presale Price</label>
            <input
              type="text"
              value={tokenomics.presalePrice}
              onChange={(e) => setTokenomics({ ...tokenomics, presalePrice: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Launch Price</label>
            <input
              type="text"
              value={tokenomics.launchPrice}
              onChange={(e) => setTokenomics({ ...tokenomics, launchPrice: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsManagement;