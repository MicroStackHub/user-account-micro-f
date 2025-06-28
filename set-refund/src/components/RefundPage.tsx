import React, { useState, useEffect } from 'react';
import RefundDetailModal from './RefundDetailModal';
import RefundCard, { RefundDetail } from './RefundCard';

const RefundPage: React.FC = () => {
  const [refundDetails, setRefundDetails] = useState<RefundDetail[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Load saved refund details from localStorage on component mount
  useEffect(() => {
    const savedDetails = localStorage.getItem('refundDetails');
    if (savedDetails) {
      try {
        setRefundDetails(JSON.parse(savedDetails));
      } catch (error) {
        console.error('Error parsing saved refund details:', error);
      }
    }
  }, []);

  // Save refund details to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('refundDetails', JSON.stringify(refundDetails));
  }, [refundDetails]);

  const openModal = () => {
    setEditingId(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleSaveRefundDetail = (detail: Omit<RefundDetail, 'id'>) => {
    if (editingId) {
      // Update existing refund detail
      setRefundDetails(prev => 
        prev.map(item => 
          item.id === editingId ? { ...detail, id: editingId } : item
        )
      );
    } else {
      // Add new refund detail
      const newDetail: RefundDetail = {
        ...detail,
        id: `refund-${Date.now()}`
      };
      setRefundDetails(prev => [...prev, newDetail]);
    }
    closeModal();
  };

  const handleEditRefundDetail = (id: string) => {
    setEditingId(id);
    setIsModalOpen(true);
  };

  const handleDeleteRefundDetail = (id: string) => {
    if (window.confirm('Are you sure you want to delete this refund detail?')) {
      setRefundDetails(prev => prev.filter(item => item.id !== id));
    }
  };

  const getEditingDetail = () => {
    if (!editingId) return null;
    return refundDetails.find(detail => detail.id === editingId) || null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with gradient accent */}
        <div className="mb-8 relative">
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4"></div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Set Refund Payment</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">Manage your refund preferences and payment methods for faster processing</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          {/* Main content area */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap gap-8 justify-start">
              {/* Add new refund card with improved design */}
              <button 
                onClick={openModal}
                className="w-72 h-72 group relative bg-gradient-to-br from-white to-gray-50 rounded-xl flex flex-col items-center justify-center p-6 transition-all border-2 border-dashed border-indigo-200 hover:border-indigo-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-gray-800 font-semibold text-lg">Add Refund Method</p>
                  <p className="text-gray-500 mt-1">Set up a new refund payment option</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-indigo-50 opacity-30"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-indigo-50 opacity-30"></div>
              </button>
              
              {/* Existing refund cards */}
              {refundDetails.map(detail => (
                <RefundCard
                  key={detail.id}
                  refundDetail={detail}
                  onEdit={handleEditRefundDetail}
                  onDelete={handleDeleteRefundDetail}
                />
              ))}
              
              {/* Empty state message when no cards exist */}
              {refundDetails.length === 0 && (
                <div className="flex-1 min-w-[300px] flex items-center justify-center p-8 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-gray-500">No refund methods added yet</p>
                    <p className="text-gray-400 text-sm mt-1">Click the + button to add your first method</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Important notice with improved design */}
            <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <span className="font-medium">Important:</span> Dear Shrishti Namdeo, refunds can only be processed to bank accounts associated with BonziCart. Third-party bank accounts are not permitted for security reasons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <RefundDetailModal 
          onClose={closeModal} 
          onSave={handleSaveRefundDetail}
          editingDetail={getEditingDetail()}
        />
      )}
    </div>
  );
};

export default RefundPage;