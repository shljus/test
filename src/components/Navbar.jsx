import React from 'react';
import HamburgerMenu from './HamburgerMenu';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <HamburgerMenu />
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Link 1
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Link 2
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
            Link 3
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
