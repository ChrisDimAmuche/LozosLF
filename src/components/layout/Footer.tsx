import React from 'react';
import { getSocialLinksByPosition } from '../../lib/data';
import { Twitter, Video } from 'lucide-react';

const Footer = () => {
  const bottomSocialLinks = getSocialLinksByPosition('bottom');

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black/80 backdrop-blur-md py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            {bottomSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Lozo's LotoFair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;