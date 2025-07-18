
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Configure your account preferences and settings
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { id: 'email-notifications', label: 'Email Notifications', checked: true },
            { id: 'push-notifications', label: 'Push Notifications', checked: false },
            { id: 'sms-notifications', label: 'SMS Notifications', checked: true },
          ].map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                id={item.id}
                type="checkbox"
                defaultChecked={item.checked}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={item.id} className="ml-2 block text-sm text-gray-900 dark:text-white">
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security Settings</h3>
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
            Change Password
          </button>
          <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
            Enable Two-Factor Authentication
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
