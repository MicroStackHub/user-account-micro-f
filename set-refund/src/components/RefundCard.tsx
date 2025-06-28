import React from 'react';

export interface RefundDetail {
  id: string;
  accountHolderName: string;
  accountNumber?: string;
  bankName?: string;
  upiId?: string;
  mobile?: number;
  ifsc?: string;
  refundType: 'bank' | 'upi';
}

interface RefundCardProps {
  refundDetail: RefundDetail;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const RefundCard: React.FC<RefundCardProps> = ({ refundDetail, onEdit, onDelete }) => {
  const { id, accountHolderName, accountNumber, bankName, upiId, mobile, ifsc, refundType } = refundDetail;
  
  const maskAccountNumber = (accNumber: string) => {
    if (!accNumber) return '';
    
    // If account number is 4 or fewer digits, just return it as is
    if (accNumber.length <= 4) {
      return accNumber;
    }
    
    // Otherwise mask all but the last 4 digits
    const visiblePart = accNumber.slice(-4);
    const maskedPart = '•'.repeat(accNumber.length - 4);
    return maskedPart + visiblePart;
  };
  
  // Get card styling based on refund type
  const getCardStyles = () => {
    if (refundType === 'bank') {
      return {
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-indigo-600',
        bgLight: 'bg-blue-50',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        badgeBg: 'bg-blue-100',
        badgeText: 'text-blue-800',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        )
      };
    } else {
      return {
        gradientFrom: 'from-purple-500',
        gradientTo: 'to-pink-500',
        bgLight: 'bg-purple-50',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        badgeBg: 'bg-purple-100',
        badgeText: 'text-purple-800',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      };
    }
  };
  
  const styles = getCardStyles();
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative group border border-gray-100">
      {/* Card accent based on refund type */}
      <div className={`h-1.5 w-full ${refundDetail.refundType === 'bank' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{refundDetail.accountHolderName}</h3>
            <p className="text-gray-500 text-sm mt-1">{refundDetail.mobile}</p>
          </div>
          
          {/* Type badge */}
          <span 
            className={`px-3 py-1 rounded-full text-xs font-medium ${refundDetail.refundType === 'bank' 
              ? 'bg-blue-100 text-blue-700 border border-blue-200' 
              : 'bg-purple-100 text-purple-700 border border-purple-200'}`}
          >
            {refundDetail.refundType === 'bank' ? 'Bank Account' : 'UPI ID'}
          </span>
        </div>
        
        {/* Details section */}
        <div className="space-y-3 mb-4">
          {refundDetail.refundType === 'bank' ? (
            <>
              <div>
                <p className="text-gray-500 text-xs">Account Number</p>
                <p className="text-gray-700">{maskAccountNumber(refundDetail.accountNumber || '')}</p>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <p className="text-gray-500 text-xs">IFSC</p>
                  <p className="text-gray-700">{refundDetail.ifsc}</p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs">Bank</p>
                  <p className="text-gray-700">{refundDetail.bankName}</p>
                </div>
              </div>
            </>
          ) : (
            <div>
              <p className="text-gray-500 text-xs">UPI ID</p>
              <p className="text-gray-700">{refundDetail.upiId}</p>
            </div>
          )}
        </div>
        
        {/* Card actions with improved visibility */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
          {/* Remove button - always visible */}
          <button 
            onClick={() => onDelete(refundDetail.id)} 
            className="flex items-center px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove refund method"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remove
          </button>
          
          {/* Edit button */}
          <button 
            onClick={() => onEdit(refundDetail.id)} 
            className="flex items-center px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
            aria-label="Edit refund details"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundCard;