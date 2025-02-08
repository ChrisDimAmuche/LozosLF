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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
          <div className="flex items-start space-x-6 mb-8">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {founder.name}'s Vision
              </h1>
              <p className="text-yellow-500 text-xl">{founder.title}</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
              {founder.vision}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;