
import React from 'react';

export interface SubMenuItem {
  text: string;
  path: string;
  onClick?: () => void;
}

export interface MenuItem {
  id: string;
  type: 'item' | 'heading';
  icon?: React.ReactNode;
  text: string;
  isActive?: boolean;
  hasSubMenu?: boolean;
  subMenuItems?: SubMenuItem[];
  badge?: string;
  onClick?: () => void;
}

// Icon components for reusability
export const Icons = {
  Dashboard: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0 8h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0-12h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" />
    </svg>
  ),
  Sidebar: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4h2v4zm0-6h-2V7h2v4z" />
    </svg>
  ),
  User: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
  Settings: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </svg>
  ),
  Network: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  Security: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  ),
  Store: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
    </svg>
  ),
  AI: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
  ),
  Invoice: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
};

// Dynamic sidebar configuration - Easily modify this to add/remove items
export const sidebarConfig: MenuItem[] = [
  {
    id: 'dashboard',
    type: 'item',
    icon: Icons.Dashboard,
    text: 'Dashboard',
    isActive: true,
    onClick: () => console.log('Navigate to Dashboard')
  },
  {
    id: 'appearance',
    type: 'heading',
    text: 'Appearance'
  },
  {
    id: 'light-sidebar',
    type: 'item',
    icon: Icons.Sidebar,
    text: 'Light Sidebar',
    onClick: () => console.log('Switch to Light Sidebar')
  },
  {
    id: 'dark-sidebar',
    type: 'item',
    icon: Icons.Sidebar,
    text: 'Dark Sidebar',
    onClick: () => console.log('Switch to Dark Sidebar')
  },
  {
    id: 'user-management',
    type: 'heading',
    text: 'User Management'
  },
  {
    id: 'public-profile',
    type: 'item',
    icon: Icons.User,
    text: 'Public Profile',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Overview', path: '/profile/overview' },
      { text: 'Projects', path: '/profile/projects' },
      { text: 'Campaigns', path: '/profile/campaigns' },
    ]
  },
  {
    id: 'my-account',
    type: 'item',
    icon: Icons.Settings,
    text: 'My Account',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Overview', path: '/account/overview' },
      { text: 'Settings', path: '/account/settings' },
      { text: 'Security', path: '/account/security' },
    ]
  },
  {
    id: 'system',
    type: 'heading',
    text: 'System'
  },
  {
    id: 'network',
    type: 'item',
    icon: Icons.Network,
    text: 'Network',
    onClick: () => console.log('Navigate to Network')
  },
  {
    id: 'authentication',
    type: 'item',
    icon: Icons.Security,
    text: 'Authentication',
    onClick: () => console.log('Navigate to Authentication')
  },
  {
    id: 'store-services',
    type: 'heading',
    text: 'Store & Services'
  },
  {
    id: 'store-client',
    type: 'item',
    icon: Icons.Store,
    text: 'Store - Client',
    onClick: () => console.log('Navigate to Store Client')
  },
  {
    id: 'store-admin',
    type: 'item',
    icon: Icons.Store,
    text: 'Store - Admin',
    badge: 'Soon',
    onClick: () => console.log('Navigate to Store Admin')
  },
  {
    id: 'ai-tools',
    type: 'heading',
    text: 'AI Tools'
  },
  {
    id: 'ai-prompt',
    type: 'item',
    icon: Icons.AI,
    text: 'AI Prompt',
    badge: 'Soon',
    onClick: () => console.log('Navigate to AI Prompt')
  },
  {
    id: 'invoice-generator',
    type: 'item',
    icon: Icons.Invoice,
    text: 'Invoice Generator',
    badge: 'Soon',
    onClick: () => console.log('Navigate to Invoice Generator')
  }
];

// Example of how to add new items:
/*
To add a new heading and items, simply add them to the sidebarConfig array:

{
  id: 'new-heading',
  type: 'heading',
  text: 'New Section'
},
{
  id: 'new-item',
  type: 'item',
  icon: Icons.Dashboard, // or create a new icon
  text: 'New Feature',
  badge: 'New',
  hasSubMenu: true,
  subMenuItems: [
    { text: 'Sub Item 1', path: '/new/sub1' },
    { text: 'Sub Item 2', path: '/new/sub2' }
  ],
  onClick: () => console.log('Navigate to New Feature')
}
*/
