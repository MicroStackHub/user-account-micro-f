
const { spawn } = require('child_process');
const path = require('path');

const apps = [
  { name: 'Account', dir: 'account', port: 5173 },
  { name: 'Affiliat', dir: 'Affiliat', port: 5174 },
  { name: 'Dashboard', dir: 'dashboard', port: 5175 },
  { name: 'Address', dir: 'address', port: 5176 },
  { name: 'Set GST Number', dir: 'set-gst-number', port: 5177 },
  { name: 'Set Refund', dir: 'set-refund', port: 5178 },
  { name: 'Wishlist', dir: 'wishlist', port: 5179 }
];

console.log('🚀 Starting all applications...\n');

const processes = [];

apps.forEach(app => {
  console.log(`Starting ${app.name} on port ${app.port}...`);
  
  const viteProcess = spawn('npm', ['run', 'dev', '--', '--port', app.port, '--host', '0.0.0.0'], {
    cwd: path.join(__dirname, app.dir),
    stdio: 'pipe',
    shell: true
  });

  viteProcess.stdout.on('data', (data) => {
    console.log(`[${app.name}] ${data.toString().trim()}`);
  });

  viteProcess.stderr.on('data', (data) => {
    console.log(`[${app.name}] ${data.toString().trim()}`);
  });

  viteProcess.on('close', (code) => {
    console.log(`[${app.name}] Process exited with code ${code}`);
  });

  processes.push({ name: app.name, process: viteProcess });
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down all applications...');
  processes.forEach(({ name, process }) => {
    console.log(`Stopping ${name}...`);
    process.kill('SIGTERM');
  });
  process.exit(0);
});

console.log('\n📱 Applications will be available at:');
apps.forEach(app => {
  console.log(`${app.name}: http://localhost:${app.port}`);
});

console.log('\n💡 Press Ctrl+C to stop all applications');
