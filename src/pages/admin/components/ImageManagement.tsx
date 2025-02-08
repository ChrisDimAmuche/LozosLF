import React, { useState, useEffect } from 'react';
import { Save, Upload, Loader2 } from 'lucide-react';
import { getLogo, updateLogo } from '../../../lib/data';

const ImageManagement = () => {
  const [logo, setLogo] = useState({
    url: '',
    alt: 'Lozo\'s LotoFair Logo',
    recommendedSize: '180x60 pixels'
  });
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const currentLogo = getLogo();
    setLogo(currentLogo);
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setLogo(prev => ({ ...prev, url: base64String }));
      setIsUploading(false);
    };

    reader.onerror = () => {
      alert('Failed to read file. Please try again.');
      setIsUploading(false);
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    updateLogo(logo);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Image Management</h2>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Logo Management */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Logo</h3>
        <div className="space-y-6">
          {/* Current Logo Preview */}
          {logo.url && (
            <div className="mb-4">
              <p className="text-white mb-2">Current Logo:</p>
              <img
                src={logo.url}
                alt={logo.alt}
                className="max-w-[180px] h-auto bg-white/5 rounded-lg p-2"
              />
            </div>
          )}

          {/* Logo Upload */}
          <div>
            <label className="block text-white mb-2">Upload New Logo</label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="logo-upload"
              />
              <input
                type="text"
                value={logo.url}
                onChange={(e) => setLogo({ ...logo, url: e.target.value })}
                placeholder="Logo URL"
                className="flex-1 px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
              />
              <label
                htmlFor="logo-upload"
                className={`flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 cursor-pointer ${
                  isUploading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    <span>Upload</span>
                  </>
                )}
              </label>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Recommended size: {logo.recommendedSize}
            </p>
          </div>

          {/* Alt Text */}
          <div>
            <label className="block text-white mb-2">Alt Text</label>
            <input
              type="text"
              value={logo.alt}
              onChange={(e) => setLogo({ ...logo, alt: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
          </div>

          {/* Size Recommendation */}
          <div>
            <label className="block text-white mb-2">Recommended Size</label>
            <input
              type="text"
              value={logo.recommendedSize}
              onChange={(e) => setLogo({ ...logo, recommendedSize: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
              placeholder="e.g., 180x60 pixels"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageManagement;