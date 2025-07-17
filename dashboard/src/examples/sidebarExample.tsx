
import React from 'react';
import { SidebarManager, addNewSection } from '../utils/sidebarUtils';
import { Icons } from '../config/sidebarConfig';

// Example: How to add new items to the sidebar

// Method 1: Using SidebarManager directly
export const addCustomItems = () => {
  // Add a new heading
  SidebarManager.addHeading('analytics', 'Analytics');
  
  // Add a simple item
  SidebarManager.addItem(
    'reports',
    'Reports',
    Icons.Dashboard,
    {
      onClick: () => console.log('Navigate to Reports'),
      badge: 'New'
    }
  );
  
  // Add an item with submenu
  SidebarManager.addItem(
    'analytics-dashboard',
    'Analytics Dashboard',
    Icons.Dashboard,
    {
      hasSubMenu: true,
      subMenuItems: [
        { text: 'Traffic', path: '/analytics/traffic' },
        { text: 'Sales', path: '/analytics/sales' },
        { text: 'Users', path: '/analytics/users' }
      ],
      onClick: () => console.log('Analytics clicked')
    }
  );
};

// Method 2: Using the helper function
export const addMarketingSection = () => {
  addNewSection(
    'marketing',
    'Marketing',
    [
      {
        id: 'campaigns',
        text: 'Campaigns',
        icon: Icons.AI,
        onClick: () => console.log('Navigate to Campaigns'),
        badge: 'Active'
      },
      {
        id: 'email-marketing',
        text: 'Email Marketing',
        icon: Icons.Network,
        subItems: [
          { text: 'Templates', path: '/email/templates' },
          { text: 'Subscribers', path: '/email/subscribers' },
          { text: 'Campaigns', path: '/email/campaigns' }
        ]
      },
      {
        id: 'social-media',
        text: 'Social Media',
        icon: Icons.User,
        onClick: () => console.log('Navigate to Social Media')
      }
    ]
  );
};

// Method 3: Create a completely custom icon
const CustomIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const addCustomSection = () => {
  SidebarManager.addHeading('custom', 'Custom Features');
  
  SidebarManager.addItem(
    'favorites',
    'Favorites',
    CustomIcon,
    {
      onClick: () => console.log('Navigate to Favorites'),
      badge: '12'
    }
  );
  
  SidebarManager.addItem(
    'bookmarks',
    'Bookmarks',
    CustomIcon,
    {
      hasSubMenu: true,
      subMenuItems: [
        { text: 'Work', path: '/bookmarks/work' },
        { text: 'Personal', path: '/bookmarks/personal' },
        { text: 'Learning', path: '/bookmarks/learning' }
      ]
    }
  );
};

// You can call these functions when needed to dynamically add items
// For example, in a useEffect hook or based on user permissions

/*
Usage Example in a component:

import { addCustomItems, addMarketingSection } from './examples/sidebarExample';

const MyComponent = () => {
  useEffect(() => {
    // Add items based on user role or other conditions
    if (userRole === 'admin') {
      addCustomItems();
    }
    
    if (hasMarketingAccess) {
      addMarketingSection();
    }
  }, [userRole, hasMarketingAccess]);

  return <Sidebar />;
};
*/
