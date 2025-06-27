import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">All Orders</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="text-white text-opacity-80">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">New Order</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="text-white text-opacity-80">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Processing</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="text-white text-opacity-80">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-teal-500 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Shipped</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="text-white text-opacity-80">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Dispute Order</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="text-white text-opacity-80">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Completed Orders</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="text-white text-opacity-80">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-gray-500 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Cancelled Order</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="text-white text-opacity-80">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-blue-400 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Message Center</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="text-white text-opacity-80">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Bronze</h3>
            <div className="text-xs font-medium text-gray-500">Current Level</div>
          </div>
          <div className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Points Earned</span>
              <span className="text-sm font-medium text-gray-700">1000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Silver</h3>
            <div className="text-xs font-medium text-gray-500">Next Level</div>
          </div>
          <div className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Points Earned</span>
              <span className="text-sm font-medium text-gray-700">2500</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Gold</h3>
            <div className="text-xs font-medium text-gray-500">Future Level</div>
          </div>
          <div className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Points to reach</span>
              <span className="text-sm font-medium text-gray-700">3000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Platinum</h3>
            <div className="text-xs font-medium text-gray-500">Ultimate Level</div>
          </div>
          <div className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Points to reach</span>
              <span className="text-sm font-medium text-gray-700">5000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-gray-700 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;