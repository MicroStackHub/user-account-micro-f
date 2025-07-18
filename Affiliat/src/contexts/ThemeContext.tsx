import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type ColorScheme = 'red' | 'blue' | 'green' | 'purple';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('red');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('affiliate-theme') as Theme;
    const savedColorScheme = localStorage.getItem('affiliate-colorScheme') as ColorScheme;
    const savedSidebarState = localStorage.getItem('affiliate-sidebarCollapsed');
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    }
    if (savedSidebarState) {
      setIsSidebarCollapsed(savedSidebarState === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('affiliate-theme', theme);
    localStorage.setItem('affiliate-colorScheme', colorScheme);
    localStorage.setItem('affiliate-sidebarCollapsed', isSidebarCollapsed.toString());
    
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-color-scheme', colorScheme);
  }, [theme, colorScheme, isSidebarCollapsed]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      colorScheme, 
      setColorScheme, 
      isSidebarCollapsed, 
      toggleSidebar 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};