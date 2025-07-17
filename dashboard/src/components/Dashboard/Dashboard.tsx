
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  iconBgColor: string;
  trend?: { value: string; isPositive: boolean };
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, iconBgColor, trend }) => {
  const { isDarkMode, colorScheme } = useTheme();
  
  const getBorderColor = () => {
    if (isDarkMode) {
      switch(colorScheme) {
        case 'blue': return 'border-blue-800';
        case 'green': return 'border-green-800';
        case 'purple': return 'border-purple-800';
        case 'red': return 'border-red-800';
        default: return 'border-blue-800';
      }
    } else {
      switch(colorScheme) {
        case 'blue': return 'border-blue-100';
        case 'green': return 'border-green-100';
        case 'purple': return 'border-purple-100';
        case 'red': return 'border-red-100';
        default: return 'border-blue-100';
      }
    }
  };
  
  return (
    <div className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border-l-4 ${getBorderColor()} stat-card`}>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`flex-shrink-0 rounded-full p-3 ${iconBgColor} transform transition-transform duration-300 group-hover:scale-110`}>
              {icon}
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold">{value}</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
            </div>
          </div>
          {trend && (
            <div className={`flex items-center text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <svg className={`w-4 h-4 mr-1 ${trend.isPositive ? '' : 'rotate-180'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              {trend.value}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  rating: number;
  lastModified: string;
  avatarUrl?: string;
}

const TeamCard: React.FC<{ team: TeamMemberProps }> = ({ team }) => {
  const { isDarkMode, colorScheme } = useTheme();
  
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-red-600', 'bg-yellow-600', 'bg-pink-600', 'bg-indigo-600'
    ];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };
  
  const getStarColor = () => {
    return 'text-yellow-400';
  };
  
  return (
    <tr className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} hover:${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-150`}>
      <td className="py-4 px-4">
        <div className="flex items-center">
          <div className={`h-10 w-10 rounded-full ${getAvatarColor(team.name)} flex items-center justify-center text-white font-semibold shadow-md`}>
            {team.name.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="font-medium">{team.name}</p>
            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{team.role}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < team.rating ? getStarColor() : isDarkMode ? 'text-gray-700' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </td>
      <td className="py-4 px-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
          {team.lastModified}
        </span>
      </td>
      <td className="py-4 px-4">
        <div className="flex -space-x-2">
          <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">A</div>
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">B</div>
          <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">C</div>
        </div>
      </td>
    </tr>
  );
};

const Dashboard: React.FC = () => {
  const { isDarkMode, colorScheme } = useTheme();
  
  const getAccentColor = () => {
    switch(colorScheme) {
      case 'blue': return 'text-blue-600';
      case 'green': return 'text-green-600';
      case 'purple': return 'text-purple-600';
      case 'red': return 'text-red-600';
      default: return 'text-blue-600';
    }
  };
  
  const getButtonColor = () => {
    switch(colorScheme) {
      case 'blue': return 'bg-blue-600 hover:bg-blue-700';
      case 'green': return 'bg-green-600 hover:bg-green-700';
      case 'purple': return 'bg-purple-600 hover:bg-purple-700';
      case 'red': return 'bg-red-600 hover:bg-red-700';
      default: return 'bg-blue-600 hover:bg-blue-700';
    }
  };
  
  const stats = [
    {
      icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4h4v4h-4V4zM4 4h4v4H4V4zm0 6h4v4H4v-4zm0 6h4v4H4v-4zm6-12h4v4h-4V4zm0 6h4v4h-4v-4zm0 6h4v4h-4v-4zm6 0h4v4h-4v-4zm0-6h4v4h-4v-4z"/>
      </svg>,
      value: '9.3k',
      label: 'Amazing mates',
      iconBgColor: 'bg-blue-600',
      trend: { value: '+2.7%', isPositive: true }
    },
    {
      icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
      </svg>,
      value: '24k',
      label: 'Lessons Views',
      iconBgColor: 'bg-red-600',
      trend: { value: '+3.9%', isPositive: true }
    },
    {
      icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
      </svg>,
      value: '608',
      label: 'New subscribers',
      iconBgColor: 'bg-pink-600',
      trend: { value: '+8.2%', isPositive: true }
    },
    {
      icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>,
      value: '2.5k',
      label: 'Stream audience',
      iconBgColor: 'bg-gray-600',
      trend: { value: '+0.7%', isPositive: true }
    },
  ];

  const teams = [
    {
      name: 'Quality Assurance',
      role: 'Product testing',
      rating: 5,
      lastModified: '25 Sep, 2024',
    },
    {
      name: 'Legal Team',
      role: 'Legal support',
      rating: 4,
      lastModified: '25 Aug, 2024',
    },
    {
      name: 'Product Management',
      role: 'Product development & lifecycle',
      rating: 5,
      lastModified: '21 Oct, 2024',
    },
    {
      name: 'Finance Team',
      role: 'Financial planning',
      rating: 4,
      lastModified: '20 Sep, 2024',
    },
    {
      name: 'Logistics Team',
      role: 'Supply chain',
      rating: 3,
      lastModified: '20 Aug, 2024',
    },
  ];

  const highlights = [
    { label: 'Online Store', value: '$172k', trend: '+3.9%', isPositive: true },
    { label: 'Facebook', value: '$65k', trend: '+0.7%', isPositive: true },
    { label: 'Instagram', value: '$36k', trend: '+8.2%', isPositive: true },
  ];

  return (
    <div className="dashboard-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-lg`}>Central Hub for Personal Customization</p>
      </div>
      
      {/* Date Range */}
      <div className="flex justify-end mb-8">
        <div className={`inline-flex items-center px-4 py-2 rounded-lg border shadow-sm transition-all duration-200 hover:shadow ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
          <svg className={`w-5 h-5 mr-2 ${getAccentColor()}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Jan 20, 2025 - Feb 09, 2025</span>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            iconBgColor={stat.iconBgColor}
            trend={stat.trend}
          />
        ))}
      </div>
      
      {/* Connect & Join Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className={`lg:col-span-1 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border p-6`}>
          <div className="flex items-center mb-6">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">Connect Today & Join</h2>
              <p className={`${getAccentColor()} font-medium`}>KeenThemes Network</p>
            </div>
            <div className="flex -space-x-3">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">A</div>
              <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">B</div>
              <div className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">C</div>
              <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">+</div>
            </div>
          </div>
          
          <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            Enhance your projects with premium themes and templates. Join the KeenThemes community today for top-quality designs and resources.
          </p>
          
          <button className={`w-full py-3 px-4 ${getButtonColor()} text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900`}>
            Get Started
          </button>
        </div>
        
        {/* Highlights Section */}
        <div className={`lg:col-span-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border p-6`}>
          <h2 className="text-xl font-semibold mb-6">Highlights</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">All time sales</h3>
            <div className="flex items-center">
              <span className="text-3xl font-bold">$295.7k</span>
              <span className={`ml-3 px-2.5 py-1 text-xs font-medium ${isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'} rounded-full`}>+2.7%</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-pink-500'}`}></div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.label}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{item.value}</span>
                  <span className={`text-sm ${item.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {item.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Simple chart visualization */}
          <div className={`mt-6 h-32 w-full rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} p-4`}>
            <div className="h-full w-full flex items-end space-x-2">
              <div className="flex-1 bg-blue-500 h-3/4 rounded-t"></div>
              <div className="flex-1 bg-green-500 h-2/3 rounded-t"></div>
              <div className="flex-1 bg-pink-500 h-1/2 rounded-t"></div>
              <div className="flex-1 bg-purple-500 h-4/5 rounded-t"></div>
              <div className="flex-1 bg-yellow-500 h-1/3 rounded-t"></div>
              <div className="flex-1 bg-indigo-500 h-3/5 rounded-t"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Meeting & Earnings Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Team Meeting */}
        <div className={`rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border p-6`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Team Meeting</h2>
            <div className="flex items-center text-blue-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">09:00 - 09:30</span>
            </div>
          </div>
          
          <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            Team meeting to discuss strategies, outline project milestones, define key goals, and establish clear timelines.
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Amsterdam</span>
            </div>
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">A</div>
              <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">B</div>
              <div className="h-8 w-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">C</div>
              <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold shadow-md ring-2 ring-white dark:ring-gray-900">+3</div>
            </div>
          </div>
          
          <button className={`w-full mt-6 py-3 px-4 ${getButtonColor()} text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900`}>
            Join Meeting
          </button>
        </div>
        
        {/* Earnings Chart */}
        <div className={`rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border p-6`}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">Earnings</h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className={`mr-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Referrals only</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label htmlFor="toggle" className={`toggle-label block overflow-hidden h-6 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} cursor-pointer`}></label>
                </div>
              </div>
              <select className={`${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600`}>
                <option>1 month</option>
                <option>3 months</option>
                <option>6 months</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$100K</span>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Jun</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$80K</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$60K</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>$40K</span>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Jan</span>
            </div>
          </div>
          
          {/* Chart area */}
          <div className={`h-48 w-full rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} p-4 relative`}>
            <svg className="w-full h-full" viewBox="0 0 400 160">
              <polyline
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                points="20,120 80,80 140,100 200,60 260,70 320,90 380,110"
              />
              <circle cx="20" cy="120" r="4" fill="#3B82F6" />
              <circle cx="80" cy="80" r="4" fill="#3B82F6" />
              <circle cx="140" cy="100" r="4" fill="#3B82F6" />
              <circle cx="200" cy="60" r="4" fill="#3B82F6" />
              <circle cx="260" cy="70" r="4" fill="#3B82F6" />
              <circle cx="320" cy="90" r="4" fill="#3B82F6" />
              <circle cx="380" cy="110" r="4" fill="#3B82F6" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Teams Section */}
      <div className={`rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border p-6 mb-10`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Teams</h2>
          <div className={`relative rounded-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'} px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-600`}>
            <input 
              type="text" 
              placeholder="Search teams..." 
              className={`bg-transparent border-none focus:outline-none ${isDarkMode ? 'placeholder-gray-500 text-gray-300' : 'placeholder-gray-400 text-gray-700'} w-48`} 
            />
            <svg className={`absolute right-3 top-2.5 w-4 h-4 ${getAccentColor()}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <tr className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wider">Team</th>
                <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wider">Rating</th>
                <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wider">Last Modified</th>
                <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wider">Members</th>
              </tr>
            </thead>
            <tbody className={`${isDarkMode ? 'divide-y divide-gray-800' : 'divide-y divide-gray-200'}`}>
              {teams.map((team, index) => (
                <TeamCard key={index} team={team} />
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <div className="text-sm flex items-center">
            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-2`}>Rows per page:</span>
            <select className={`ml-1 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600`}>
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>1 - 5 of 15</span>
            <div className="flex items-center space-x-1 ml-2">
              <button className={`p-1.5 rounded-md ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className={`p-1.5 rounded-md min-w-[32px] text-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-50 text-blue-600'} font-medium`}>1</button>
              <button className={`p-1.5 rounded-md min-w-[32px] text-center ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-700'} font-medium`}>2</button>
              <button className={`p-1.5 rounded-md min-w-[32px] text-center ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-700'} font-medium`}>3</button>
              <button className={`p-1.5 rounded-md ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className={`mt-10 py-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} flex flex-col sm:flex-row justify-between items-center gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <div>2025 © KeenThemes Inc.</div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'} transition-colors duration-200`}>Docs</a>
          <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'} transition-colors duration-200`}>Purchase</a>
          <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'} transition-colors duration-200`}>FAQ</a>
          <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'} transition-colors duration-200`}>Support</a>
          <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'} transition-colors duration-200`}>License</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
