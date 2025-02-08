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
    <section className="py-20 bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          <span className="text-yellow-500">Roadmap</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500/20" />

          {/* Phases */}
          <div className="space-y-24">
            {sortedPhases.map((phase, index) => (
              <div key={phase.id} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500" />
                </div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6">{phase.title}</h3>
                    <ul className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
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