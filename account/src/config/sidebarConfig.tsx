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
  Dashboard: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  ),
  Profile: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  ),
  Orders: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5c.55 0 1 .45 1 1s-.45 1-1 1h-1v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6H2c-.55 0-1-.45-1-1s.45-1 1-1h5zM9 3v1h6V3H9zm8 3H7v13h10V6z"/>
    </svg>
  ),
  Wishlist: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
  Address: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  Messages: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>
  ),
  Coupons: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
    </svg>
  ),
  Settings: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  ),
  Security: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
    </svg>
  ),
  Payments: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
    </svg>
  ),
  Notifications: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  ),
  Analytics: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
    </svg>
  ),
  Support: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
    </svg>
  )
};

export const sidebarConfig: MenuItem[] = [
  {
    id: 'overview',
    type: 'item',
    icon: Icons.Dashboard,
    text: 'Account Overview',
    isActive: true,
    onClick: () => console.log('Navigate to Overview')
  },
  {
    id: 'profile-management',
    type: 'heading',
    text: 'Profile Management'
  },
  {
    id: 'profile',
    type: 'item',
    icon: Icons.Profile,
    text: 'Personal Profile',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Basic Information', path: '/profile/basic' },
      { text: 'Contact Details', path: '/profile/contact' },
      { text: 'Profile Picture', path: '/profile/picture' },
      { text: 'Bio & Preferences', path: '/profile/bio' }
    ]
  },
  {
    id: 'orders-purchases',
    type: 'heading',
    text: 'Orders & Purchases'
  },
  {
    id: 'orders',
    type: 'item',
    icon: Icons.Orders,
    text: 'My Orders',
    hasSubMenu: true,
    badge: '3',
    subMenuItems: [
      { text: 'Active Orders', path: '/orders/active' },
      { text: 'Order History', path: '/orders/history' },
      { text: 'Returns & Refunds', path: '/orders/returns' },
      { text: 'Track Orders', path: '/orders/track' }
    ]
  },
  {
    id: 'wishlist',
    type: 'item',
    icon: Icons.Wishlist,
    text: 'My Wishlist',
    badge: '12',
    onClick: () => console.log('Navigate to Wishlist')
  },
  {
    id: 'addresses-payment',
    type: 'heading',
    text: 'Addresses & Payment'
  },
  {
    id: 'addresses',
    type: 'item',
    icon: Icons.Address,
    text: 'Manage Addresses',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Home Address', path: '/address/home' },
      { text: 'Work Address', path: '/address/work' },
      { text: 'Other Addresses', path: '/address/other' },
      { text: 'Default Settings', path: '/address/default' }
    ]
  },
  {
    id: 'payments',
    type: 'item',
    icon: Icons.Payments,
    text: 'Payment Methods',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Credit Cards', path: '/payment/cards' },
      { text: 'Bank Accounts', path: '/payment/bank' },
      { text: 'Digital Wallets', path: '/payment/wallets' },
      { text: 'Payment History', path: '/payment/history' }
    ]
  },
  {
    id: 'communication',
    type: 'heading',
    text: 'Communication'
  },
  {
    id: 'messages',
    type: 'item',
    icon: Icons.Messages,
    text: 'Message Center',
    badge: '5',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Inbox', path: '/messages/inbox' },
      { text: 'Sent Messages', path: '/messages/sent' },
      { text: 'Order Updates', path: '/messages/orders' },
      { text: 'Promotions', path: '/messages/promotions' }
    ]
  },
  {
    id: 'notifications',
    type: 'item',
    icon: Icons.Notifications,
    text: 'Notifications',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Email Preferences', path: '/notifications/email' },
      { text: 'SMS Settings', path: '/notifications/sms' },
      { text: 'Push Notifications', path: '/notifications/push' },
      { text: 'Marketing Preferences', path: '/notifications/marketing' }
    ]
  },
  {
    id: 'rewards-offers',
    type: 'heading',
    text: 'Rewards & Offers'
  },
  {
    id: 'coupons',
    type: 'item',
    icon: Icons.Coupons,
    text: 'Coupons & Offers',
    badge: 'New',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Available Coupons', path: '/coupons/available' },
      { text: 'Used Coupons', path: '/coupons/used' },
      { text: 'Expired Coupons', path: '/coupons/expired' },
      { text: 'Referral Rewards', path: '/coupons/referral' }
    ]
  },
  {
    id: 'analytics',
    type: 'item',
    icon: Icons.Analytics,
    text: 'Purchase Analytics',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Spending Overview', path: '/analytics/spending' },
      { text: 'Category Breakdown', path: '/analytics/categories' },
      { text: 'Monthly Reports', path: '/analytics/monthly' },
      { text: 'Savings Tracker', path: '/analytics/savings' }
    ]
  },
  {
    id: 'security-settings',
    type: 'heading',
    text: 'Security & Settings'
  },
  {
    id: 'security',
    type: 'item',
    icon: Icons.Security,
    text: 'Security Settings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Change Password', path: '/security/password' },
      { text: 'Two-Factor Auth', path: '/security/2fa' },
      { text: 'Login History', path: '/security/history' },
      { text: 'Privacy Settings', path: '/security/privacy' }
    ]
  },
  {
    id: 'settings',
    type: 'item',
    icon: Icons.Settings,
    text: 'Account Settings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'General Settings', path: '/settings/general' },
      { text: 'Language & Region', path: '/settings/language' },
      { text: 'Accessibility', path: '/settings/accessibility' },
      { text: 'Data Export', path: '/settings/export' }
    ]
  },
  {
    id: 'support-help',
    type: 'heading',
    text: 'Support & Help'
  },
  {
    id: 'support',
    type: 'item',
    icon: Icons.Support,
    text: 'Help & Support',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'FAQ', path: '/support/faq' },
      { text: 'Contact Support', path: '/support/contact' },
      { text: 'Live Chat', path: '/support/chat' },
      { text: 'Report Issue', path: '/support/report' }
    ]
  }
];