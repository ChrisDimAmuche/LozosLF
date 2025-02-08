import React, { useState, useEffect } from 'react';
import { Save, Check } from 'lucide-react';
import { 
  getPageSettings, 
  updatePageSettings, 
  setWhitepaperMode as updateWhitepaperMode, 
  setPresaleMode as updatePresaleMode,
  getFooterContent,
  updateFooterContent,
  getDocumentationUrl,
  updateDocumentationUrl
} from '../../../lib/data';

interface PageToggleProps {
  title: string;
  mode: 'production' | 'main';
  onModeChange: (mode: 'production' | 'main') => void;
}

const PageToggle: React.FC<PageToggleProps> = ({ title, mode, onModeChange }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-6">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="flex items-center space-x-4">
      <button
        onClick={() => onModeChange('production')}
        className={`px-4 py-2 rounded-lg font-semibold ${
          mode === 'production'
            ? 'bg-yellow-500 text-black'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Production Mode
      </button>
      <button
        onClick={() => onModeChange('main')}
        className={`px-4 py-2 rounded-lg font-semibold ${
          mode === 'main'
            ? 'bg-yellow-500 text-black'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Main Mode
      </button>
    </div>
  </div>
);

const ContentManagement = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const settings = getPageSettings();
  
  const [footerContent, setFooterContent] = useState(getFooterContent());

  const [whitepaperMode, setWhitepaperMode] = useState<'production' | 'main'>(settings.whitepaper.mode);
  const [whitepaperContent, setWhitepaperContent] = useState({
    title: settings.whitepaper.content.title,
    subtitle: settings.whitepaper.content.subtitle,
    sections: settings.whitepaper.content.sections,
    documentUrl: settings.whitepaper.content.documentUrl
  });
  const [presaleMode, setPresaleMode] = useState<'production' | 'main'>(settings.presale.mode);
  
  const [presaleContent, setPresaleContent] = useState({
    endTime: settings.presale.content.endTime,
    howToParticipate: settings.presale.content.howToParticipate,
    details: settings.presale.content.details,
    tokenAddress: settings.presale.content.tokenAddress
  });

  const [documentationUrl, setDocumentationUrl] = useState(getDocumentationUrl());

  // Reset success message after 3 seconds
  useEffect(() => {
    if (saveSuccess) {
      const timer = setTimeout(() => setSaveSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [saveSuccess]);

  // Initialize with current data
  useEffect(() => {
    const settings = getPageSettings();
    setWhitepaperMode(settings.whitepaper.mode);
    setWhitepaperContent({
      title: settings.whitepaper.content.title,
      subtitle: settings.whitepaper.content.subtitle,
      sections: settings.whitepaper.content.sections,
      documentUrl: settings.whitepaper.content.documentUrl
    });
    setPresaleMode(settings.presale.mode);
    setPresaleContent(settings.presale.content);
    setFooterContent(getFooterContent());
    setDocumentationUrl(getDocumentationUrl());
  }, []);

  const handleModeChange = (page: 'whitepaper' | 'presale', mode: 'production' | 'main') => {
    if (page === 'whitepaper') {
      setWhitepaperMode(mode); // Update state
      updateWhitepaperMode(mode); // Update data and emit event
    } else {
      setPresaleMode(mode); // Update state
      updatePresaleMode(mode); // Update data and emit event
    }
    setSaveSuccess(true);
  };

  const handleSave = () => {
    try {
      // Save all settings
      updatePageSettings({
        whitepaper: {
          mode: whitepaperMode,
          content: whitepaperContent
        },
        presale: {
          mode: presaleMode,
          content: presaleContent
        }
      });

      // Save footer content
      updateFooterContent(footerContent);

      // Save documentation URL
      updateDocumentationUrl(documentationUrl);

      setSaveSuccess(true);
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Error saving changes. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Content Management</h2>
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

      {/* Footer Content */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Footer Content</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-white mb-2">Copyright Text</label>
            <input
              type="text"
              value={footerContent.copyright}
              onChange={(e) => setFooterContent({ ...footerContent, copyright: e.target.value })}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="showSocialLinks"
              checked={footerContent.showSocialLinks}
              onChange={(e) => setFooterContent({ ...footerContent, showSocialLinks: e.target.checked })}
              className="w-4 h-4 bg-black/30 border border-white/10 rounded text-yellow-500"
            />
            <label htmlFor="showSocialLinks" className="text-white">Show Social Links</label>
          </div>
        </div>
      </div>

      {/* Whitepaper Settings */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Whitepaper Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleModeChange('whitepaper', 'production')}
              className={`px-4 py-2 rounded-lg font-semibold ${
                whitepaperMode === 'production'
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Production Mode
            </button>
            <button
              onClick={() => handleModeChange('whitepaper', 'main')}
              className={`px-4 py-2 rounded-lg font-semibold ${
                whitepaperMode === 'main'
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Main Mode
            </button>
          </div>

          {whitepaperMode === 'main' && (
            <div>
              <label className="block text-white mb-2">Whitepaper Document URL</label>
              <input
                type="url"
                value={whitepaperContent.documentUrl}
              onChange={(e) => {
                setWhitepaperContent({
                  ...whitepaperContent,
                  documentUrl: e.target.value
                });
              }}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                placeholder="https://..."
              />
            </div>
          )}
        </div>
      </div>

      <PageToggle
        title="Presale Page Mode"
        mode={presaleMode}
        onModeChange={(mode) => handleModeChange('presale', mode)}
      />

      {/* Presale Content */}
      {presaleMode === 'main' && (
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Presale Content</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Presale End Time</label>
              <input
                type="datetime-local"
                value={presaleContent.endTime.split('Z')[0]}
                onChange={(e) => setPresaleContent({ ...presaleContent, endTime: e.target.value + 'Z' })}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">How to Participate</label>
              <textarea
                value={presaleContent.howToParticipate}
                onChange={(e) => setPresaleContent({ ...presaleContent, howToParticipate: e.target.value })}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-white mb-2">Presale Details</label>
              <textarea
                value={presaleContent.details}
                onChange={(e) => setPresaleContent({ ...presaleContent, details: e.target.value })}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-white mb-2">LLF Token Address</label>
              <input
                type="text"
                value={presaleContent.tokenAddress}
                onChange={(e) => setPresaleContent({ ...presaleContent, tokenAddress: e.target.value })}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                placeholder="0x..."
              />
            </div>
          </div>
        </div>
      )}

      {/* Documentation URL */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Documentation Link</h3>
        <div>
          <label className="block text-white mb-2">Documentation URL</label>
          <input
            type="url"
            value={documentationUrl}
            onChange={(e) => setDocumentationUrl(e.target.value)}
            className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            placeholder="https://..."
          />
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;