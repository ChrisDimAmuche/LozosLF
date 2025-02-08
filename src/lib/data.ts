import data from '../data/content.json';
import { ContentItem, SocialLink, Image, Partner, Founder, Tokenomics, Roadmap, PageSettings } from './types';
import { dataEvents } from './events';

// Save data to localStorage for persistence
const saveData = () => {
  localStorage.setItem('lozos_lotofair_data', JSON.stringify(data));
};

// Load data from localStorage on init
const loadData = () => {
  const savedData = localStorage.getItem('lozos_lotofair_data');
  if (savedData) {
    Object.assign(data, JSON.parse(savedData));
  }
};

// Initialize data from localStorage
loadData();

export const EVENTS = {
  TOKENOMICS_VISIBILITY_CHANGED: 'tokenomics_visibility_changed',
  ROADMAP_VISIBILITY_CHANGED: 'roadmap_visibility_changed',
  WHITEPAPER_MODE_CHANGED: 'whitepaper_mode_changed',
  PRESALE_MODE_CHANGED: 'presale_mode_changed',
  SOCIAL_LINKS_UPDATED: 'social_links_updated',
  ROADMAP_CONTENT_CHANGED: 'roadmap_content_changed',
  LOGO_UPDATED: 'logo_updated'
} as const;

export const getContent = (): ContentItem[] => {
  return data.content.map(item => ({
    ...item,
    type: item.type as 'text' | 'link' | 'html'
  }));
};

export const getSocialLinks = (): SocialLink[] => {
  return data.social_links.map(link => ({
    ...link,
    position: link.position as 'top' | 'bottom',
    comingSoonMessage: link.comingSoonMessage || `Our ${link.platform} community is launching soon! Stay tuned for updates.`
  }));
};

export const updateSocialLinks = (links: SocialLink[]): void => {
  data.social_links = links.map(link => ({
    ...link,
    url: link.url || '',
    position: link.position as 'top' | 'bottom',
    comingSoonMessage: link.comingSoonMessage || `Our ${link.platform} community is launching soon! Stay tuned for updates.`
  }));
  dataEvents.emit(EVENTS.SOCIAL_LINKS_UPDATED);
  saveData();
};



export const getImages = (): Image[] => {
  return data.images;
};

export const getContentByKey = (key: string): ContentItem | undefined => {
  const item = data.content.find(item => item.key === key);
  return item ? { ...item, type: item.type as 'text' | 'link' | 'html' } : undefined;
};

export const getSocialLinksByPosition = (position: 'top' | 'bottom'): SocialLink[] => {
  return data.social_links
    .filter(link => link.position === position)
    .map(link => ({
      ...link,
      position: link.position as 'top' | 'bottom',
      comingSoonMessage: link.comingSoonMessage || `Our ${link.platform} community is launching soon! Stay tuned for updates.`
    }));
};

export const getPartners = (): Partner[] => {
  return data.partners;
};

export const getTokenomics = (): Tokenomics => {
  return data.tokenomics;
};

export const getPageSettings = (): PageSettings => {
  return {
    whitepaper: {
      ...data.pageSettings.whitepaper,
      mode: data.pageSettings.whitepaper.mode as 'production' | 'main'
    },
    presale: {
      ...data.pageSettings.presale,
      mode: data.pageSettings.presale.mode as 'production' | 'main'
    }
  };
};

export const updatePageSettings = (settings: Partial<PageSettings>): PageSettings => {
  if (settings.whitepaper?.mode && settings.whitepaper.mode !== 'production' && settings.whitepaper.mode !== 'main') {
    throw new Error('Invalid whitepaper mode. Must be "production" or "main"');
  }
  if (settings.presale?.mode && settings.presale.mode !== 'production' && settings.presale.mode !== 'main') {
    throw new Error('Invalid presale mode. Must be "production" or "main"');
  }
  
  data.pageSettings = {
    ...data.pageSettings,
    ...settings
  };
  
  return getPageSettings();
};

export const getWhitepaperMode = (): 'production' | 'main' => {
  return data.pageSettings.whitepaper.mode as 'production' | 'main';
};

export const getPresaleMode = (): 'production' | 'main' => {
  return data.pageSettings.presale.mode as 'production' | 'main';
};

