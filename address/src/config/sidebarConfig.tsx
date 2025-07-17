
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

export const Icons = {
  Address: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  Home: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  Work: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 6h-2.5l-1.1-1.1c-.4-.4-.9-.9-1.4-.9H9c-.5 0-1 .5-1.4.9L6.5 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  Other: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  Settings: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  ),
};

export const sidebarConfig: MenuItem[] = [
  {
    id: 'addresses',
    type: 'item',
    icon: Icons.Address,
    text: 'My Addresses',
    isActive: true,
    onClick: () => console.log('Navigate to Addresses')
  },
  {
    id: 'address-types',
    type: 'heading',
    text: 'Address Types'
  },
  {
    id: 'home-address',
    type: 'item',
    icon: Icons.Home,
    text: 'Home Address',
    onClick: () => console.log('Navigate to Home Address')
  },
  {
    id: 'work-address',
    type: 'item',
    icon: Icons.Work,
    text: 'Work Address',
    onClick: () => console.log('Navigate to Work Address')
  },
  {
    id: 'other-address',
    type: 'item',
    icon: Icons.Other,
    text: 'Other Addresses',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Billing Address', path: '/address/billing' },
      { text: 'Shipping Address', path: '/address/shipping' },
      { text: 'Emergency Contact', path: '/address/emergency' },
    ]
  },
  {
    id: 'settings',
    type: 'heading',
    text: 'Settings'
  },
  {
    id: 'address-settings',
    type: 'item',
    icon: Icons.Settings,
    text: 'Address Settings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Default Address', path: '/settings/default' },
      { text: 'Privacy Settings', path: '/settings/privacy' },
      { text: 'Validation Settings', path: '/settings/validation' },
    ]
  }
];
