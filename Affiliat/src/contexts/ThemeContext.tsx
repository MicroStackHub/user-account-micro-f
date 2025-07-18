
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type ColorScheme = 'red' | 'blue' | 'green' | 'purple';

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
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
    
    // Apply theme to document
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Apply color scheme
    root.setAttribute('data-color-scheme', colorScheme);
    
    // Set CSS custom properties for consistent theming
    const colors = {
      red: { primary: '#ef4444', primaryHover: '#dc2626', primaryLight: '#fef2f2' },
      blue: { primary: '#3b82f6', primaryHover: '#2563eb', primaryLight: '#eff6ff' },
      green: { primary: '#10b981', primaryHover: '#059669', primaryLight: '#ecfdf5' },
      purple: { primary: '#8b5cf6', primaryHover: '#7c3aed', primaryLight: '#f5f3ff' }
    };
    
    const currentColors = colors[colorScheme];
    root.style.setProperty('--color-primary', currentColors.primary);
    root.style.setProperty('--color-primary-hover', currentColors.primaryHover);
    root.style.setProperty('--color-primary-light', currentColors.primaryLight);
    
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
      isDarkMode: theme === 'dark',
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
