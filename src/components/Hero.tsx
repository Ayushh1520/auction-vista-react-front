
import { Button } from '@/components/ui/button';

const Hero = () => {
  const categories = [
    { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop', color: 'bg-blue-500' },
    { name: 'Fashion', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop', color: 'bg-pink-500' },
    { name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop', color: 'bg-green-500' },
    { name: 'Sports', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop', color: 'bg-orange-500' },
    { name: 'Motors', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop', color: 'bg-red-500' },
    { name: 'Collectibles', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop', color: 'bg-purple-500' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Hero Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">Discover amazing deals</h2>
              <p className="text-xl mb-6">Find everything you need at unbeatable prices</p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                Start Shopping
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop" 
                alt="Shopping" 
                className="rounded-lg shadow-lg w-96 h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Deals */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-500 text-white rounded-lg p-6 text-center">
            <h4 className="text-xl font-bold mb-2">Daily Deals</h4>
            <p className="mb-4">Up to 70% off</p>
            <Button className="bg-white text-red-500 hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
          <div className="bg-green-500 text-white rounded-lg p-6 text-center">
            <h4 className="text-xl font-bold mb-2">Free Shipping</h4>
            <p className="mb-4">On orders over $35</p>
            <Button className="bg-white text-green-500 hover:bg-gray-100">
              Learn More
            </Button>
          </div>
          <div className="bg-purple-500 text-white rounded-lg p-6 text-center">
            <h4 className="text-xl font-bold mb-2">Sell Your Items</h4>
            <p className="mb-4">Start earning today</p>
            <Button className="bg-white text-purple-500 hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
