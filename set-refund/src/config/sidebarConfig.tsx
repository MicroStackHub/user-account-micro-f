
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
  Refund: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9C4,7.89 4.89,7 6,7H7V9H6V21H18V9H17V7H18C19.1,7 20,7.89 20,9V21C20,22.1 19.1,23 18,23Z"/>
    </svg>
  ),
  Money: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
    </svg>
  ),
  History: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3"/>
    </svg>
  ),
  Status: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
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
    id: 'refunds',
    type: 'item',
    icon: Icons.Refund,
    text: 'My Refunds',
    isActive: true,
    onClick: () => console.log('Navigate to Refunds')
  },
  {
    id: 'refund-management',
    type: 'heading',
    text: 'Refund Management'
  },
  {
    id: 'request-refund',
    type: 'item',
    icon: Icons.Money,
    text: 'Request Refund',
    onClick: () => console.log('Navigate to Request Refund')
  },
  {
    id: 'refund-history',
    type: 'item',
    icon: Icons.History,
    text: 'Refund History',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Completed', path: '/refunds/completed' },
      { text: 'Pending', path: '/refunds/pending' },
      { text: 'Rejected', path: '/refunds/rejected' },
    ]
  },
  {
    id: 'tracking',
    type: 'heading',
    text: 'Tracking'
  },
  {
    id: 'refund-status',
    type: 'item',
    icon: Icons.Status,
    text: 'Check Status',
    badge: 'Live',
    onClick: () => console.log('Navigate to Refund Status')
  },
  {
    id: 'policies',
    type: 'heading',
    text: 'Policies & Settings'
  },
  {
    id: 'refund-settings',
    type: 'item',
    icon: Icons.Settings,
    text: 'Refund Settings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Refund Policy', path: '/settings/policy' },
      { text: 'Auto-Refund', path: '/settings/auto-refund' },
      { text: 'Notification Settings', path: '/settings/notifications' },
    ]
  }
];
