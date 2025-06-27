import { useState } from 'react';

interface NavbarProps {
  toggleSidebar: () => void;
  toggleCompactMode: () => void;
  isCompact: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, toggleCompactMode, isCompact }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full shadow-sm">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                aria-expanded="true"
                aria-controls="sidebar"
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              </button>
              
              <button
                onClick={toggleCompactMode}
                className="hidden lg:block mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                title={isCompact ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                {isCompact ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                )}
              </button>
              
              <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
                <span className="self-center whitespace-nowrap text-orange-500">BorisCart</span>
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex items-center">
              <span className="text-base font-normal text-gray-500 mr-5">Open source ❤️</span>
              <div className="relative mx-4">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-64 pl-10 p-2"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Notification Bell */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span className="flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 justify-center items-center text-xs text-white">1</span>
                </span>
              </button>
              
              <button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 relative hidden sm:block">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <span className="flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1">
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-orange-500 justify-center items-center text-xs text-white">3</span>
                </span>
              </button>
            </div>
            
            {/* User Menu */}
            <div className="flex items-center ml-3 relative">
              <div>
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-orange-300 border-2 border-white"
                >
                  <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Shriram+Tiwari&background=ff6b00&color=fff" alt="user photo" />
                </button>
              </div>
              {dropdownOpen && (
                <div className="absolute top-full right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-gray-200">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900">Shriram Tiwari</span>
                    <span className="block text-sm font-medium text-gray-500 truncate">shriram@example.com</span>
                  </div>
                  <ul className="py-1">
                    <li>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                        </svg>
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 3a1 1 0 11-2 0 1 1 0 012 0zm-8.707.293a1 1 0 010 1.414L3.586 9l1.707 1.707a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0zM9 11a1 1 0 100-2 1 1 0 000 2zm4.707-4.707a1 1 0 00-1.414 0l-2 2a1 1 0 000 1.414l2 2a1 1 0 101.414-1.414L11.414 9l1.293-1.293a1 1 0 000-1.414z" clipRule="evenodd"></path>
                        </svg>
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;