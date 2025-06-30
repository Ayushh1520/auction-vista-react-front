
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' & ')
    : 'Category';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">{categoryTitle}</h1>
        </div>
        <ProductGrid category={category} />
      </div>
    </div>
  );
};

export default Category;
