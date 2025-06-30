import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface WishlistItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  const removeFromWishlist = (id: number) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
        {wishlist.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">Your wishlist is empty</p>
            <Button onClick={() => navigate('/')}>Browse Products</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishlist.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                </div>
                <Button variant="destructive" size="sm" onClick={() => removeFromWishlist(item.id)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
