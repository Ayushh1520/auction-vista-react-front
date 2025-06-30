
import { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Motors',
    'Collectibles',
    'Sports',
    'Toys & Hobbies',
    'Health & Beauty',
    'Books',
    'Music'
  ];

  const handleCategorySelect = (category: string) => {
    const categorySlug = category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
    navigate(`/category/${categorySlug}`);
    console.log('Category selected:', category);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 px-3 py-2 rounded-md hover:bg-gray-200"
      >
        <Menu className="h-4 w-4" />
        <span>Shop by category</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 min-w-48">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategorySelect(category)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 hover:text-blue-600"
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
