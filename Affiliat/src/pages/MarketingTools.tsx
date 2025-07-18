
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const BannersCreatives: React.FC = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white font-semibold">Banner {i}</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Size: 728x90</div>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Download
          </button>
        </div>
      ))}
    </div>
  </div>
);

const EmailTemplates: React.FC = () => (
  <div className="space-y-6">
    <div className="grid gap-6">
      {['Welcome Email', 'Product Launch', 'Special Offer', 'Follow-up'].map((template, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{template}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Professional email template ready to use</p>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Preview</button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Copy</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SocialMediaKit: React.FC = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {['Facebook Post', 'Twitter Post', 'Instagram Story', 'LinkedIn Post'].map((post, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{post}</h3>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
            <p className="text-gray-600 dark:text-gray-400">Sample social media content...</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Copy Content</button>
        </div>
      ))}
    </div>
  </div>
);

const MarketingTools: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Banners & Creatives', path: '/marketing/banners' },
    { name: 'Email Templates', path: '/marketing/emails' },
    { name: 'Social Media Kit', path: '/marketing/social' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Marketing Tools</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Access marketing materials and promotional content
        </p>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                location.pathname === tab.path
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<BannersCreatives />} />
        <Route path="/banners" element={<BannersCreatives />} />
        <Route path="/emails" element={<EmailTemplates />} />
        <Route path="/social" element={<SocialMediaKit />} />
      </Routes>
    </div>
  );
};

export default MarketingTools;
