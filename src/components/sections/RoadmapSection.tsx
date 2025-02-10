import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface RoadmapPhase {
  id: string;
  title: string;
  items: string[];
  order: number;
}

interface RoadmapProps {
  phases: RoadmapPhase[];
}

const RoadmapSection: React.FC<RoadmapProps> = ({ phases }) => {
  const sortedPhases = [...phases].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-black">
      <div className="py-12 sm:py-20 container max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-16">
          <span className="text-yellow-500">Roadmap</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-yellow-500/20 rounded-full z-0" />

          {/* Phases */}
          <div className="space-y-16 sm:space-y-24 relative z-10 overflow-hidden">
            {sortedPhases.map((phase, index) => (
              <div key={phase.id} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} sm:flex`}>
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500 ring-4 ring-yellow-500/20" />
                </div>

                {/* Content */}
                <div className={`w-full sm:w-5/12 ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:pr-12 lg:pr-16' : 'sm:pl-12 lg:pl-16'} overflow-hidden`}>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 min-h-[200px] flex flex-col">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">{phase.title}</h3>
                    <ul className="space-y-3 sm:space-y-4 flex-grow overflow-y-auto">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-gray-300 flex-grow">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;