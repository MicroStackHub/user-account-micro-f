import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import React, { Suspense, lazy } from 'react';

// Remote micro-frontends
const AddressPage = lazy(() => import('address/AddressPage'));
const AccountPage = lazy(() => import('account/AccountPage'));
const GSTINForm = lazy(() => import('setgst/GSTINForm'));
const RefundPage = lazy(() => import('setrefund/RefundPage'));
const WishlistApp = lazy(() => import('wishlist/WishlistApp'));

//TODO: remove after fix 
// Minimal test import for wishlist remote
import('address/AddressPage').then(mod => {
  // eslint-disable-next-line no-console
  console.log('AddressPage remote loaded:', mod);
}).catch(err => {
  // eslint-disable-next-line no-console
  console.error('Error loading AddressPage remote:', err);
});
import('account/AccountPage').then(mod => {
  // eslint-disable-next-line no-console
  console.log('AccountPage remote loaded:', mod);
}).catch(err => {
  // eslint-disable-next-line no-console
  console.error('Error loading AccountPage remote:', err);
});
import('setgst/GSTINForm').then(mod => {
  // eslint-disable-next-line no-console
  console.log('GSTINForm remote loaded:', mod);
}).catch(err => {
  // eslint-disable-next-line no-console
  console.error('Error loading GSTINForm remote:', err);
});
import('setrefund/RefundPage').then(mod => {
  // eslint-disable-next-line no-console
  console.log('RefundPage remote loaded:', mod);
}).catch(err => {
  // eslint-disable-next-line no-console
  console.error('Error loading RefundPage remote:', err);
});
import('wishlist/WishlistApp').then(mod => {
  // eslint-disable-next-line no-console
  console.log('WishlistApp remote loaded:', mod);
}).catch(err => {
  // eslint-disable-next-line no-console
  console.error('Error loading WishlistApp remote:', err);
});


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<div className="p-4">Orders Page</div>} />
          <Route path="account" element={<Suspense fallback={<div>Loading...</div>}><AccountPage /></Suspense>} />
          <Route path="profile" element={<div className="p-4">My Profile Page</div>} />
          <Route path="refund" element={<Suspense fallback={<div>Loading...</div>}><RefundPage /></Suspense>} />
          <Route path="gst" element={<Suspense fallback={<div>Loading...</div>}><GSTINForm /></Suspense>} />
          <Route path="messages" element={<div className="p-4">Message Center Page</div>} />
          <Route path="addresses" element={<Suspense fallback={<div>Loading...</div>}><AddressPage /></Suspense>} />
          <Route path="wishlist" element={<Suspense fallback={<div>Loading...</div>}><WishlistApp /></Suspense>} />
          <Route path="promotions" element={<div className="p-4">Promotions & Coupons Page</div>} />
          <Route path="privacy" element={<div className="p-4">Privacy Policy Page</div>} />
          <Route path="feedback" element={<div className="p-4">Feedback Page</div>} />
          <Route path="help" element={<div className="p-4">Help Page</div>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
