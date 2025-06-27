import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  isCompact: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, isCompact }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    // Set active menu item based on current path
    const path = location.pathname;
    if (path === '/') setActiveItem('dashboard');
    else setActiveItem(path.split('/')[1]);
  }, [location]);

  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 z-20 h-full pt-16 flex lg:flex flex-shrink-0 flex-col ${isCompact ? 'w-20' : 'w-64'} transition-width duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <Link
                  to="/"
                  className={`text-base font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${activeItem === 'dashboard' ? 'bg-orange-50 text-orange-600' : 'text-gray-900'}`}
                >
                  <svg className={`w-6 h-6 flex-shrink-0 transition duration-75 ${activeItem === 'dashboard' ? 'text-orange-600' : 'text-gray-500 group-hover:text-gray-900'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className={`ml-3 ${isCompact ? 'hidden' : 'block'}`}>Dashboard</span>
                  {isCompact && activeItem === 'dashboard' && (
                    <span className="absolute right-0 w-1 h-8 bg-orange-500 rounded-l-lg"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className={`text-base font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${activeItem === 'orders' ? 'bg-orange-50 text-orange-600' : 'text-gray-900'}`}
                >
                  <svg className={`w-6 h-6 flex-shrink-0 transition duration-75 ${activeItem === 'orders' ? 'text-orange-600' : 'text-gray-500 group-hover:text-gray-900'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                  </svg>
                  <span className={`ml-3 flex-1 whitespace-nowrap ${isCompact ? 'hidden' : 'block'}`}>My Orders</span>
                  {isCompact && activeItem === 'orders' && (
                    <span className="absolute right-0 w-1 h-8 bg-orange-500 rounded-l-lg"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="http://localhost:5173/"
                  className={`text-base font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${activeItem === 'account' ? 'bg-orange-50 text-orange-600' : 'text-gray-900'}`}
                >
                  <svg className={`w-6 h-6 flex-shrink-0 transition duration-75 ${activeItem === 'account' ? 'text-orange-600' : 'text-gray-500 group-hover:text-gray-900'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                  <span className={`ml-3 flex-1 whitespace-nowrap ${isCompact ? 'hidden' : 'block'}`}>My Account</span>
                  {isCompact && activeItem === 'account' && (
                    <span className="absolute right-0 w-1 h-8 bg-orange-500 rounded-l-lg"></span>
                  )}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => toggleSubmenu('profile')}
                  className={`text-base font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group w-full ${activeItem === 'profile' ? 'bg-orange-50 text-orange-600' : 'text-gray-900'}`}
                >
                  <svg className={`w-6 h-6 flex-shrink-0 transition duration-75 ${activeItem === 'profile' ? 'text-orange-600' : 'text-gray-500 group-hover:text-gray-900'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                  <span className={`ml-3 flex-1 whitespace-nowrap ${isCompact ? 'hidden' : 'block'}`}>Profile</span>
                  {!isCompact && (
                    <svg className={`w-6 h-6 ${activeSubmenu === 'profile' ? 'transform rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  )}
                  {isCompact && activeItem === 'profile' && (
                    <span className="absolute right-0 w-1 h-8 bg-orange-500 rounded-l-lg"></span>
                  )}
                </button>
                {activeSubmenu === 'profile' && !isCompact && (
                  <ul className="py-2 space-y-2 pl-6">
                    <li>
                      <Link to="/profile" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                        <span className="ml-3">My Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/refund" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                        <span className="ml-3">Set Refund Payment</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/gst" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                        <span className="ml-3">Set GST Number</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/messages"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Message Center</span>
                  <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">New</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/addresses"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Manage Addresses</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlist"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">My Wishlist</span>
                  <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">Pro</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/promotions"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Promotions & Coupons</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Feedback</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Help</span>
                </Link>
              </li>
            </ul>
            <div className="space-y-2 pt-2">
              {!isCompact && (
                <>
                  <div className="text-gray-500 text-xs font-semibold uppercase px-3 pt-4">
                    Loyalty Program
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Bronze</span>
                      <span className="text-sm font-medium text-gray-900">1000 Points</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </>
              )}
              {isCompact && (
                <div className="px-3 py-2 mt-4">
                  <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-orange-600">B</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;