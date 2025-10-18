
import React from 'react';
import { useParams } from 'react-router-dom';
import { products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  if (!category) {
    return <div className="text-center py-10">Category not found.</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center capitalize">{category.name} Designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categoryProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {categoryProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No products found in this category yet.</p>
      )}
    </div>
  );
};

export default CategoryPage;