export const setWhitepaperMode = (mode: 'production' | 'main'): void => {
  data.pageSettings.whitepaper.mode = mode;
  saveData();
  dataEvents.emit(EVENTS.WHITEPAPER_MODE_CHANGED);
};

export const setPresaleMode = (mode: 'production' | 'main'): void => {
  data.pageSettings.presale.mode = mode;
  saveData();
  dataEvents.emit(EVENTS.PRESALE_MODE_CHANGED);
};

export const getTokenomicsVisibility = (): boolean => {
  return data.tokenomics.visible;
};

export const getRoadmapVisibility = (): boolean => {
  return data.roadmap.visible;
};

export const updateTokenomics = (tokenomics: Tokenomics): void => {
  data.tokenomics = tokenomics;
};

export const toggleTokenomicsVisibility = (visible: boolean): void => {
  data.tokenomics.visible = visible;
  saveData();
  dataEvents.emit(EVENTS.TOKENOMICS_VISIBILITY_CHANGED);
};

export const updateRoadmap = (roadmap: Roadmap): void => {
  data.roadmap = roadmap;
  saveData();
  dataEvents.emit(EVENTS.ROADMAP_CONTENT_CHANGED);
};

export const toggleRoadmapVisibility = (visible: boolean): void => {
  data.roadmap.visible = visible;
  saveData();
  dataEvents.emit(EVENTS.ROADMAP_VISIBILITY_CHANGED);
};

export const getRoadmap = (): Roadmap => {
  return data.roadmap;
};

export const getFounders = (): Founder[] => {
  return data.founders;
};

export const addPartner = (partner: Omit<Partner, 'id'>): Partner => {
  const newPartner = {
    id: crypto.randomUUID(),
    ...partner
  };
  data.partners.push(newPartner);
  return newPartner;
};

export const updatePartner = (id: string, partner: Partial<Partner>): Partner | null => {
  const index = data.partners.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  data.partners[index] = {
    ...data.partners[index],
    ...partner
  };
  return data.partners[index];
};

export const deletePartner = (id: string): boolean => {
  const index = data.partners.findIndex(p => p.id === id);
  if (index === -1) return false;
  
  data.partners.splice(index, 1);
  return true;
};

export const addFounder = (founder: Omit<Founder, 'id'>): Founder => {
  const newFounder = {
    id: crypto.randomUUID(),
    ...founder,
    socialLinks: founder.socialLinks.map(link => ({
      ...link,
      icon: link.icon ? (typeof link.icon === 'string' ? link.icon : link.icon.toString()) : ''
    }))
  };
  data.founders.push(newFounder);
  return newFounder;
};

export const updateFounder = (id: string, founder: Partial<Founder>): Founder | null => {
  const index = data.founders.findIndex(f => f.id === id);
  if (index === -1) return null;
  
  const updatedFounder = {
    ...data.founders[index],
    ...founder,
    socialLinks: founder.socialLinks 
      ? founder.socialLinks.map(link => ({
          ...link,
          icon: link.icon ? (typeof link.icon === 'string' ? link.icon : link.icon.toString()) : ''
        }))
      : data.founders[index].socialLinks
  };
  
  data.founders[index] = updatedFounder;
  return updatedFounder;
};

export const getFooterContent = (): { copyright: string; showSocialLinks: boolean } => {
  return {
    copyright: data.footerContent?.copyright || '© 2025 Lozo\'s LotoFair. All rights reserved.',
    showSocialLinks: data.footerContent?.showSocialLinks ?? true
  };
};

export const updateFooterContent = (content: { copyright: string; showSocialLinks: boolean }): void => {
  data.footerContent = content;
};

export const getDocumentationUrl = (): string => {
  return data.documentationUrl || '';
};

export const updateDocumentationUrl = (url: string): void => {
  data.documentationUrl = url;
};

export const getLogo = () => {
  return {
    url: data.logo?.url || '',
    alt: data.logo?.alt || 'Lozo\'s LotoFair Logo',
    recommendedSize: data.logo?.recommendedSize || '180x60 pixels'
  };
};

export const updateLogo = (logo: { url: string; alt: string; recommendedSize: string }) => {
  data.logo = logo;
  saveData();
  dataEvents.emit(EVENTS.LOGO_UPDATED);
};

export const deleteFounder = (id: string): boolean => {
  const index = data.founders.findIndex(f => f.id === id);
  if (index === -1) return false;
  
  data.founders.splice(index, 1);
  return true;
};