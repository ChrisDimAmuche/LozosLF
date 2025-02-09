import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, ArrowLeft } from 'lucide-react';

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
import { getSocialLinks } from '../lib/data';

const CommunityIcon: React.FC<{
  name: string;
  icon: React.ReactNode;
  url?: string;
  comingSoonMessage?: string;
}> = ({ name, icon, url, comingSoonMessage }) => {
  const [showModal, setShowModal] = React.useState(false);

  if (!url) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className="flex flex-col items-center space-y-2 p-8 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all"
        >
          <div className="w-16 h-16 text-yellow-500">{icon}</div>
          <span className="text-white font-semibold">{name}</span>
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 max-w-md mx-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 text-yellow-500">{icon}</div>
                <h3 className="text-2xl font-bold text-white">{name} Coming Soon!</h3>
                <p className="text-gray-300">
                  {comingSoonMessage || `Our ${name} community is launching soon! Stay tuned for updates and exclusive content.`}
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 px-6 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                >
                  Back to Community
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center space-y-2 p-8 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all"
    >
      <div className="w-16 h-16 text-yellow-500">{icon}</div>
      <span className="text-white font-semibold">{name}</span>
    </a>
  );
};

const Community = () => {
  const socialLinks = getSocialLinks();

  const communityLinks = [
    {
      name: 'X (Twitter)',
      icon: <Twitter className="w-full h-full" />,
      url: socialLinks.find(link => link.platform === 'X')?.url,
      comingSoonMessage: "Join us on X (formerly Twitter) for the latest updates, announcements, and community discussions!"
    },
    {
      name: 'TikTok',
      icon: <TikTokIcon className="w-full h-full" />,
      url: socialLinks.find(link => link.platform === 'TikTok')?.url,
      comingSoonMessage: "Get ready for exclusive behind-the-scenes content and exciting updates on our TikTok channel!"
    },
    {
      name: 'Telegram',
      icon: <MessageCircle className="w-full h-full" />,
      url: socialLinks.find(link => link.platform === 'Telegram')?.url,
      comingSoonMessage: "Join our Telegram community for real-time updates and discussions with fellow members!"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-yellow-500">Community</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow enthusiasts, stay updated with the latest news, and be part of our growing community across different platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {communityLinks.map((link) => (
            <CommunityIcon
              key={link.name}
              name={link.name}
              icon={link.icon}
              url={link.url}
              comingSoonMessage={link.comingSoonMessage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;