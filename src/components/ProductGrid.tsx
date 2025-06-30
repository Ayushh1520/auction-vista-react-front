
import { useState } from 'react';
import ProductCard from './ProductCard';
import { useToast } from '@/components/ui/use-toast';

interface ProductGridProps {
  category?: string;
  searchQuery?: string;
}

const ProductGrid = ({ category, searchQuery }: ProductGridProps) => {
  const { toast } = useToast();
  const [sortBy, setSortBy] = useState('Best Match');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);

  const allProducts = [
    {
      id: 1,
      title: "Apple iPhone 15 Pro Max - 256GB - Natural Titanium (Unlocked)",
      price: 1099.99,
      originalPrice: 1199.99,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 1234,
      shipping: "Free shipping",
      seller: "Apple Store",
      badge: "Hot Deal",
      categories: ["electronics"]
    },
    {
      id: 2,
      title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones - Black",
      price: 329.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 856,
      shipping: "Free shipping",
      seller: "Sony Official",
      categories: ["electronics"]
    },
    {
      id: 3,
      title: "Nike Air Jordan 1 Retro High OG - University Blue",
      price: 170.00,
      originalPrice: 170.00,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 2341,
      shipping: "Free shipping",
      seller: "Nike Store",
      categories: ["fashion", "sports"]
    },
    {
      id: 4,
      title: "MacBook Air 13-inch M2 Chip - 8GB RAM, 256GB SSD - Space Gray",
      price: 999.99,
      originalPrice: 1199.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 567,
      shipping: "Free shipping",
      seller: "Apple Store",
      badge: "Limited Time",
      categories: ["electronics"]
    },
    {
      id: 5,
      title: "Samsung 55\" Class QLED 4K Smart TV - QN55Q70CAFXZA",
      price: 697.99,
      originalPrice: 899.99,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 423,
      shipping: "Free shipping",
      seller: "Samsung Electronics",
      categories: ["electronics"]
    },
    {
      id: 6,
      title: "Canon EOS R6 Mark II Mirrorless Camera Body",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 189,
      shipping: "Free shipping",
      seller: "Canon USA",
      categories: ["electronics"]
    },
    {
      id: 7,
      title: "Levi's 501 Original Fit Jeans - Dark Blue Wash",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 1876,
      shipping: "Free shipping",
      seller: "Levi's Store",
      categories: ["fashion"]
    },
    {
      id: 8,
      title: "KitchenAid Artisan Series 5-Qt Stand Mixer - Empire Red",
      price: 279.99,
      originalPrice: 349.99,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 934,
      shipping: "Free shipping",
      seller: "KitchenAid Official",
      badge: "Best Seller",
      categories: ["home-garden"]
    }
  ];

  // Filter products based on category or search query
  let products = allProducts;
  
  if (category) {
    products = allProducts.filter(product => 
      product.categories?.includes(category.toLowerCase().replace('-', ''))
    );
  }
  
  if (searchQuery) {
    products = allProducts.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleSortChange = (value: string) => {
    setSortBy(value);
    toast({
      title: "Sorting",
      description: `Sorting by ${value}`,
    });
    console.log('Sort changed to:', value);
  };

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
    toast({
      title: "View Mode",
      description: `Switched to ${mode} view`,
    });
    console.log('View mode changed to:', mode);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getTitle = () => {
    if (searchQuery) return `Search Results (${products.length} items)`;
    if (category) return `${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' & ')} Products`;
    return 'Featured Products';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{getTitle()}</h2>
        <div className="flex items-center space-x-4">
          <select 
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
            <option>Most Popular</option>
          </select>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>View:</span>
            <button 
              onClick={() => handleViewModeChange('grid')}
              className={`p-2 border rounded ${viewMode === 'grid' ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-50'}`}
            >
              Grid
            </button>
            <button 
              onClick={() => handleViewModeChange('list')}
              className={`p-2 border rounded ${viewMode === 'list' ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-50'}`}
            >
              List
            </button>
          </div>
        </div>
      </div>
      
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[1, 2, 3].map((page) => (
                <button 
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === page 
                      ? 'bg-blue-600 text-white' 
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => handlePageChange(Math.min(3, currentPage + 1))}
                disabled={currentPage === 3}
                className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGrid;
