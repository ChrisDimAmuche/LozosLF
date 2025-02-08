import React from 'react';
import { ArrowRight, Rocket, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPartners, getTokenomics, getRoadmap, EVENTS } from '../lib/data';
import { dataEvents } from '../lib/events';
import TokenomicsSection from '../components/sections/TokenomicsSection';
import RoadmapSection from '../components/sections/RoadmapSection';

const Home = () => {
  const [partners] = React.useState(getPartners());
  const [tokenomics, setTokenomics] = React.useState(getTokenomics());
  const [roadmap, setRoadmap] = React.useState(getRoadmap());

  // Listen for visibility and content changes
  React.useEffect(() => {
    const handleTokenomicsVisibilityChange = () => {
      setTokenomics(getTokenomics());
    };

    const handleRoadmapChange = () => {
      const updatedRoadmap = getRoadmap();
      setRoadmap(updatedRoadmap);
    };

    // Initial data load
    setTokenomics(getTokenomics());
    setRoadmap(getRoadmap());

    // Event listeners
    dataEvents.on(EVENTS.TOKENOMICS_VISIBILITY_CHANGED, handleTokenomicsVisibilityChange);
    dataEvents.on(EVENTS.ROADMAP_VISIBILITY_CHANGED, handleRoadmapChange);
    dataEvents.on(EVENTS.ROADMAP_CONTENT_CHANGED, handleRoadmapChange);

    return () => {
      dataEvents.off(EVENTS.TOKENOMICS_VISIBILITY_CHANGED, handleTokenomicsVisibilityChange);
      dataEvents.off(EVENTS.ROADMAP_VISIBILITY_CHANGED, handleRoadmapChange);
      dataEvents.off(EVENTS.ROADMAP_CONTENT_CHANGED, handleRoadmapChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
            alt="Crypto background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-yellow-500">Lozo's LotoFair</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The future of decentralized lottery and betting on Binance Smart Chain
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/presale"
              className="flex items-center space-x-2 bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              <span>Join Presale</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 bg-white/10 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <span>Learn More</span>
              <Rocket className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="flex items-center space-x-2 bg-white/10 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <span>How It Works</span>
              <BookOpen className="w-5 h-5" />
            </Link>
            <Link
              to="/community"
              className="flex items-center space-x-2 bg-white/10 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <span>Join the community</span>
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <div className={`transition-all duration-500 ${tokenomics.visible ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <TokenomicsSection
          name={tokenomics.name}
          symbol={tokenomics.symbol}
          totalSupply={tokenomics.totalSupply}
          type={tokenomics.type}
          allocations={tokenomics.allocations}
          stakingInfo={tokenomics.stakingInfo}
          rewardsInfo={tokenomics.rewardsInfo}
          burnMechanism={tokenomics.burnMechanism}
          presalePrice={tokenomics.presalePrice}
          launchPrice={tokenomics.launchPrice}
        />
      </div>

      {/* Partners Section */}
      <section className={`py-20 bg-black/80 ${tokenomics.visible ? 'mt-0' : 'mt-20'} transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Seeking <span className="text-yellow-500">partnerships with</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-white text-center mb-4">{partner.name}</h3>
                <p className="text-gray-300 text-center">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <div className={`transition-all duration-500 ${roadmap.visible ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <RoadmapSection phases={roadmap.phases} />
      </div>
    </div>
  );
};

export default Home;