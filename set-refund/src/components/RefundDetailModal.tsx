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
      className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-sm max-h-[85vh] overflow-y-auto relative animate-fadeIn"
        style={{ animation: 'fadeIn 0.3s ease-out', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header - compact */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-4 text-white relative">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">{editingDetail ? 'Edit Refund Detail' : 'Add Refund Detail'}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-indigo-100 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="accountHolderName" className="text-sm font-medium text-gray-700 mb-1 block">
                Account Holder Name
              </label>
              <input
                type="text"
                id="accountHolderName"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="text-sm font-medium text-gray-700 mb-1 block">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Refund Type</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-center justify-center p-2.5 rounded-lg border-2 cursor-pointer transition-all ${formData.refundType === 'bank' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}>
                  <input type="radio" name="refundType" value="bank" checked={formData.refundType === 'bank'} onChange={handleRadioChange} className="sr-only" />
                  <span className="font-medium text-sm">Bank Account</span>
                </label>
                <label className={`flex items-center justify-center p-2.5 rounded-lg border-2 cursor-pointer transition-all ${formData.refundType === 'upi' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}>
                  <input type="radio" name="refundType" value="upi" checked={formData.refundType === 'upi'} onChange={handleRadioChange} className="sr-only" />
                  <span className="font-medium text-sm">UPI / VPA</span>
                </label>
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              {formData.refundType === 'bank' ? (
                <div className="space-y-3">
                  <div>
                    <label htmlFor="accountNumber" className="text-sm font-medium text-gray-700 mb-1 block">Account Number</label>
                    <input type="text" id="accountNumber" name="accountNumber" value={formData.accountNumber} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="ifsc" className="text-sm font-medium text-gray-700 mb-1 block">IFSC</label>
                      <input type="text" id="ifsc" name="ifsc" value={formData.ifsc} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 uppercase" required />
                    </div>
                    <div>
                      <label htmlFor="bankName" className="text-sm font-medium text-gray-700 mb-1 block">Bank</label>
                      <input type="text" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor="upiId" className="text-sm font-medium text-gray-700 mb-1 block">UPI ID</label>
                  <input type="text" id="upiId" name="upiId" value={formData.upiId} onChange={handleChange} placeholder="username@upi" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                  <p className="text-xs text-gray-500 mt-1">Example: yourname@okbank, 9876543210@upi</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3 pt-4 border-t border-gray-100">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:from-indigo-700 hover:to-blue-600 font-medium transition-all">
              {editingDetail ? 'Update Details' : 'Save Details'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RefundDetailModal;