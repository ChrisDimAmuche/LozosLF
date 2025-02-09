import React from 'react';
import { getSocialLinksByPosition } from '../../lib/data';
import { Video } from 'lucide-react';

const XLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const bottomSocialLinks = getSocialLinksByPosition('bottom');

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'twitter':
        return <XLogo />;
      case 'video':
        return <Video className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black/80 backdrop-blur-md py-6 sm:py-8 mt-auto border-t border-white/5">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          <div className="flex space-x-3 sm:space-x-4">
            {bottomSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors p-1"
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Lozo's LotoFair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;