
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import AuthModal from './AuthModal';
import { categories } from '../data/mockData';

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-secondary">
                UIDesign<span className="text-accent">.</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-4">
                <div className="relative">
                    <button
                        onMouseEnter={() => setCategoryDropdownOpen(true)}
                        onMouseLeave={() => setCategoryDropdownOpen(false)}
                        className="text-gray-600 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Categories
                    </button>
                    {isCategoryDropdownOpen && (
                        <div
                            onMouseEnter={() => setCategoryDropdownOpen(true)}
                            onMouseLeave={() => setCategoryDropdownOpen(false)}
                            className="absolute mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        >
                            <div className="py-1 grid grid-cols-1 gap-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {categories.map(cat => (
                                    <NavLink
                                        key={cat.id}
                                        to={`/category/${cat.id}`}
                                        className={({isActive}) => `block px-4 py-2 text-sm ${isActive ? 'bg-indigo-50 text-secondary' : 'text-gray-700'} hover:bg-gray-100 hover:text-gray-900`}
                                        role="menuitem"
                                    >
                                        {cat.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative text-gray-600 hover:text-secondary p-2">
                <CartIcon />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              {isAuthenticated ? (
                 <div className="flex items-center space-x-4">
                     <Link to="/account" className="text-gray-600 hover:text-secondary p-2">
                        <UserIcon/>
                     </Link>
                     <button onClick={logout} className="text-sm font-medium text-gray-600 hover:text-secondary">Logout</button>
                 </div>
              ) : (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login / Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
