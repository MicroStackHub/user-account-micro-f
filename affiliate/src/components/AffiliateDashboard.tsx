import React, { useState, useMemo, useEffect } from 'react';
import {
  CurrencyDollarIcon,
  EyeIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  LinkIcon,
  ClipboardDocumentIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  BanknotesIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';
import DataTable, { Column } from './DataTable';
import Chart from './Chart';

interface Order {
  id: string;
  customer: string;
  product: string;
  sale: number;
  commission: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'refunded';
  maturityStatus: 'matured' | 'unmatured';
  date: string;
  clickSource: string;
}

interface Click {
  id: string;
  product: string;
  timestamp: string;
  ipAddress: string;
  userAgent: string;
  converted: boolean;
  country: string;
}

interface Commission {
  id: string;
  amount: number;
  status: 'pending' | 'matured' | 'released' | 'cancelled';
  orderId: string;
  maturityDate: string;
  releaseDate?: string;
}

const AffiliateDashboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [linkToGenerate, setLinkToGenerate] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data
  const orders: Order[] = [
    {
      id: 'ORD1011',
      customer: 'Ajay M.',
      product: 'USB Cable',
      sale: 299,
      commission: 15,
      status: 'confirmed',
      maturityStatus: 'matured',
      date: '2024-01-15',
      clickSource: 'Social Media'
    },
    {
      id: 'ORD1012',
      customer: 'Divya K.',
      product: 'Desk Organizer',
      sale: 899,
      commission: 45,
      status: 'confirmed',
      maturityStatus: 'unmatured',
      date: '2024-01-18',
      clickSource: 'Website'
    },
    {
      id: 'ORD1013',
      customer: 'Imran R.',
      product: 'Portable Fan',
      sale: 1299,
      commission: 65,
      status: 'pending',
      maturityStatus: 'unmatured',
      date: '2024-01-20',
      clickSource: 'Email'
    },
    {
      id: 'ORD1014',
      customer: 'Kavita T.',
      product: 'LED Bulb',
      sale: 499,
      commission: 25,
      status: 'confirmed',
      maturityStatus: 'matured',
      date: '2024-01-22',
      clickSource: 'Social Media'
    },
    {
      id: 'ORD1015',
      customer: 'Manoj N.',
      product: 'Phone Holder',
      sale: 649,
      commission: 32,
      status: 'cancelled',
      maturityStatus: 'unmatured',
      date: '2024-01-25',
      clickSource: 'Website'
    }
  ];

  const clicks: Click[] = [
    {
      id: 'CLK001',
      product: 'USB Cable',
      timestamp: '2024-01-15 10:30:00',
      ipAddress: '192.168.1.1',
      userAgent: 'Chrome/91.0',
      converted: true,
      country: 'India'
    },
    {
      id: 'CLK002',
      product: 'Desk Organizer',
      timestamp: '2024-01-18 14:15:00',
      ipAddress: '192.168.1.2',
      userAgent: 'Firefox/88.0',
      converted: true,
      country: 'India'
    },
    {
      id: 'CLK003',
      product: 'Gaming Mouse',
      timestamp: '2024-01-19 09:45:00',
      ipAddress: '192.168.1.3',
      userAgent: 'Safari/14.0',
      converted: false,
      country: 'USA'
    }
  ];

  // Calculate metrics
  const metrics = useMemo(() => {
    const totalClicks = clicks.length;
    const totalOrders = orders.length;
    const totalSales = orders.reduce((sum, order) => sum + order.sale, 0);
    const totalCommission = orders.reduce((sum, order) => sum + order.commission, 0);
    const maturedCommission = orders
      .filter(order => order.maturityStatus === 'matured' && order.status === 'confirmed')
      .reduce((sum, order) => sum + order.commission, 0);
    const pendingCommission = orders
      .filter(order => order.maturityStatus === 'unmatured' && order.status === 'confirmed')
      .reduce((sum, order) => sum + order.commission, 0);
    const conversionRate = totalClicks > 0 ? (totalOrders / totalClicks * 100) : 0;

    return {
      totalClicks,
      totalOrders,
      totalSales,
      totalCommission,
      maturedCommission,
      pendingCommission,
      conversionRate
    };
  }, [orders, clicks]);

  // Chart data
  const performanceData = [
    { label: 'Jan 1', value: 120 },
    { label: 'Jan 8', value: 150 },
    { label: 'Jan 15', value: 180 },
    { label: 'Jan 22', value: 220 },
    { label: 'Jan 29', value: 190 }
  ];

  const trafficSourceData = [
    { label: 'Social Media', value: 45, color: '#3B82F6' },
    { label: 'Website', value: 30, color: '#10B981' },
    { label: 'Email', value: 15, color: '#F59E0B' },
    { label: 'Direct', value: 10, color: '#EF4444' }
  ];

  const conversionData = [
    { label: 'Week 1', value: 12 },
    { label: 'Week 2', value: 18 },
    { label: 'Week 3', value: 15 },
    { label: 'Week 4', value: 22 }
  ];

  // Table columns
  const orderColumns: Column[] = [
    { key: 'id', label: 'Order ID', sortable: true },
    { key: 'customer', label: 'Customer', sortable: true },
    { key: 'product', label: 'Product', sortable: true },
    { 
      key: 'sale', 
      label: 'Sale Amount', 
      sortable: true,
      render: (value) => `₹${value.toLocaleString()}`
    },
    { 
      key: 'commission', 
      label: 'Commission', 
      sortable: true,
      render: (value) => `₹${value.toLocaleString()}`
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      render: (value) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'confirmed' ? 'bg-green-100 text-green-800' :
          value === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          value === 'cancelled' ? 'bg-red-100 text-red-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {value === 'confirmed' && <CheckCircleIcon className="w-3 h-3 mr-1" />}
          {value === 'pending' && <ClockIcon className="w-3 h-3 mr-1" />}
          {value === 'cancelled' && <XCircleIcon className="w-3 h-3 mr-1" />}
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
    { 
      key: 'maturityStatus', 
      label: 'Maturity', 
      sortable: true,
      render: (value) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'matured' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
        }`}>
          {value === 'matured' ? <CheckCircleIcon className="w-3 h-3 mr-1" /> : <ClockIcon className="w-3 h-3 mr-1" />}
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
    { key: 'date', label: 'Date', sortable: true }
  ];

  const clickColumns: Column[] = [
    { key: 'id', label: 'Click ID', sortable: true },
    { key: 'product', label: 'Product', sortable: true },
    { key: 'timestamp', label: 'Timestamp', sortable: true },
    { key: 'country', label: 'Country', sortable: true },
    { 
      key: 'converted', 
      label: 'Converted', 
      sortable: true,
      render: (value) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {value ? <CheckCircleIcon className="w-3 h-3 mr-1" /> : <XCircleIcon className="w-3 h-3 mr-1" />}
          {value ? 'Yes' : 'No'}
        </span>
      )
    }
  ];

  const generateAffiliateLink = () => {
    if (!linkToGenerate.trim()) {
      alert('Please enter a product link');
      return;
    }
    
    try {
      const url = new URL(linkToGenerate);
      const affiliateParam = url.searchParams.has('ref') ? 
        linkToGenerate : 
        `${linkToGenerate}${linkToGenerate.includes('?') ? '&' : '?'}ref=affiliate123`;
      
      setGeneratedLink(affiliateParam);
    } catch {
      alert('Please enter a valid URL');
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Link copied to clipboard!');
    } catch {
      alert('Failed to copy link');
    }
  };

  // StatCard Component
const StatCard = ({ title, value, icon: Icon, trend, trendValue, color = 'blue' }: any) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 transition-all duration-300">{value}</p>
          {trend && (
            <div className={`flex items-center mt-2 text-sm ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {trend === 'up' ? (
                <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
              ) : (
                <ArrowTrendingDownIcon className="w-4 h-4 mr-1" />
              )}
              {trendValue}
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full bg-${color}-100 transform transition-transform duration-300 hover:scale-110`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Affiliate Dashboard</h1>
          <p className="text-gray-600">Track your affiliate performance and earnings</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex flex-wrap overflow-x-auto scrollbar-hide space-x-6 sm:space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: ChartBarIcon },
            { id: 'orders', label: 'Orders', icon: ShoppingCartIcon },
            { id: 'clicks', label: 'Click Analytics', icon: EyeIcon },
            { id: 'links', label: 'Link Generator', icon: LinkIcon },
            { id: 'commissions', label: 'Commissions', icon: BanknotesIcon }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Clicks"
              value={metrics.totalClicks.toLocaleString()}
              icon={EyeIcon}
              trend="up"
              trendValue="+12%"
              color="blue"
            />
            <StatCard
              title="Total Orders"
              value={metrics.totalOrders.toLocaleString()}
              icon={ShoppingCartIcon}
              trend="up"
              trendValue="+8%"
              color="green"
            />
            <StatCard
              title="Total Sales"
              value={`₹${metrics.totalSales.toLocaleString()}`}
              icon={CurrencyDollarIcon}
              trend="up"
              trendValue="+15%"
              color="purple"
            />
            <StatCard
              title="Total Commission"
              value={`₹${metrics.totalCommission.toLocaleString()}`}
              icon={BanknotesIcon}
              trend="up"
              trendValue="+10%"
              color="yellow"
            />
          </div>

          {/* Commission Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Matured Commission"
              value={`₹${metrics.maturedCommission.toLocaleString()}`}
              icon={CheckCircleIcon}
              color="green"
            />
            <StatCard
              title="Pending Commission"
              value={`₹${metrics.pendingCommission.toLocaleString()}`}
              icon={ClockIcon}
              color="orange"
            />
            <StatCard
              title="Conversion Rate"
              value={`${metrics.conversionRate.toFixed(1)}%`}
              icon={ArrowTrendingUpIcon}
              trend="up"
              trendValue="+2.1%"
              color="blue"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Chart
              type="area"
              data={performanceData}
              title="Performance Trend"
              height={300}
              showTooltip={true}
              theme="light"
            />
            <Chart
              type="donut"
              data={trafficSourceData}
              title="Traffic Sources"
              height={300}
              showTooltip={true}
              theme="light"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Chart
              type="bar"
              data={conversionData}
              title="Weekly Conversions"
              height={300}
              showTooltip={true}
              theme="light"
            />
            <Chart
              type="line"
              data={performanceData}
              title="Click Trends"
              height={300}
              showTooltip={true}
              theme="light"
            />
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Order History</h2>
                <p className="text-sm text-gray-600">Track all your affiliate orders and their status</p>
              </div>
              <div className="flex items-center space-x-2 mt-2 sm:mt-0 px-3 py-1.5 bg-blue-50 rounded-lg">
                <CalendarDaysIcon className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-blue-600 font-medium">Last updated: Just now</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <DataTable
                data={orders}
                columns={orderColumns}
                searchable={true}
                pageable={true}
                pageSize={10}
                className="shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Clicks Tab */}
      {activeTab === 'clicks' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Click Analytics</h2>
                <p className="text-sm text-gray-600">Monitor your affiliate link performance</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                <div className="px-3 py-1.5 bg-blue-50 rounded-lg flex items-center">
                  <EyeIcon className="w-4 h-4 text-blue-500 mr-1.5" />
                  <span className="text-sm text-blue-600 font-medium">Total: {clicks.length}</span>
                </div>
                <div className="px-3 py-1.5 bg-green-50 rounded-lg flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1.5" />
                  <span className="text-sm text-green-600 font-medium">Converted: {clicks.filter(c => c.converted).length}</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <DataTable
                data={clicks}
                columns={clickColumns}
                searchable={true}
                pageable={true}
                pageSize={10}
                className="shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Links Tab */}
      {activeTab === 'links' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <LinkIcon className="h-5 w-5 mr-2 text-blue-500" />
              Generate Affiliate Link
            </h2>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="productLink" className="text-sm font-medium text-gray-700">
                  Product Link
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="productLink"
                    type="text"
                    value={linkToGenerate}
                    onChange={(e) => setLinkToGenerate(e.target.value)}
                    placeholder="https://example.com/product"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                  <button
                    onClick={generateAffiliateLink}
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg sm:rounded-l-none hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 flex items-center justify-center"
                  >
                    <LinkIcon className="h-4 w-4 mr-1.5" />
                    Generate Link
                  </button>
                </div>
              </div>

              {generatedLink && (
                <div className="flex flex-col space-y-2 animate-fadeIn">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <CheckCircleIcon className="h-4 w-4 mr-1.5 text-green-500" />
                    Your Affiliate Link
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={generatedLink}
                      readOnly
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg sm:rounded-r-none focus:outline-none transition-all duration-200"
                    />
                    <button
                      onClick={() => copyToClipboard(generatedLink)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg sm:rounded-l-none hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 flex items-center justify-center"
                    >
                      <ClipboardDocumentIcon className="h-4 w-4 mr-1.5" />
                      Copy to Clipboard
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-2 text-blue-500" />
              Tips for Better Conversions
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                'Share your affiliate links on social media platforms where your audience is most active',
                'Create helpful content around the products youre promoting',
                'Be transparent about affiliate links to build trust with your audience',
                'Focus on products that align with your audiences interests',
                'Track which platforms and content types drive the most conversions' 
              ].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">
                    <CheckCircleIcon />
                  </div>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Commissions Tab */}
      {activeTab === 'commissions' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Available for Release</h3>
                <div className="p-2 bg-green-50 rounded-full">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-1">₹{metrics.maturedCommission.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mb-4">Ready to withdraw</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="w-full px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 flex items-center justify-center">
                  <BanknotesIcon className="h-4 w-4 mr-1.5" />
                  Request Payout
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Pending Maturity</h3>
                <div className="p-2 bg-yellow-50 rounded-full">
                  <ClockIcon className="h-5 w-5 text-yellow-500" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-1">₹{metrics.pendingCommission.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mb-4">In refund period</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600 flex items-center">
                  <ExclamationCircleIcon className="h-4 w-4 mr-1.5 text-yellow-500" />
                  <span>Will be available after the refund period</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Total Earned</h3>
                <div className="p-2 bg-purple-50 rounded-full">
                  <BanknotesIcon className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-1">₹{metrics.totalCommission.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mb-4">Lifetime earnings</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600 flex items-center">
                  <ArrowTrendingUpIcon className="h-4 w-4 mr-1.5 text-green-500" />
                  <span>Lifetime earnings from all orders</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-800">Commission by Category</h3>
              <div className="px-3 py-1.5 bg-blue-50 rounded-lg text-sm text-blue-600 font-medium">
                Last 30 Days
              </div>
            </div>
            <div className="h-64 transition-all duration-300 transform hover:scale-[1.01]">
              <Chart
                type="bar"
                data={[
                  { label: 'Electronics', value: 4500 },
                  { label: 'Fashion', value: 2800 },
                  { label: 'Home', value: 1900 },
                  { label: 'Beauty', value: 1200 },
                  { label: 'Books', value: 800 }
                ]}
                height={250}
                showTooltip={true}
                theme="light"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateDashboard;