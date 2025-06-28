import React, { useState, useEffect } from 'react';
import { RefundDetail } from './RefundCard';

interface RefundDetailModalProps {
  onClose: () => void;
  onSave: (detail: Omit<RefundDetail, 'id'>) => void;
  editingDetail: RefundDetail | null;
}

interface RefundFormData {
  accountHolderName: string;
  mobile: string;
  refundType: 'bank' | 'upi';
  accountNumber: string;
  ifsc: string;
  bankName: string;
  upiId?: string;
}

const RefundDetailModal: React.FC<RefundDetailModalProps> = ({ 
  onClose, 
  onSave, 
  editingDetail
}) => {
  const [formData, setFormData] = useState<RefundFormData>({
    accountHolderName: editingDetail?.accountHolderName || 'Shrishti Namdeo',
    mobile: '8866944822', // Pre-filled for demo
    refundType: editingDetail?.refundType || 'bank',
    accountNumber: editingDetail?.accountNumber || '',
    ifsc: editingDetail?.ifsc || '',
    bankName: editingDetail?.bankName || '',
    upiId: editingDetail?.upiId || ''
  });

  // Update form when editing detail changes
  useEffect(() => {
    if (editingDetail) {
      setFormData({
        accountHolderName: editingDetail.accountHolderName,
        mobile: '8866944822', // Assuming mobile is not stored in RefundDetail
        refundType: editingDetail.refundType,
        accountNumber: editingDetail.accountNumber || '',
        ifsc: editingDetail.ifsc || '',
        bankName: editingDetail.bankName || '',
        upiId: editingDetail.upiId || ''
      });
    }
  }, [editingDetail]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      refundType: e.target.value as 'bank' | 'upi'
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare data for saving
    const detailToSave: Omit<RefundDetail, 'id'> = {
      accountHolderName: formData.accountHolderName,
      refundType: formData.refundType,
      ...(formData.refundType === 'bank' ? {
        accountNumber: formData.accountNumber,
        bankName: formData.bankName
      } : {
        upiId: formData.upiId
      })
    };
    
    onSave(detailToSave);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-sm relative overflow-hidden animate-fadeIn"
        style={{ animation: 'fadeIn 0.3s ease-out', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header with gradient background */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white relative">
          <h2 className="text-xl font-bold">{editingDetail ? 'Edit Refund Detail' : 'Add Refund Detail'}</h2>
          <p className="text-indigo-100 text-sm mt-1 opacity-90">
            {editingDetail ? 'Update your refund information' : 'Enter your refund details for faster processing'}
          </p>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-indigo-100 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-indigo-400 opacity-20"></div>
          <div className="absolute top-4 -left-6 w-16 h-16 rounded-full bg-blue-300 opacity-20"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-5">
            {/* Account holder name field */}
            <div className="flex flex-col">
              <label htmlFor="accountHolderName" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account Holder Name
              </label>
              <input
                type="text"
                id="accountHolderName"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 transition-colors"
                required
              />
            </div>
            
            {/* Mobile field */}
            <div className="flex flex-col">
              <label htmlFor="mobile" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 transition-colors"
                required
              />
            </div>
            
            {/* Refund type selector with improved styling */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Refund Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label 
                  className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all ${formData.refundType === 'bank' 
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}
                >
                  <input
                    type="radio"
                    name="refundType"
                    value="bank"
                    checked={formData.refundType === 'bank'}
                    onChange={handleRadioChange}
                    className="sr-only"
                  />
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="font-medium">Bank Account</span>
                </label>
                <label 
                  className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all ${formData.refundType === 'upi' 
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}
                >
                  <input
                    type="radio"
                    name="refundType"
                    value="upi"
                    checked={formData.refundType === 'upi'}
                    onChange={handleRadioChange}
                    className="sr-only"
                  />
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">UPI / VPA</span>
                </label>
              </div>
            </div>
            
            {/* Conditional fields based on refund type */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                {formData.refundType === 'bank' ? 'Bank Account Details' : 'UPI Details'}
              </h3>
              
              {formData.refundType === 'bank' ? (
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="accountNumber" className="text-sm font-medium text-gray-700 mb-1">
                      Account Number
                    </label>
                    <input
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      placeholder="Enter your account number"
                      className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="ifsc" className="text-sm font-medium text-gray-700 mb-1">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      id="ifsc"
                      name="ifsc"
                      value={formData.ifsc}
                      onChange={handleChange}
                      placeholder="Enter IFSC code"
                      className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors uppercase"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="bankName" className="text-sm font-medium text-gray-700 mb-1">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      placeholder="Enter bank name"
                      className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <label htmlFor="upiId" className="text-sm font-medium text-gray-700 mb-1">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    id="upiId"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleChange}
                    placeholder="username@upi"
                    className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Example: yourname@okbank, 9876543210@upi</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Action buttons with improved styling */}
          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-sm hover:from-indigo-700 hover:to-blue-600 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {editingDetail ? 'Update Details' : 'Save Details'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RefundDetailModal;