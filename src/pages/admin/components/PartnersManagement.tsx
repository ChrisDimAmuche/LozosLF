import React, { useState } from 'react';
import { getPartners, addPartner, updatePartner, deletePartner } from '../../../lib/data';
import { Partner } from '../../../lib/types';
import { Plus, Pencil, Trash2, X, Check } from 'lucide-react';

const PartnersManagement = () => {
  const [partners, setPartners] = useState<Partner[]>(getPartners());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newPartner, setNewPartner] = useState(false);
  const [formData, setFormData] = useState<Omit<Partner, 'id'>>({
    name: '',
    logo: '',
    description: ''
  });

  const handleAdd = () => {
    const partner = addPartner(formData);
    setPartners([...partners, partner]);
    setNewPartner(false);
    setFormData({ name: '', logo: '', description: '' });
  };

  const handleUpdate = (id: string) => {
    const partner = updatePartner(id, formData);
    if (partner) {
      setPartners(partners.map(p => p.id === id ? partner : p));
      setEditingId(null);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this partner?')) {
      if (deletePartner(id)) {
        setPartners(partners.filter(p => p.id !== id));
      }
    }
  };

  const startEdit = (partner: Partner) => {
    setEditingId(partner.id);
    setFormData({
      name: partner.name,
      logo: partner.logo,
      description: partner.description
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">Partners Management</h3>
        <button
          onClick={() => setNewPartner(true)}
          className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
        >
          <Plus className="w-4 h-4" />
          <span>Add Partner</span>
        </button>
      </div>

      <div className="grid gap-6">
        {newPartner && (
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Partner Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
              />
              <input
                type="text"
                placeholder="Logo URL"
                value={formData.logo}
                onChange={e => setFormData({ ...formData, logo: e.target.value })}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                rows={3}
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setNewPartner(false);
                    setFormData({ name: '', logo: '', description: '' });
                  }}
                  className="flex items-center space-x-2 px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleAdd}
                  className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
                >
                  <Check className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {partners.map(partner => (
          <div key={partner.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            {editingId === partner.id ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                />
                <input
                  type="text"
                  value={formData.logo}
                  onChange={e => setFormData({ ...formData, logo: e.target.value })}
                  className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                />
                <textarea
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white"
                  rows={3}
                />
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setEditingId(null)}
                    className="flex items-center space-x-2 px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/10"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                  <button
                    onClick={() => handleUpdate(partner.id)}
                    className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
                  >
                    <Check className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{partner.name}</h4>
                    <p className="text-gray-300">{partner.description}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEdit(partner)}
                    className="p-2 text-gray-400 hover:text-yellow-500"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(partner.id)}
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

export default PartnersManagement;