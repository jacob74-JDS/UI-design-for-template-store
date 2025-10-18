
import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, clearCart, cartTotal } = useCart();

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-500">Your cart is empty.</p>
          <Link to="/" className="mt-4 inline-block bg-secondary text-white px-6 py-2 rounded-md hover:bg-indigo-700">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-16 object-cover rounded-md" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    &times;
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Clear Cart
            </button>
            <div className="text-right">
              <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
              <button className="mt-2 w-full bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 font-bold">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
