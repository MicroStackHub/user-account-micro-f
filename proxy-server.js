
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Application routes mapping
const routes = {
  '/account': 'http://localhost:5173',
  '/affiliate': 'http://localhost:5174', 
  '/dashboard': 'http://localhost:5175',
  '/address': 'http://localhost:5176',
  '/gst': 'http://localhost:5177',
  '/refund': 'http://localhost:5178',
  '/wishlist': 'http://localhost:5179'
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    services: Object.keys(routes),
    timestamp: new Date().toISOString()
  });
});

// Home page with links to all applications
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Application Hub</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #333; text-align: center; margin-bottom: 40px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .app-card { padding: 20px; border: 1px solid #ddd; border-radius: 8px; text-align: center; transition: transform 0.2s; }
        .app-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .app-link { text-decoration: none; color: #0066cc; font-weight: bold; font-size: 18px; }
        .app-link:hover { color: #004499; }
        .status { margin-top: 10px; padding: 5px 10px; border-radius: 4px; font-size: 12px; }
        .online { background: #d4edda; color: #155724; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Application Hub</h1>
        <div class="grid">
          ${Object.entries(routes).map(([path, url]) => `
            <div class="app-card">
              <a href="${path}" class="app-link">${path.replace('/', '').toUpperCase()}</a>
              <div class="status online">Online</div>
            </div>
          `).join('')}
        </div>
        <p style="text-align: center; margin-top: 40px; color: #666;">
          Click on any application to access it
        </p>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

// Setup proxy middleware for each route
Object.entries(routes).forEach(([path, target]) => {
  app.use(path, createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^${path}`]: '',
    },
    onError: (err, req, res) => {
      console.log(`Proxy error for ${path}:`, err.message);
      res.status(500).send(`Service ${path} is currently unavailable`);
    }
  }));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🌐 Proxy server running on http://localhost:${PORT}`);
  console.log('\n📱 Available applications:');
  Object.entries(routes).forEach(([path, target]) => {
    console.log(`  ${path} -> ${target}`);
  });
  console.log(`\n🏠 Visit http://localhost:${PORT} for the application hub`);
});
