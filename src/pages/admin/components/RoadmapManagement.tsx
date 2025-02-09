import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, ArrowUp, ArrowDown, Check } from 'lucide-react';
import { getRoadmap, toggleRoadmapVisibility, updateRoadmap } from '../../../lib/data';

interface RoadmapPhase {
  id: string;
  title: string;
  items: string[];
  order: number;
}

const RoadmapManagement = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const roadmapData = getRoadmap();
  const [visible, setVisible] = useState(roadmapData.visible);
  const [phases, setPhases] = useState<RoadmapPhase[]>(roadmapData.phases || [
    {
      id: '1',
      title: 'Phase 1: Foundation, Community Building & Partnership Outreach',
      items: [
        'Establish official social media pages (X, Tiktok, Telegram, Discord)',
        'Develop a content strategy to attract and engage supporters',
        'Build an active community around the project\'s vision and benefits',
        'Share Words of Wisdom (WoW) posts to introduce and promote Lozo Lotofair',
        'Engage with influencers and blockchain communities to expand reach',
        'Call for strategic partnerships with blockchain projects, gaming platforms, and marketing agencies',
        'Gather feedback from early supporters to refine ideas'
      ],
      order: 1
    },
    {
      id: '2',
      title: 'Phase 2: Tokenomics, Whitepaper, ICO & Presale',
      items: [
        'Develop and publish the Lozo Lotofair Whitepaper, detailing the platform’s vision, mechanics, and economic model.',
'Introduce the native Lozo token for transactions, rewards, and staking.',
'Define token utility, including participation incentives and governance.',  
'Launch Initial Coin Offering (ICO) and presale rounds to raise funds and drive early adoption.',  
'Implement staking and reward mechanisms to boost player engagement.',  
'Begin partnership discussions with blockchain networks and gaming platforms.' 
      ],
      order: 2
    }
  ]);

  const addPhase = () => {
    const newPhase: RoadmapPhase = {
      id: crypto.randomUUID(),
      title: `Phase ${phases.length + 1}`,
      items: [],
      order: phases.length + 1
    };
    setPhases([...phases, newPhase]);
  };

  const removePhase = (id: string) => {
    setPhases(phases.filter(p => p.id !== id));
  };

  const updatePhase = (id: string, field: keyof RoadmapPhase, value: any) => {
    setPhases(phases.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const addItem = (phaseId: string) => {
    setPhases(phases.map(p => 
      p.id === phaseId ? { ...p, items: [...p.items, ''] } : p
    ));
  };

  const updateItem = (phaseId: string, index: number, value: string) => {
    setPhases(phases.map(p => 
      p.id === phaseId ? {
        ...p,
        items: p.items.map((item, i) => i === index ? value : item)
      } : p
    ));
  };

  const removeItem = (phaseId: string, index: number) => {
    setPhases(phases.map(p => 
      p.id === phaseId ? {
        ...p,
        items: p.items.filter((_, i) => i !== index)
      } : p
    ));
  };

  const movePhase = (id: string, direction: 'up' | 'down') => {
    const currentIndex = phases.findIndex(p => p.id === id);
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === phases.length - 1)
    ) {
      return;
    }

    const newPhases = [...phases];
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    [newPhases[currentIndex], newPhases[targetIndex]] = [newPhases[targetIndex], newPhases[currentIndex]];
    
    // Update order numbers
    newPhases.forEach((phase, index) => {
      phase.order = index + 1;
    });

    setPhases(newPhases);
  };

  // Reset success message after 3 seconds
  useEffect(() => {
    if (saveSuccess) {
      const timer = setTimeout(() => setSaveSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [saveSuccess]);

  // Initialize with current data
  useEffect(() => {
    const data = getRoadmap();
    setVisible(data.visible);
    setPhases(data.phases);
  }, []);

  const handleVisibilityChange = (isVisible: boolean) => {
    setVisible(isVisible);
    toggleRoadmapVisibility(isVisible);
    // Update the full roadmap data to ensure consistency
    updateRoadmap({
      visible: isVisible,
      phases
    });
    setSaveSuccess(true);
  };

  const handleSave = () => {
    try {
      // Save all roadmap data
      updateRoadmap({
        visible,
        phases: phases.map((phase, index) => ({
          ...phase,
          order: index + 1
        }))
      });
      setSaveSuccess(true);
    } catch (error) {
      console.error('Error saving roadmap:', error);
      alert('Error saving changes. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Roadmap Management</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="showRoadmap"
              checked={visible}
              onChange={(e) => handleVisibilityChange(e.target.checked)}
              className="w-4 h-4 bg-black/30 border border-white/10 rounded text-yellow-500"
            />
            <label htmlFor="showRoadmap" className="text-white">Show Roadmap Section</label>
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

      <div className="space-y-6">
        {phases.map((phase, phaseIndex) => (
          <div key={phase.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 mr-4">
                <input
                  type="text"
                  value={phase.title}
                  onChange={(e) => updatePhase(phase.id, 'title', e.target.value)}
                  className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                  placeholder="Phase Title"
                />
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => movePhase(phase.id, 'up')}
                  disabled={phaseIndex === 0}
                  className={`p-2 ${phaseIndex === 0 ? 'text-gray-600' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => movePhase(phase.id, 'down')}
                  disabled={phaseIndex === phases.length - 1}
                  className={`p-2 ${phaseIndex === phases.length - 1 ? 'text-gray-600' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removePhase(phase.id)}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {phase.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start space-x-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateItem(phase.id, itemIndex, e.target.value)}
                    className="flex-1 px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                    placeholder="Phase Item"
                  />
                  <button
                    onClick={() => removeItem(phase.id, itemIndex)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => addItem(phase.id)}
                className="flex items-center space-x-2 px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/10"
              >
                <Plus className="w-4 h-4" />
                <span>Add Item</span>
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={addPhase}
          className="flex items-center space-x-2 w-full px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/10"
        >
          <Plus className="w-4 h-4" />
          <span>Add Phase</span>
        </button>
      </div>
    </div>
  );
};

export default RoadmapManagement;