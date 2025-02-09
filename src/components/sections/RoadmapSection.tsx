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
    <section className="py-12 sm:py-20 bg-black/80">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-16">
          <span className="text-yellow-500">Roadmap</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 sm:w-1.5 h-full bg-yellow-500/20" />

          {/* Phases */}
          <div className="space-y-12 sm:space-y-24">
            {sortedPhases.map((phase, index) => (
              <div key={phase.id} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} sm:flex`}>
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500" />
                </div>

                {/* Content */}
                <div className={`w-full sm:w-5/12 ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:pr-16' : 'sm:pl-16'}`}>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">{phase.title}</h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-gray-300">{item}</span>
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