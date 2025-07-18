
const { execSync } = require('child_process');
const path = require('path');

const apps = [
  'account',
  'Affiliat', 
  'dashboard',
  'address',
  'set-gst-number',
  'set-refund',
  'wishlist'
];

console.log('📦 Installing dependencies for all applications...\n');

apps.forEach(app => {
  try {
    console.log(`Installing dependencies for ${app}...`);
    execSync('npm install', {
      cwd: path.join(__dirname, app),
      stdio: 'inherit'
    });
    console.log(`✅ ${app} dependencies installed successfully\n`);
  } catch (error) {
    console.error(`❌ Failed to install dependencies for ${app}:`, error.message);
  }
});

console.log('🎉 All dependencies installed!');
