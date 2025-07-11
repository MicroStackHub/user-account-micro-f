import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<div className="p-4">Orders Page</div>} />
          <Route path="account" element={<div className="p-4">My Account Page</div>} />
          <Route path="profile" element={<div className="p-4">My Profile Page</div>} />
          <Route path="refund" element={<div className="p-4">Refund Payment Page</div>} />
          <Route path="gst" element={<div className="p-4">GST Number Page</div>} />
          <Route path="messages" element={<div className="p-4">Message Center Page</div>} />
          <Route path="addresses" element={<div className="p-4">Manage Addresses Page</div>} />
          <Route path="wishlist" element={<div className="p-4">My Wishlist Page</div>} />
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
