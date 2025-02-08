import React, { useState } from 'react';
import { useAuth } from '../../components/auth/AuthProvider';
import { Layout, Settings, Image, MessageCircle, LogOut, Users, Building, Coins, Map } from 'lucide-react';
import PartnersManagement from './components/PartnersManagement';
import FoundersManagement from './components/FoundersManagement';
import ContentManagement from './components/ContentManagement';
import ImageManagement from './components/ImageManagement';
import TokenomicsManagement from './components/TokenomicsManagement';
import RoadmapManagement from './components/RoadmapManagement';
import CommunityManagement from './components/CommunityManagement';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('content');

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-black/80 backdrop-blur-md">
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="mb-8 px-4">
            <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab('content')}
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  activeTab === 'content'
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Layout className="w-5 h-5 mr-3" />
                Content Management
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('images')}
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  activeTab === 'images'
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Image className="w-5 h-5 mr-3" />
                Image Management
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('social')}
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  activeTab === 'social'
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Social Links
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('partners')}
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  activeTab === 'partners'
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Building className="w-5 h-5 mr-3" />
                Partners
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('founders')}
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  activeTab === 'founders'
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Founders
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('tokenomics')}
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  activeTab === 'tokenomics'
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Coins className="w-5 h-5 mr-3" />
                Tokenomics
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  activeTab === 'roadmap'
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Map className="w-5 h-5 mr-3" />
                Roadmap
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  activeTab === 'settings'
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </button>
            </li>
          </ul>
          <div className="absolute bottom-4 left-0 w-64 px-3">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {activeTab === 'content' && <ContentManagement />}
        {activeTab === 'images' && <ImageManagement />}
        {activeTab === 'social' && <CommunityManagement />}
        {activeTab === 'partners' && (
          <PartnersManagement />
        )}
        {activeTab === 'founders' && (
          <FoundersManagement />
        )}
        {activeTab === 'tokenomics' && <TokenomicsManagement />}
        {activeTab === 'roadmap' && <RoadmapManagement />}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
            {/* Settings components will be added here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;