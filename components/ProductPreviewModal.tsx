
import React from 'react';
import type { Product } from '../types';
import { useCart } from '../hooks/useCart';
import StarRating from './StarRating';

interface ProductPreviewModalProps {
  product: Product;
  onClose: () => void;
}

const ProductPreviewModal: React.FC<ProductPreviewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center" 
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-primary mb-2">{product.name}</h2>
            <button onClick={onClose} className="text-3xl text-gray-500 hover:text-gray-800 leading-none">&times;</button>
          </div>
          <div className="mb-4">
            <StarRating rating={product.rating} />
          </div>
          <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
          <div className="mt-auto flex items-center justify-between">
            <p className="text-3xl font-extrabold text-secondary">${product.price.toFixed(2)}</p>
            <button
              onClick={handleAddToCart}
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewModal;
