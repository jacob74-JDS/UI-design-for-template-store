
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-light mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} UIDesign. All rights reserved. A modern marketplace for UI designers.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
