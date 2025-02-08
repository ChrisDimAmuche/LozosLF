import { ReactNode } from 'react';

export interface ContentItem {
  id: string;
  key: string;
  value: string;
  type: 'text' | 'link' | 'html';
  created_at: string;
  updated_at: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url?: string;
  icon: string;
  position: 'top' | 'bottom';
  comingSoonMessage: string;
}

export interface AdminUser {
  id: string;
  email: string;
  created_at: string;
}

export interface Logo {
  url: string;
  alt: string;
  recommendedSize: string;
}

export interface Image {
  id: string;
  url: string;
  alt_text: string | null;
  section: string;
  created_at: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface FounderSocialLink {
  platform: string;
  url: string;
  icon: string | ReactNode;
}

export interface Founder {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
  email: string;
  vision: string;
  showVisionButton: boolean;
  socialLinks: FounderSocialLink[];
}

export interface PageSettings {
  whitepaper: {
    mode: 'production' | 'main';
      content: {
        title: string;
        subtitle: string;
        sections: string[];
        documentUrl: string;
      };
  };
  presale: {
    mode: 'production' | 'main';
    content: {
      endTime: string;
      howToParticipate: string;
      details: string;
      tokenAddress: string;
    };
  };
}

export interface FooterSettings {
  id: string;
  copyright: string;
  showSocialLinks: boolean;
}

export interface TokenomicsItem {
  id: string;
  title: string;
  value: string;
  description?: string;
  order: number;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  items: string[];
  order: number;
}

export interface TokenAllocation {
  id: string;
  category: string;
  percentage: number;
  tokens: number;
  vestingPeriod?: string;
}

export interface Tokenomics {
  visible: boolean;
  name: string;
  symbol: string;
  totalSupply: number;
  type: string;
  allocations: TokenAllocation[];
  stakingInfo: string;
  rewardsInfo: string;
  burnMechanism: string;
  presalePrice: string;
  launchPrice: string;
}

export interface Roadmap {
  visible: boolean;
  phases: RoadmapPhase[];
}

export interface FooterContent {
  copyright: string;
  showSocialLinks: boolean;
}

export interface Favicon {
  url: string;
  type: string;
  recommendedSize: string;
}

export interface SiteSettings {
  id: string;
  showTokenomics: boolean;
  showRoadmap: boolean;
  tokenContractAddress: string;
  documentationUrl: string;
  logo: {
    url: string;
    alt: string;
    recommendedSize: string;
  };
  favicon: Favicon;
}

// Add these to the content.json type
declare module '../data/content.json' {
  interface ContentJson {
    content: ContentItem[];
    social_links: SocialLink[];
    images: Image[];
    partners: Partner[];
    founders: Founder[];
    tokenomics: Tokenomics;
    pageSettings: PageSettings;
    roadmap: Roadmap;
    footerContent: FooterContent;
    documentationUrl: string;
    logo: Logo;
    favicon: Favicon;
  }
  export default ContentJson;
}