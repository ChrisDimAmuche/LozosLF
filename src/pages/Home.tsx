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
      <section className="relative min-h-[600px] h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-black">
        {/* Spotlight gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_top_left,_var(--tw-gradient-stops))] from-slate-700/40 via-slate-900/20 to-transparent" />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:font-bold text-white mb-6 sm:mb-8">
            Welcome to <span className="text-yellow-500">Lozo's LotoFair</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            The future of decentralized lottery and betting on Binance Smart Chain
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-3xl mx-auto flex-wrap px-4">
            <Link
              to="/presale"
              className="flex items-center justify-center space-x-3 bg-yellow-500 text-black px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-extrabold hover:bg-yellow-400 transition-all transform hover:scale-105 w-full sm:w-[calc(50%-1rem)] lg:w-auto min-w-[180px] sm:min-w-[220px] text-base sm:text-lg"
            >
              <span>Join Presale</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center space-x-3 bg-white/10 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-extrabold hover:bg-white/20 transition-all backdrop-blur-sm w-full sm:w-[calc(50%-1rem)] lg:w-auto min-w-[180px] sm:min-w-[220px] text-base sm:text-lg"
            >
              <span>Learn More</span>
              <Rocket className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="flex items-center justify-center space-x-3 bg-white/10 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-extrabold hover:bg-white/20 transition-all backdrop-blur-sm w-full sm:w-[calc(50%-1rem)] lg:w-auto min-w-[180px] sm:min-w-[220px] text-base sm:text-lg"
            >
              <span>How It Works</span>
              <BookOpen className="w-5 h-5" />
            </Link>
            <Link
              to="/community"
              className="flex items-center justify-center space-x-3 bg-white/10 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-extrabold hover:bg-white/20 transition-all backdrop-blur-sm w-full sm:w-[calc(50%-1rem)] lg:w-auto min-w-[180px] sm:min-w-[220px] text-base sm:text-lg"
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
      <section className={`${tokenomics.visible ? 'mt-0' : 'mt-12 sm:mt-16 lg:mt-24'} transition-all duration-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black`}>
        <div className="py-12 sm:py-16 lg:py-24 container max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12">
            Seeking <span className="text-yellow-500">partnerships with</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-yellow-500/50 transition-all flex flex-col items-center min-h-[250px] overflow-hidden">
                <div className="w-full h-20 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-[80%] object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-4">{partner.name}</h3>
                <p className="text-sm sm:text-base text-gray-300 text-center flex-grow overflow-y-auto px-2">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <div className={`transition-all duration-700 ${roadmap.visible ? 'opacity-100 max-h-[5000px]' : 'opacity-0 max-h-0 overflow-hidden'} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black`}>
        <RoadmapSection phases={roadmap.phases} />
      </div>
    </div>
  );
};

export default Home;