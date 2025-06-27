import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-close sidebar on mobile when resizing
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleCompactMode = () => {
    setIsCompact(!isCompact);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} isCompact={isCompact} />
      
      <div className={`flex flex-col flex-1 w-full transition-all duration-300 ${sidebarOpen ? (isCompact ? 'lg:ml-20' : 'lg:ml-64') : ''}`}>
        <Navbar toggleSidebar={toggleSidebar} toggleCompactMode={toggleCompactMode} isCompact={isCompact} />
        
        <main className="h-full overflow-y-auto pt-16 pb-10 px-4 lg:px-8">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && isMobile && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-10 bg-gray-900 opacity-50 lg:hidden"
        ></div>
      )}
      
      {/* Compact mode toggle button (visible only on desktop) */}
      <button 
        onClick={toggleCompactMode}
        className="fixed bottom-4 right-4 z-50 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
        title={isCompact ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isCompact ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default Layout;