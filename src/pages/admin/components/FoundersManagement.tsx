import React, { useState, ChangeEvent } from 'react';
import { getFounders, addFounder, updateFounder, deleteFounder } from '../../../lib/data';
import { Founder, FounderSocialLink } from '../../../lib/types';
import { Plus, Pencil, Trash2, X, Check, Link as LinkIcon, Mail } from 'lucide-react';

const FoundersManagement = () => {
  const [founders, setFounders] = useState<Founder[]>(getFounders());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newFounder, setNewFounder] = useState(false);
  const [formData, setFormData] = useState<Omit<Founder, 'id'>>({
    name: '',
    title: '',
    image: '',
    description: '',
    email: '',
    vision: '',
    showVisionButton: false,
    socialLinks: []
  });

  const handleAdd = () => {
    const founder = addFounder(formData);
    setFounders([...founders, founder]);
    setNewFounder(false);
    setFormData({
      name: '',
      title: '',
      image: '',
      description: '',
      email: '',
      vision: '',
      showVisionButton: false,
      socialLinks: []
    });
  };

  const handleUpdate = (id: string) => {
    const founder = updateFounder(id, formData);
    if (founder) {
      setFounders(founders.map(f => f.id === id ? founder : f));
      setEditingId(null);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this founder?')) {
      if (deleteFounder(id)) {
        setFounders(founders.filter(f => f.id !== id));
      }
    }
  };

  const startEdit = (founder: Founder) => {
    setEditingId(founder.id);
    setFormData({
      name: founder.name,
      title: founder.title,
      image: founder.image,
      description: founder.description,
      email: founder.email || '',
      vision: founder.vision || '',
      showVisionButton: founder.showVisionButton || false,
      socialLinks: founder.socialLinks
    });
  };

  const addSocialLink = () => {
    setFormData({
      ...formData,
      socialLinks: [
        ...formData.socialLinks,
        { platform: '', url: '', icon: <LinkIcon className="w-4 h-4" /> }
      ]
    });
  };

  const updateSocialLink = (index: number, field: keyof FounderSocialLink, value: string) => {
    const newLinks = [...formData.socialLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setFormData({ ...formData, socialLinks: newLinks });
  };

  const removeSocialLink = (index: number) => {
    setFormData({
      ...formData,
      socialLinks: formData.socialLinks.filter((_, i) => i !== index)
    });
  };

  const FounderForm = ({ onSave, onCancel }: { onSave: () => void, onCancel: () => void }) => (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Founder Name"
        value={formData.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
      />
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value })}
        className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, image: e.target.value })}
        className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, description: e.target.value })}
        className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
        rows={3}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
      />

      <textarea
        placeholder="Vision Content"
        value={formData.vision}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, vision: e.target.value })}
        className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
        rows={6}
      />

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="showVisionButton"
          checked={formData.showVisionButton}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, showVisionButton: e.target.checked })}
          className="w-4 h-4 bg-black/30 border border-white/10 rounded text-yellow-500"
        />
        <label htmlFor="showVisionButton" className="text-white">Show Vision Button</label>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-white font-semibold">Social Links</h4>
          <button
            onClick={addSocialLink}
            className="flex items-center space-x-2 px-3 py-1 border border-white/10 rounded-lg text-white hover:bg-white/10"
          >
            <Plus className="w-4 h-4" />
            <span>Add Link</span>
          </button>
        </div>
        
        {formData.socialLinks.map((link, index) => (
          <div key={index} className="flex space-x-4">
            <input
              type="text"
              placeholder="Platform"
              value={link.platform}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateSocialLink(index, 'platform', e.target.value)}
              className="flex-1 px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
            <input
              type="text"
              placeholder="URL"
              value={link.url}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateSocialLink(index, 'url', e.target.value)}
              className="flex-1 px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
            />
            <button
              onClick={() => removeSocialLink(index)}
              className="p-2 text-gray-400 hover:text-red-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="flex items-center space-x-2 px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/10"
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
        <button
          onClick={onSave}
          className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
        >
          <Check className="w-4 h-4" />
          <span>Save</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">Founders Management</h3>
        <button
          onClick={() => setNewFounder(true)}
          className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
        >
          <Plus className="w-4 h-4" />
          <span>Add Founder</span>
        </button>
      </div>

      <div className="grid gap-6">
        {newFounder && (
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <FounderForm
              onSave={handleAdd}
              onCancel={() => {
                setNewFounder(false);
                setFormData({
                  name: '',
                  title: '',
                  image: '',
                  description: '',
                  email: '',
                  vision: '',
                  showVisionButton: false,
                  socialLinks: []
                });
              }}
            />
          </div>
        )}

        {founders.map(founder => (
          <div key={founder.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            {editingId === founder.id ? (
              <FounderForm
                onSave={() => handleUpdate(founder.id)}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img src={founder.image} alt={founder.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{founder.name}</h4>
                    <p className="text-yellow-500">{founder.title}</p>
                    <p className="text-gray-300 mt-2">{founder.description}</p>
                    <p className="text-gray-300 mt-2">
                      <span className="font-semibold">Email:</span> {founder.email}
                    </p>
                    {founder.showVisionButton && (
                      <p className="text-gray-300 mt-2">
                        <span className="font-semibold">Vision Button:</span> Visible
                      </p>
                    )}
                    <div className="flex space-x-4 mt-4">
                      {founder.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-yellow-500"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEdit(founder)}
                    className="p-2 text-gray-400 hover:text-yellow-500"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(founder.id)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundersManagement;