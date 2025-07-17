import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout/Layout'
import Dashboard from './components/Dashboard/Dashboard'
import { useEffect } from 'react'

function App() {
  // Set meta theme-color for mobile browsers
  useEffect(() => {
    // Check if there's an existing meta tag
    let metaThemeColor = document.querySelector('meta[name="theme-color"]')
    
    // If not, create one
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta')
      metaThemeColor.setAttribute('name', 'theme-color')
      document.head.appendChild(metaThemeColor)
    }
    
    // Set the color based on user preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateThemeColor = (isDark: boolean) => {
      metaThemeColor.setAttribute('content', isDark ? '#111827' : '#f9fafb')
    }
    
    // Initial setting
    updateThemeColor(darkModeMediaQuery.matches)
    
    // Listen for changes
    darkModeMediaQuery.addEventListener('change', (e) => updateThemeColor(e.matches))
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', (e) => updateThemeColor(e.matches))
    }
  }, [])
  
  return (
    <ThemeProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  )
}

export default App
