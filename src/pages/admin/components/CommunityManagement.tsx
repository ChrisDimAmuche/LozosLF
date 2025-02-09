import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';
import { getSocialLinks, updateSocialLinks } from '../../../lib/data';
import type { SocialLink } from '../../../lib/types';

const CommunityManagement = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(getSocialLinks());
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    updateSocialLinks(socialLinks);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleLinkChange = (index: number, field: keyof SocialLink, value: string) => {
    const newLinks = [...socialLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setSocialLinks(newLinks);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Community Management</h2>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {saveSuccess && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-2 rounded-lg">
          Changes saved successfully!
        </div>
      )}

      <div className="space-y-6">
        {socialLinks.map((link, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Platform
                </label>
                <input
                  type="text"
                  value={link.platform}
                  onChange={(e) => handleLinkChange(index, 'platform', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  URL
                </label>
                <input
                  type="url"
                  value={link.url || ''}
                  onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                  placeholder="Leave empty to show coming soon message"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Coming Soon Message
                </label>
                <textarea
                  value={link.comingSoonMessage}
                  onChange={(e) => handleLinkChange(index, 'comingSoonMessage', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 h-24 resize-none"
                  placeholder="Message to show when the platform is coming soon..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityManagement;