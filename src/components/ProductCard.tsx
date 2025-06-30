
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  shipping: string;
  seller: string;
  badge?: string;
}

const ProductCard = ({ 
  id,
  title, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  shipping, 
  seller, 
  badge 
}: ProductCardProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    // Add to cart first
    addToCart({ id, title, price, image });
    
    toast({
      title: "Redirecting to checkout",
      description: `${title} - $${price.toFixed(2)}`,
    });
    
    // Navigate to cart
    navigate('/cart');
    console.log('Buy Now clicked for product:', id, title);
  };

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });
    
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart`,
    });
    console.log('Add to Cart clicked for product:', id, title);
  };

  const handleWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${title} has been added to your wishlist`,
    });
    console.log('Wishlist clicked for product:', id, title);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {badge}
          </span>
        )}
        <button 
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
          {title}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">({reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
            )}
          </div>
          {originalPrice && (
            <span className="text-sm text-green-600 font-semibold">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% off
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{shipping}</p>
        <p className="text-sm text-gray-500 mb-3">Sold by: {seller}</p>
        
        <div className="flex space-x-2">
          <Button 
            onClick={handleBuyNow}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Buy It Now
          </Button>
          <Button 
            onClick={handleAddToCart}
            variant="outline" 
            className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
