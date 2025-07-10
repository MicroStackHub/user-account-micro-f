import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

function App() {
  const [defaultCategory, setDefaultCategory] = useState('All Categories');
  const [privateCategory, setPrivateCategory] = useState('All Categories');
  const [showCreateWishlist, setShowCreateWishlist] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showAddToPrivate, setShowAddToPrivate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
      title: 'Car Trash Can Garbage Bag Car Interior Mini Creative Multi-Functional Storage Decoration Supplies',
      addedDate: '03-07-2025',
      origin: 'China',
      price: 888.00,
      originalPrice: 1300.00,
      discount: 32,
      hasShipping: true,
      isInnovative: true,
      category: 'All Categories',
      isPrivate: false
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
      title: 'Wireless Headphones Bluetooth Over-Ear',
      addedDate: '04-07-2025',
      origin: 'USA',
      price: 2999.00,
      originalPrice: 3999.00,
      discount: 25,
      hasShipping: true,
      isInnovative: false,
      category: 'Consumer Electronics',
      isPrivate: false
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80',
      title: 'Minimalist Analog Watch',
      addedDate: '05-07-2025',
      origin: 'Germany',
      price: 1200.00,
      originalPrice: 1500.00,
      discount: 20,
      hasShipping: false,
      isInnovative: false,
      category: 'Watches',
      isPrivate: false
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Eco-Friendly Water Bottle',
      addedDate: '06-07-2025',
      origin: 'India',
      price: 499.00,
      originalPrice: 799.00,
      discount: 38,
      hasShipping: true,
      isInnovative: true,
      category: 'Home & Garden',
      isPrivate: false
    }
  ]);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);
  const [newWishlistName, setNewWishlistName] = useState('');
  const [addToPrivateTargetId, setAddToPrivateTargetId] = useState<number | null>(null);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    'All Categories',
    'Apparel Accessories',
    'Computer and Office',
    'Consumer Electronics',
    'Electronic Components',
    'Home & Garden',
    'Home Appliances',
    'Home Improvement',
    'Jewelry and Accessories',
    'Lights & Lighting',
    'Luggage & Bags',
    'Shoes',
    'Women\'s Clothing',
    'Office & School Supplies',
    'Security & Protection',
    'Sports & Entertainment',
    'Toys & Hobbies',
    'Watches',
    'Digital Goods'
  ];

  // Handlers
  const handleDelete = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
    setShowDeleteConfirm(false);
    setDeleteTargetId(null);
  };

  const handleAddToPrivate = (id: number, category: string) => {
    setWishlistItems(items => items.map(item =>
      item.id === id ? { ...item, isPrivate: true, category } : item
    ));
    setShowAddToPrivate(false);
    setAddToPrivateTargetId(null);
  };

  const handleCreateWishlist = () => {
    if (newWishlistName.trim() !== '') {
      setWishlistItems(items => [
        ...items,
        {
          id: Date.now(),
          image: '/product-image.jpg',
          title: newWishlistName,
          addedDate: new Date().toLocaleDateString(),
          origin: 'India',
          price: 0,
          originalPrice: 0,
          discount: 0,
          hasShipping: false,
          isInnovative: false,
          category: defaultCategory,
          isPrivate: false
        }
      ]);
      setShowCreateWishlist(false);
      setNewWishlistName('');
    }
  };

  // Filtered items
  const filteredItems = wishlistItems.filter(item =>
    (defaultCategory === 'All Categories' || item.category === defaultCategory) &&
    (!item.isPrivate || privateCategory === 'All Categories' || item.category === privateCategory)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 bg-white p-6 rounded-xl shadow-card animate-slide-up">
          <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            My Wishlist
          </h1>
          <button
            onClick={() => setShowCreateWishlist(true)}
            className="btn-primary flex items-center gap-2"
          >
            + Create a wishlist
          </button>
        </div>

        {/* Category Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-card animate-slide-up delay-100">
          <div className="space-y-2">
            <label className="form-label">Default Category:</label>
            <select
              value={defaultCategory}
              onChange={(e) => setDefaultCategory(e.target.value)}
              className="form-input"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="form-label">Private Category:</label>
            <select
              value={privateCategory}
              onChange={(e) => setPrivateCategory(e.target.value)}
              className="form-input"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredItems.length === 0 && (
          <div className="bg-white rounded-xl shadow-card p-8 flex flex-col items-center justify-center animate-fadeIn">
            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-gray-500 text-lg">No items in your wishlist yet.</p>
          </div>
        )}

        {/* Wishlist Items */}
        {!isLoading && filteredItems.length > 0 && (
          <div className="space-y-4">
            {filteredItems.map(item => (
              <div key={item.id} className="wishlist-item group flex flex-col sm:flex-row gap-4 items-center">
                {/* Product Image */}
                <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">Added {item.addedDate}</p>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 truncate">{item.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item.origin}
                        </span>
                        {item.hasShipping && (
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                            Free Shipping
                          </span>
                        )}
                        {item.isInnovative && (
                          <span className="text-blue-600">INNOVATIVE SHOPPING</span>
                        )}
                        {item.isPrivate && (
                          <span className="text-gray-400">Private</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-blue-600">₹{item.price.toFixed(2)}</span>
                        <span className="text-sm text-gray-500 line-through">₹{item.originalPrice.toFixed(2)}</span>
                        {item.discount > 0 && (
                          <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">-{item.discount}%</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { setShowAddToPrivate(true); setAddToPrivateTargetId(item.id); }}
                          className="btn-secondary text-sm"
                        >
                          Add to Private
                        </button>
                        <button className="btn-primary text-sm">
                          Buy Now
                        </button>
                        <button
                          onClick={() => { setShowDeleteConfirm(true); setDeleteTargetId(item.id); }}
                          className="btn-danger"
                          aria-label="Delete item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Wishlist Modal */}
      {showCreateWishlist && (
        <div className="modal-overlay">
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="modal-content max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Create Wishlist</h3>
                <button
                  onClick={() => setShowCreateWishlist(false)}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <input
                type="text"
                placeholder="Wishlist Name"
                value={newWishlistName}
                onChange={e => setNewWishlistName(e.target.value)}
                className="form-input mb-4"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowCreateWishlist(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateWishlist}
                  className="btn-primary"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal-overlay">
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="modal-content max-w-sm w-full p-6">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-center text-gray-900 mb-4">Delete!</h3>
              <p className="text-sm text-center text-gray-500 mb-6">Do you want to delete this wishlist item?</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => { setShowDeleteConfirm(false); setDeleteTargetId(null); }}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={() => deleteTargetId !== null && handleDelete(deleteTargetId)}
                  className="btn-danger"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add to Private Category Modal */}
      {showAddToPrivate && (
        <div className="modal-overlay">
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="modal-content max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Add to Private Category</h3>
                <button
                  onClick={() => { setShowAddToPrivate(false); setAddToPrivateTargetId(null); }}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <select
                className="form-input mb-4"
                value={privateCategory}
                onChange={e => setPrivateCategory(e.target.value)}
              >
                <option value="">Select Private Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => { setShowAddToPrivate(false); setAddToPrivateTargetId(null); }}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={() => addToPrivateTargetId !== null && handleAddToPrivate(addToPrivateTargetId, privateCategory)}
                  className="btn-primary"
                  disabled={!privateCategory || privateCategory === 'All Categories'}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
