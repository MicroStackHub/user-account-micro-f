
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const GenerateLinks: React.FC = () => {
  const [productUrl, setProductUrl] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerate = () => {
    if (productUrl) {
      setGeneratedLink(`https://affiliate.example.com/r/abc123?url=${encodeURIComponent(productUrl)}`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Generate New Link</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Product URL
            </label>
            <input
              type="url"
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              placeholder="https://example.com/product"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            onClick={handleGenerate}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Generate Link
          </button>
          {generatedLink && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Generated Affiliate Link
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md shadow-sm bg-gray-50 dark:bg-gray-600 dark:text-white"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(generatedLink)}
                  className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MyLinks: React.FC = () => {
  const links = [
    { id: 1, product: 'Premium Software License', link: 'https://affiliate.example.com/r/abc123', clicks: 245, conversions: 12, earnings: '$1,234.56' },
    { id: 2, product: 'Online Course Bundle', link: 'https://affiliate.example.com/r/def456', clicks: 189, conversions: 8, earnings: '$892.34' },
    { id: 3, product: 'Digital Marketing Tool', link: 'https://affiliate.example.com/r/ghi789', clicks: 156, conversions: 6, earnings: '$675.12' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">My Affiliate Links</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Link</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Clicks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Conversions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Earnings</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {links.map((link) => (
                <tr key={link.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{link.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <span className="truncate max-w-xs">{link.link}</span>
                      <button
                        onClick={() => navigator.clipboard.writeText(link.link)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        Copy
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{link.clicks}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{link.conversions}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{link.earnings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const LinkPerformance: React.FC = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Clicks</h3>
        <div className="text-3xl font-bold text-blue-600">1,247</div>
        <div className="text-sm text-blue-600 mt-1">+15.3% this month</div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Conversion Rate</h3>
        <div className="text-3xl font-bold text-green-600">24.5%</div>
        <div className="text-sm text-green-600 mt-1">+2.1% this month</div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Revenue per Click</h3>
        <div className="text-3xl font-bold text-purple-600">$2.34</div>
        <div className="text-sm text-purple-600 mt-1">+8.7% this month</div>
      </div>
    </div>
  </div>
);

const AffiliateLinks: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Generate Links', path: '/links/generate' },
    { name: 'My Links', path: '/links/my-links' },
    { name: 'Link Performance', path: '/links/performance' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Affiliate Links</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Generate and manage your affiliate links
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
        <Route path="/" element={<GenerateLinks />} />
        <Route path="/generate" element={<GenerateLinks />} />
        <Route path="/my-links" element={<MyLinks />} />
        <Route path="/performance" element={<LinkPerformance />} />
      </Routes>
    </div>
  );
};

export default AffiliateLinks;
