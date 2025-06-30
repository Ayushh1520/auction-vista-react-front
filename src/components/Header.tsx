import { Search, ShoppingCart, User, Heart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import CategoryDropdown from './CategoryDropdown';
import AuthModal from './AuthModal';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();
  const [searchQuery, setSearchQuery] = useState('');
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'register' }>({
    isOpen: false,
    mode: 'signin'
  });

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      console.log('Search clicked with query:', searchQuery);
    } else {
      toast({
        title: "Search",
        description: "Please enter a search term",
      });
    }
  };

  const handleCartClick = () => {
    navigate('/cart');
    console.log('Cart clicked');
  };

  const handleWishlistClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
    navigate('/wishlist');
  };

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications",
    });
    console.log('Notifications clicked');
  };

  const handleUserClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
    navigate('/profile');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleAuthClick = (mode: 'signin' | 'register') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleNavClick = (category: string) => {
    const categorySlug = category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
    navigate(`/category/${categorySlug}`);
    console.log('Navigation clicked:', category);
  };

  const handleTopNavClick = (section: string) => {
    toast({
      title: section,
      description: `Opening ${section}`,
    });
    console.log('Top nav clicked:', section);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <span className="flex items-center space-x-2">
                {user?.picture && (
                  <img src={user.picture} alt={user.name} className="w-6 h-6 rounded-full" />
                )}
                <span className="text-gray-700">{user?.name}</span>
                <button
                  onClick={() => logout()}
                  className="text-blue-600 hover:underline cursor-pointer ml-2"
                >
                  Logout
                </button>
              </span>
            ) : (
              <span>
                <button
                  onClick={() => loginWithRedirect()}
                  className="text-blue-600 hover:underline cursor-pointer ml-1"
                >
                  Login
                </button>
              </span>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <span 
              onClick={() => handleTopNavClick('Daily Deals')}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Daily Deals
            </span>
            <span 
              onClick={() => handleTopNavClick('Help & Contact')}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Help & Contact
            </span>
            <span 
              onClick={() => handleTopNavClick('Sell')}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Sell
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              onClick={handleLogoClick}
              className="text-3xl font-bold text-red-600 cursor-pointer hover:text-red-700"
            >
              eBay
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <div className="relative flex-1">
                <Input 
                  type="text" 
                  placeholder="Search for anything"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-4 pr-12 py-3 text-lg border-2 border-gray-300 rounded-l-md focus:border-blue-500 focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button 
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-r-md text-white font-semibold"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <Bell 
              onClick={handleNotificationClick}
              className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" 
            />
            <div className="relative">
              <Heart 
                onClick={handleWishlistClick}
                className="h-6 w-6 text-gray-600 hover:text-red-600 cursor-pointer" 
              />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </div>
            <div className="relative">
              <ShoppingCart 
                onClick={handleCartClick}
                className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" 
              />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </div>
            <User 
              onClick={handleUserClick}
              className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" 
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center space-x-8">
          <CategoryDropdown />
          <span 
            onClick={() => handleNavClick('Electronics')}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Electronics
          </span>
          <span 
            onClick={() => handleNavClick('Fashion')}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Fashion
          </span>
          <span 
            onClick={() => handleNavClick('Home & Garden')}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Home & Garden
          </span>
          <span 
            onClick={() => handleNavClick('Motors')}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Motors
          </span>
          <span 
            onClick={() => handleNavClick('Collectibles')}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Collectibles
          </span>
          <span 
            onClick={() => handleNavClick('Sports')}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            Sports
          </span>
        </div>
      </nav>

      <AuthModal 
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        mode={authModal.mode}
      />
    </header>
  );
};

export default Header;
