import React from 'react';
import { useParams } from 'react-router-dom';
import { getFounders } from '../lib/data';

const Vision = () => {
  const { id } = useParams<{ id: string }>();
  const founders = getFounders();
  const founder = founders.find(f => f.id === id);

  if (!founder) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Founder not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shrink-0"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                {founder.name}'s Vision
              </h1>
              <p className="text-yellow-500 text-lg sm:text-xl">{founder.title}</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none overflow-hidden">
            <div className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-wrap break-words overflow-y-auto">
              {founder.vision}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;