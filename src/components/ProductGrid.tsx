
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
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
      badge: "Hot Deal"
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
      seller: "Sony Official"
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
      seller: "Nike Store"
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
      badge: "Limited Time"
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
      seller: "Samsung Electronics"
    },
    {
      id: 6,
      title: "Canon EOS R6 Mark II Mirrorless Camera Body",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 189,
      shipping: "Free shipping",
      seller: "Canon USA"
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
      seller: "Levi's Store"
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
      badge: "Best Seller"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>View:</span>
            <button className="p-1 border rounded">Grid</button>
            <button className="p-1 border rounded bg-gray-100">List</button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Previous</button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-md">1</button>
          <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">2</button>
          <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">3</button>
          <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
