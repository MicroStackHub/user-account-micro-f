
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
  GST: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
  ),
  Tax: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
    </svg>
  ),
  Document: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
    </svg>
  ),
  Verify: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
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
    id: 'gst-number',
    type: 'item',
    icon: Icons.GST,
    text: 'GST Number',
    isActive: true,
    onClick: () => console.log('Navigate to GST Number')
  },
  {
    id: 'tax-management',
    type: 'heading',
    text: 'Tax Management'
  },
  {
    id: 'tax-info',
    type: 'item',
    icon: Icons.Tax,
    text: 'Tax Information',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Income Tax', path: '/tax/income' },
      { text: 'Service Tax', path: '/tax/service' },
      { text: 'VAT Details', path: '/tax/vat' },
    ]
  },
  {
    id: 'documents',
    type: 'item',
    icon: Icons.Document,
    text: 'Tax Documents',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Certificates', path: '/documents/certificates' },
      { text: 'Returns', path: '/documents/returns' },
      { text: 'Invoices', path: '/documents/invoices' },
    ]
  },
  {
    id: 'verification',
    type: 'heading',
    text: 'Verification'
  },
  {
    id: 'verify-gst',
    type: 'item',
    icon: Icons.Verify,
    text: 'Verify GST',
    badge: 'New',
    onClick: () => console.log('Navigate to GST Verification')
  },
  {
    id: 'settings',
    type: 'heading',
    text: 'Settings'
  },
  {
    id: 'gst-settings',
    type: 'item',
    icon: Icons.Settings,
    text: 'GST Settings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Auto-fill Settings', path: '/settings/autofill' },
      { text: 'Notification Settings', path: '/settings/notifications' },
      { text: 'Backup Settings', path: '/settings/backup' },
    ]
  }
];
