import React, { useState, useEffect } from 'react';
import AddressCard from './AddressCard';
import AddressFormModal from './AddressFormModal';

export interface Address {
  id: string;
  name: string;
  mobile: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
  addressType: 'home' | 'work' | 'other';
}

const AddressPage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Load saved addresses from localStorage on component mount
  useEffect(() => {
    const savedAddresses = localStorage.getItem('addresses');
    if (savedAddresses) {
      try {
        setAddresses(JSON.parse(savedAddresses));
      } catch (error) {
        console.error('Error parsing saved addresses:', error);
      }
    }
  }, []);

  // Save addresses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('addresses', JSON.stringify(addresses));
  }, [addresses]);

  const openModal = () => {
    setEditingId(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleSaveAddress = (address: Omit<Address, 'id' | 'isDefault'>, makeDefault: boolean) => {
    if (editingId) {
      // Update existing address
      setAddresses(prev => {
        const updated = prev.map(item => 
          item.id === editingId ? { ...item, ...address, isDefault: makeDefault } : item
        );
        
        // If this address is being set as default, update other addresses
        if (makeDefault) {
          return updated.map(item => 
            item.id !== editingId ? { ...item, isDefault: false } : item
          );
        }
        
        return updated;
      });
    } else {
      // Add new address
      const newAddress: Address = {
        ...address as any, // Type assertion to handle the missing properties
        id: `address-${Date.now()}`,
        isDefault: makeDefault || addresses.length === 0 // Make default if it's the first address
      };
      
      setAddresses(prev => {
        // If this is set as default, update other addresses
        if (newAddress.isDefault) {
          return [...prev.map(item => ({ ...item, isDefault: false })), newAddress];
        }
        return [...prev, newAddress];
      });
    }
    
    closeModal();
  };

  const handleEditAddress = (id: string) => {
    setEditingId(id);
    setIsModalOpen(true);
  };

  const handleDeleteAddress = (id: string) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setAddresses(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleSetDefault = (id: string) => {
    setAddresses(prev => 
      prev.map(item => ({
        ...item,
        isDefault: item.id === id
      }))
    );
  };

  const getEditingAddress = () => {
    if (!editingId) return null;
    return addresses.find(address => address.id === editingId) || null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with gradient accent */}
        <div className="mb-8 relative">
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4"></div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Manage Addresses</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">Add and manage your delivery addresses for faster checkout</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          {/* Main content area */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Add new address card */}
              <button 
                onClick={openModal}
                className="h-full min-h-[280px] group relative bg-gradient-to-br from-white to-gray-50 rounded-xl flex flex-col items-center justify-center p-6 transition-all border-2 border-dashed border-indigo-200 hover:border-indigo-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-gray-800 font-semibold text-lg">Add New Address</p>
                  <p className="text-gray-500 mt-1">Save a new delivery location</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-indigo-50 opacity-30"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-indigo-50 opacity-30"></div>
              </button>
              
              {/* Empty state message when no addresses exist */}
              {addresses.length === 0 && (
                <div className="sm:col-span-2 lg:col-span-2 flex-1 min-w-[300px] flex items-center justify-center p-8 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-500">No addresses added yet</p>
                    <p className="text-gray-400 text-sm mt-1">Click the + button to add your first address</p>
                  </div>
                </div>
              )}
              
              {/* Existing address cards */}
              {addresses.map(address => (
                <AddressCard
                  key={address.id}
                  address={address}
                  onEdit={handleEditAddress}
                  onDelete={handleDeleteAddress}
                  onSetDefault={handleSetDefault}
                />
              ))}
            </div>
            
            {/* Important notice */}
            <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <span className="font-medium">Note:</span> Your default address will be automatically selected during checkout. You can change your default address at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <AddressFormModal 
          onClose={closeModal} 
          onSave={handleSaveAddress}
          editingAddress={getEditingAddress()}
        />
      )}
    </div>
  );
};

export default AddressPage;