
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
  Heart: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
    </svg>
  ),
  Star: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
    </svg>
  ),
  Category: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
    </svg>
  ),
  Share: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/>
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
    id: 'my-wishlist',
    type: 'item',
    icon: Icons.Heart,
    text: 'My Wishlist',
    isActive: true,
    onClick: () => console.log('Navigate to Wishlist')
  },
  {
    id: 'categories',
    type: 'heading',
    text: 'Categories'
  },
  {
    id: 'favorites',
    type: 'item',
    icon: Icons.Star,
    text: 'Favorites',
    badge: '12',
    onClick: () => console.log('Navigate to Favorites')
  },
  {
    id: 'categories-list',
    type: 'item',
    icon: Icons.Category,
    text: 'Categories',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Electronics', path: '/wishlist/electronics' },
      { text: 'Fashion', path: '/wishlist/fashion' },
      { text: 'Home & Garden', path: '/wishlist/home' },
      { text: 'Books', path: '/wishlist/books' },
      { text: 'Sports', path: '/wishlist/sports' },
    ]
  },
  {
    id: 'organization',
    type: 'heading',
    text: 'Organization'
  },
  {
    id: 'collections',
    type: 'item',
    icon: Icons.Category,
    text: 'Collections',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Birthday List', path: '/collections/birthday' },
      { text: 'Holiday List', path: '/collections/holiday' },
      { text: 'Wedding Registry', path: '/collections/wedding' },
    ]
  },
  {
    id: 'sharing',
    type: 'heading',
    text: 'Sharing'
  },
  {
    id: 'shared-lists',
    type: 'item',
    icon: Icons.Share,
    text: 'Shared Lists',
    badge: 'New',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Share Wishlist', path: '/share/wishlist' },
      { text: 'Public Lists', path: '/share/public' },
      { text: 'Friends Lists', path: '/share/friends' },
    ]
  },
  {
    id: 'settings',
    type: 'heading',
    text: 'Settings'
  },
  {
    id: 'wishlist-settings',
    type: 'item',
    icon: Icons.Settings,
    text: 'Wishlist Settings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Privacy Settings', path: '/settings/privacy' },
      { text: 'Notification Settings', path: '/settings/notifications' },
      { text: 'Import/Export', path: '/settings/import-export' },
    ]
  }
];
