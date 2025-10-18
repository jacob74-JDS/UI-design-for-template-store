
import React, { useState } from 'react';
import { products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import DesignIdeaGenerator from '../components/DesignIdeaGenerator';
import ProductPreviewModal from '../components/ProductPreviewModal';
import type { Product } from '../types';

const HomePage: React.FC = () => {
  const featuredCategories = categories.slice(0, 5); // Show first 5 categories on home
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);

  return (
    <>
      <div className="space-y-16">
        <section className="text-center bg-white p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
            Discover Your Next UI Design
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our curated collection of premium UI kits and templates to kickstart your next project.
          </p>
           <DesignIdeaGenerator />
        </section>

        {featuredCategories.map(category => (
          <section key={category.id}>
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-secondary pl-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products
                .filter(p => p.category === category.id)
                .slice(0, 4) // Show 4 products per category on home
                .map(product => (
                  <ProductCard key={product.id} product={product} onPreview={setPreviewProduct} />
                ))}
            </div>
          </section>
        ))}
      </div>
      {previewProduct && (
        <ProductPreviewModal 
          product={previewProduct}
          onClose={() => setPreviewProduct(null)}
        />
      )}
    </>
  );
};

export default HomePage;
