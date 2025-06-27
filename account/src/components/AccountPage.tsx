import React, { useState } from 'react';
import ProfileSummary from './ProfileSummary';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';
import AccountSettings from './AccountSettings';
import PersonalizedRecommendations from './PersonalizedRecommendations';
import LoyaltyProgram from './LoyaltyProgram';

interface AccountCardProps {
  title: string;
  icon: React.ReactNode;
  notificationCount?: number;
  onClick: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ title, icon, notificationCount, onClick }) => {
  return (
    <div className="account-card" onClick={onClick}>
      <div className="account-icon">
        {icon}
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
      {notificationCount !== undefined && (
        <div className="ml-auto">
          <span className="notification-badge">{notificationCount}</span>
        </div>
      )}
    </div>
  );
};

const AccountPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleCardClick = (section: string) => {
    setActiveSection(section);
    // In a real application, this would navigate to the specific section
    console.log(`Navigating to ${section}`);
  };

  const handleQuickAction = (action: string) => {
    setNotificationMessage(`Action triggered: ${action}`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };
  
  // Mock data for profile summary
  const profileData = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    memberSince: 'January 2023',
    loyaltyPoints: 750,
    membershipLevel: 'Gold'
  };
  
  // Mock data for loyalty program
  const loyaltyProgramData = {
    currentPoints: 750,
    nextRewardAt: 1000,
    membershipLevel: 'Gold',
    availableRewards: [
      {
        id: 'reward1',
        name: '$10 Store Credit',
        pointsCost: 500,
        description: 'Get $10 off your next purchase',
        expiryDate: 'Dec 31, 2023',
        isAvailable: true
      },
      {
        id: 'reward2',
        name: 'Free Shipping',
        pointsCost: 300,
        description: 'Free shipping on your next order',
        isAvailable: true
      },
      {
        id: 'reward3',
        name: 'Premium Membership',
        pointsCost: 1500,
        description: 'Upgrade to Premium for 3 months',
        isAvailable: false
      }
    ],
    pointsHistory: [
      {
        id: 'ph1',
        date: 'Nov 15, 2023',
        description: 'Purchase: Order #12345',
        points: 150,
        type: 'earned' as const
      },
      {
        id: 'ph2',
        date: 'Oct 28, 2023',
        description: 'Redeemed: $5 Store Credit',
        points: 250,
        type: 'redeemed' as const
      },
      {
        id: 'ph3',
        date: 'Oct 15, 2023',
        description: 'Birthday Bonus',
        points: 100,
        type: 'earned' as const
      },
      {
        id: 'ph4',
        date: 'Oct 10, 2023',
        description: 'Purchase: Order #12300',
        points: 120,
        type: 'earned' as const
      }
    ]
  };

  // Mock data for recent activities
  const recentActivities = [
    {
      id: '1',
      type: 'order' as const,
      title: 'Order #12345 Shipped',
      description: 'Your order has been shipped and will arrive in 2 days',
      timestamp: '2 hours ago',
      icon: null
    },
    {
      id: '2',
      type: 'message' as const,
      title: 'New Message from Support',
      description: 'Your inquiry about return policy has been answered',
      timestamp: 'Yesterday',
      icon: null
    },
    {
      id: '3',
      type: 'wishlist' as const,
      title: 'Item Back in Stock',
      description: 'An item from your wishlist is now available',
      timestamp: '3 days ago',
      icon: null
    }
  ];
  
  // Mock data for product recommendations
  const productRecommendations = [
    {
      id: 'prod1',
      name: 'Wireless Noise-Cancelling Headphones',
      price: 299.99,
      discountPrice: 249.99,
      imageUrl: 'https://via.placeholder.com/300x300?text=Headphones',
      category: 'Electronics',
      rating: 4.5
    },
    {
      id: 'prod2',
      name: 'Smart Fitness Tracker',
      price: 129.99,
      imageUrl: 'https://via.placeholder.com/300x300?text=Fitness+Tracker',
      category: 'Wearables',
      rating: 4.2
    },
    {
      id: 'prod3',
      name: 'Portable Bluetooth Speaker',
      price: 89.99,
      discountPrice: 69.99,
      imageUrl: 'https://via.placeholder.com/300x300?text=Speaker',
      category: 'Audio',
      rating: 4.0
    }
  ];
  
  const handleViewProduct = (productId: string) => {
    console.log(`Viewing product: ${productId}`);
    setNotificationMessage(`Product ${productId} opened in new tab`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform translate-y-0 opacity-100">
          {notificationMessage}
        </div>
      )}
      
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-6xl">
        {/* Profile Summary */}
        <ProfileSummary {...profileData} />
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:w-2/3">
            {/* Quick Actions */}
            <QuickActions onAction={handleQuickAction} />
            
            {/* Recent Activity */}
            <RecentActivity activities={recentActivities} />
            
            {/* Account Settings */}
            <AccountSettings />
            
            {/* Loyalty Program */}
            <LoyaltyProgram {...loyaltyProgramData} />
          </div>
          
          {/* Right Column */}
          <div className="lg:w-1/3">
            {/* Personalized Recommendations */}
            <PersonalizedRecommendations 
              recommendations={productRecommendations}
              onViewProduct={handleViewProduct}
            />
            
            {/* Account Menu */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800">Account Menu</h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-3">
        <AccountCard
          title="My Orders"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          }
          notificationCount={0}
          onClick={() => handleCardClick('orders')}
        />

        <AccountCard
          title="Profile"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          }
          onClick={() => handleCardClick('profile')}
        />

        <AccountCard
          title="Message Center"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
          }
          notificationCount={0}
          onClick={() => handleCardClick('messages')}
        />

        <AccountCard
          title="Manage Address"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
            </svg>
          }
          onClick={() => handleCardClick('address')}
        />

        <AccountCard
          title="My Wishlist"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          }
          notificationCount={0}
          onClick={() => handleCardClick('wishlist')}
        />

        <AccountCard
          title="Promotions & Coupons"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
            </svg>
          }
          notificationCount={0}
          onClick={() => handleCardClick('promotions')}
        />

        <AccountCard
          title="Privacy Policy"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
            </svg>
          }
          onClick={() => handleCardClick('privacy')}
        />

        <AccountCard
          title="Legal Information"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path>
            </svg>
          }
          onClick={() => handleCardClick('legal')}
        />

        <AccountCard
          title="Feedback"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
          }
          onClick={() => handleCardClick('feedback')}
        />

        <AccountCard
          title="Help"
          icon={
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
            </svg>
          }
          onClick={() => handleCardClick('help')}
        />
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;