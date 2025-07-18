
import React, { useState } from 'react';
import { Link, useLocation, Routes, Route } from 'react-router-dom';

const BannersCreatives: React.FC = () => {
  const banners = [
    {
      id: 1,
      name: 'Premium Plan Banner',
      size: '728x90',
      format: 'JPG',
      downloads: 145,
      preview: 'https://via.placeholder.com/728x90/ef4444/ffffff?text=Premium+Plan+Banner'
    },
    {
      id: 2,
      name: 'Square Social Media',
      size: '500x500',
      format: 'PNG',
      downloads: 89,
      preview: 'https://via.placeholder.com/500x500/ef4444/ffffff?text=Social+Media+Square'
    },
    {
      id: 3,
      name: 'Leaderboard Banner',
      size: '970x250',
      format: 'JPG',
      downloads: 67,
      preview: 'https://via.placeholder.com/970x250/ef4444/ffffff?text=Leaderboard+Banner'
    },
    {
      id: 4,
      name: 'Mobile Banner',
      size: '320x100',
      format: 'PNG',
      downloads: 156,
      preview: 'https://via.placeholder.com/320x100/ef4444/ffffff?text=Mobile+Banner'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Available Banners & Creatives</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Download high-quality banners and creative assets to promote our products on your website or social media.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {banners.map((banner) => (
            <div key={banner.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={banner.preview}
                  alt={banner.name}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">{banner.name}</h4>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{banner.size} • {banner.format}</span>
                  <span>{banner.downloads} downloads</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                    Download
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Custom Banner Request</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Need a custom banner size or design? Request one from our marketing team.
        </p>
        <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
          Request Custom Banner
        </button>
      </div>
    </div>
  );
};

const EmailTemplates: React.FC = () => {
  const templates = [
    {
      id: 1,
      name: 'Welcome Email',
      subject: 'Welcome to [Product Name] - Get Started Today!',
      openRate: '24.5%',
      clickRate: '3.2%',
      category: 'Onboarding'
    },
    {
      id: 2,
      name: 'Product Launch',
      subject: 'Introducing Our New Premium Features',
      openRate: '31.8%',
      clickRate: '5.7%',
      category: 'Announcement'
    },
    {
      id: 3,
      name: 'Limited Time Offer',
      subject: '50% Off - Limited Time Only!',
      openRate: '42.1%',
      clickRate: '8.9%',
      category: 'Promotion'
    },
    {
      id: 4,
      name: 'Feature Highlight',
      subject: 'Discover What Makes Us Different',
      openRate: '28.3%',
      clickRate: '4.1%',
      category: 'Educational'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Email Templates</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Use these proven email templates to promote our products to your audience.
        </p>
        
        <div className="space-y-4">
          {templates.map((template) => (
            <div key={template.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{template.name}</h4>
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Subject: {template.subject}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>Open Rate: <span className="font-medium text-green-600 dark:text-green-400">{template.openRate}</span></span>
                    <span>Click Rate: <span className="font-medium text-blue-600 dark:text-blue-400">{template.clickRate}</span></span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300">
                    Preview
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                    Copy Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Email Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Subject Line Tips</h4>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>• Keep it under 50 characters</li>
              <li>• Create urgency with limited-time offers</li>
              <li>• Personalize when possible</li>
              <li>• A/B test different versions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Content Guidelines</h4>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>• Focus on benefits, not features</li>
              <li>• Include clear call-to-action buttons</li>
              <li>• Use social proof and testimonials</li>
              <li>• Maintain consistent branding</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialMediaKit: React.FC = () => {
  const socialAssets = [
    {
      id: 1,
      platform: 'Facebook',
      type: 'Post',
      size: '1200x630',
      count: 8,
      icon: '📘'
    },
    {
      id: 2,
      platform: 'Instagram',
      type: 'Story',
      size: '1080x1920',
      count: 12,
      icon: '📸'
    },
    {
      id: 3,
      platform: 'Twitter',
      type: 'Header',
      size: '1500x500',
      count: 5,
      icon: '🐦'
    },
    {
      id: 4,
      platform: 'LinkedIn',
      type: 'Post',
      size: '1200x627',
      count: 6,
      icon: '💼'
    },
  ];

  const samplePosts = [
    "🚀 Just discovered an amazing tool that's revolutionizing how I work! Check it out: [Your Affiliate Link]",
    "💡 Pro tip: The secret to productivity isn't working harder, it's working smarter. This tool changed everything for me: [Your Affiliate Link]",
    "🎯 Looking for a solution that actually delivers results? I've been using this for months and it's incredible: [Your Affiliate Link]",
    "⭐ Can't believe I waited so long to try this! If you're serious about improving your workflow, you need to see this: [Your Affiliate Link]",
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Media Assets</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Download ready-to-use social media graphics for different platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialAssets.map((asset) => (
            <div key={asset.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{asset.icon}</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{asset.platform}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{asset.type} • {asset.size}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{asset.count} assets</p>
              <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                Download Pack
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sample Social Media Posts</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Copy and customize these proven social media posts for your audience.
        </p>
        
        <div className="space-y-4">
          {samplePosts.map((post, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p className="text-gray-900 dark:text-white mb-3">{post}</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                  Copy Post
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300">
                  Customize
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hashtag Suggestions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">General Tags</h4>
            <div className="flex flex-wrap gap-2">
              {['#productivity', '#business', '#entrepreneur', '#success', '#growth', '#innovation'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Industry Specific</h4>
            <div className="flex flex-wrap gap-2">
              {['#saas', '#software', '#tech', '#startup', '#digital', '#automation'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketingTools: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Banners & Creatives', path: '/marketing-tools' },
    { name: 'Email Templates', path: '/marketing-tools/emails' },
    { name: 'Social Media Kit', path: '/marketing-tools/social' },
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
        <Route path="/" element={<BannersCreatives />} />
        <Route path="/emails" element={<EmailTemplates />} />
        <Route path="/social" element={<SocialMediaKit />} />
      </Routes>
    </div>
  );
};

export default MarketingTools;
