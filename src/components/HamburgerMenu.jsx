import { useState } from "react";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-xl font-semibold">My Website</h1>
      </div>
      <button
        className="block text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
        onClick={handleMenuClick}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.293 4.293a1 1 0 0 0-1.414-1.414l-14 14a1 1 0 1 0 1.414 1.414l14-14zM5.707 19.707a1 1 0 0 0 1.414 1.414l14-14a1 1 0 0 0-1.414-1.414l-14 14z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
            />
          )}
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white">
          <div className="px-4 py-2 border-b border-gray-200">
            <h2 className="text-lg font-medium">Menu</h2>
          </div>
          <ul className="px-4 py-2">
            <li>
              <a
                href="#"
                className="block py-1 text-gray-800 hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 text-gray-800 hover:text-gray-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 text-gray-800 hover:text-gray-900"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
