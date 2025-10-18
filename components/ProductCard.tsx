
import React from 'react';
import type { Product } from '../types';
import { useCart } from '../hooks/useCart';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
  onPreview: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPreview }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 group">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="flex flex-col sm:flex-row gap-2">
             <button
               onClick={() => onPreview(product)}
               className="bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transform transition-transform duration-300 hover:scale-105"
             >
               Live Preview
             </button>
             <button
               onClick={() => addToCart(product)}
               className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transform transition-transform duration-300 hover:scale-105"
             >
               Add to Cart
             </button>
           </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-secondary">${product.price.toFixed(2)}</p>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
