
import { Search, ShoppingCart, User, Menu, Heart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Hi! <span className="text-blue-600 hover:underline cursor-pointer">Sign in</span> or <span className="text-blue-600 hover:underline cursor-pointer">register</span></span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Daily Deals</span>
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Help & Contact</span>
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Sell</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-red-600 cursor-pointer">eBay</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <div className="relative flex-1">
                <Input 
                  type="text" 
                  placeholder="Search for anything"
                  className="w-full pl-4 pr-12 py-3 text-lg border-2 border-gray-300 rounded-l-md focus:border-blue-500 focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-r-md text-white font-semibold">
                Search
              </Button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <Bell className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
            <div className="relative">
              <Heart className="h-6 w-6 text-gray-600 hover:text-red-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </div>
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </div>
            <User className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center space-x-8">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <Menu className="h-4 w-4" />
            <span>Shop by category</span>
          </div>
          <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Electronics</span>
          <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Fashion</span>
          <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Home & Garden</span>
          <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Motors</span>
          <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Collectibles</span>
          <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Sports</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
