import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  setDarkMode: (value: boolean) => void;
  setSidebarCollapsed: (value: boolean) => void;
  colorScheme: 'blue' | 'green' | 'purple' | 'red';
  setColorScheme: (scheme: 'blue' | 'green' | 'purple' | 'red') => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  isSidebarCollapsed: false,
  toggleSidebar: () => {},
  setDarkMode: () => {},
  setSidebarCollapsed: () => {},
  colorScheme: 'blue',
  setColorScheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Check for system preference for dark mode
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Initialize state from localStorage if available, otherwise use system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme === 'dark';
    }
    return prefersDarkMode;
  });

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    const savedSidebarState = localStorage.getItem('sidebarCollapsed');
    return savedSidebarState === 'true';
  });
  
  const [colorScheme, setColorScheme] = useState<'blue' | 'green' | 'purple' | 'red'>(() => {
    const savedColorScheme = localStorage.getItem('colorScheme') as 'blue' | 'green' | 'purple' | 'red' | null;
    return savedColorScheme || 'blue';
  });

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update localStorage and apply classes when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply dark mode class to the document element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Update localStorage when sidebar state changes
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', isSidebarCollapsed.toString());
  }, [isSidebarCollapsed]);
  
  // Update localStorage when color scheme changes
  useEffect(() => {
    localStorage.setItem('colorScheme', colorScheme);
    
    // Remove previous color scheme classes
    document.body.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-red');
    // Add new color scheme class
    document.body.classList.add(`theme-${colorScheme}`);
  }, [colorScheme]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };
  
  const setDarkMode = (value: boolean) => {
    setIsDarkMode(value);
  };
  
  const setSidebarCollapsed = (value: boolean) => {
    setIsSidebarCollapsed(value);
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme,
      isSidebarCollapsed,
      toggleSidebar,
      setDarkMode,
      setSidebarCollapsed,
      colorScheme,
      setColorScheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};