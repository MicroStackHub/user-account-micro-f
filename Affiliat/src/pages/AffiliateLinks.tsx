
import React, { useState } from 'react';
import { Link, useLocation, Routes, Route } from 'react-router-dom';

const GenerateLinks: React.FC = () => {
  const [productUrl, setProductUrl] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerate = () => {
    if (productUrl) {
      setGeneratedLink(`https://affiliate.example.com/r/abc123?url=${encodeURIComponent(productUrl)}`);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
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
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white transition-all"
            />
          </div>
          <button
            onClick={handleGenerate}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium"
          >
            Generate Link
          </button>
          {generatedLink && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Generated Affiliate Link
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 px-4 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg text-gray-900 dark:text-white"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all"
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
    { id: 4, product: 'Design Template Pack', link: 'https://affiliate.example.com/r/jkl012', clicks: 98, conversions: 4, earnings: '$324.78' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">My Affiliate Links</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage and track your affiliate links</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Link</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Clicks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Conversions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Earnings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {links.map((link) => (
                <tr key={link.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{link.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <span className="truncate max-w-xs block">{link.link}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{link.clicks}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{link.conversions}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600 dark:text-green-400">{link.earnings}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="text-red-600 hover:text-red-700 font-medium">Edit</button>
                    <button className="text-gray-600 hover:text-gray-700 font-medium">Copy</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const LinkPerformance: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Clicks</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">688</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👆</span>
            </div>
          </div>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">+12.5% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">4.3%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
          </div>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">+2.1% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Earnings</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$3,126.80</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">+8.7% from last month</p>
        </div>
      </div>
    </div>
  );
};

const AffiliateLinks: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Generate Links', path: '/affiliate-links' },
    { name: 'My Links', path: '/affiliate-links/my-links' },
    { name: 'Link Performance', path: '/affiliate-links/performance' },
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
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === tab.path
                  ? 'border-red-500 text-red-600 dark:text-red-400'
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
        <Route path="/my-links" element={<MyLinks />} />
        <Route path="/performance" element={<LinkPerformance />} />
      </Routes>
    </div>
  );
};

export default AffiliateLinks;
