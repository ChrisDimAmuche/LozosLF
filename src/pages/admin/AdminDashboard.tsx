import React from 'react';
import { Link, Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
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
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  const isActive = (path: string) => {
    return location.pathname === `/admin${path}`;
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
              <Link
                to="/admin/content"
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  isActive('/content')
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Layout className="w-5 h-5 mr-3" />
                Content Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/images"
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  isActive('/images')
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Image className="w-5 h-5 mr-3" />
                Image Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/social"
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  isActive('/social')
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Social Links
              </Link>
            </li>
            <li>
              <Link
                to="/admin/partners"
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  isActive('/partners')
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Building className="w-5 h-5 mr-3" />
                Partners
              </Link>
            </li>
            <li>
              <Link
                to="/admin/founders"
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  isActive('/founders')
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Founders
              </Link>
            </li>
            <li>
              <Link
                to="/admin/tokenomics"
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  isActive('/tokenomics')
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Coins className="w-5 h-5 mr-3" />
                Tokenomics
              </Link>
            </li>
            <li>
              <Link
                to="/admin/roadmap"
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  isActive('/roadmap')
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Map className="w-5 h-5 mr-3" />
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  isActive('/settings')
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </Link>
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
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;