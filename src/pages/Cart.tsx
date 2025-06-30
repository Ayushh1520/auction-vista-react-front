import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus, Heart } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Apple iPhone 15 Pro Max - 256GB - Natural Titanium (Unlocked)",
      price: 1099.99,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      quantity: 1
    },
    {
      id: 3,
      title: "Nike Air Jordan 1 Retro High OG - University Blue",
      price: 170.00,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      quantity: 2
    }
  ]);

  const [wishlist, setWishlist] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart",
    });
  };

  const isInWishlist = (id: number) => wishlist.some(item => item.id === id);

  const handleWishlist = (item: CartItem) => {
    if (isInWishlist(item.id)) {
      const updated = wishlist.filter(w => w.id !== item.id);
      setWishlist(updated);
      toast({
        title: "Removed from Wishlist",
        description: `${item.title} removed from your wishlist`,
      });
    } else {
      const updated = [...wishlist, item];
      setWishlist(updated);
      toast({
        title: "Added to Wishlist",
        description: `${item.title} added to your wishlist`,
      });
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Redirecting to checkout...",
    });
    console.log('Proceeding to checkout with items:', cartItems);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart ({cartItems.length} items)</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
            <Button onClick={() => navigate('/')}>Start Shopping</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleWishlist(item)}
                      className={isInWishlist(item.id) ? 'text-red-500' : 'text-gray-600'}
                      title={isInWishlist(item.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart className="h-4 w-4" fill={isInWishlist(item.id) ? 'currentColor' : 'none'} />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
