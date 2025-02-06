import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50">
      <nav className="bg-gray-900 border-b border-gray-800 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="" className="mr-3 h-12" alt="Logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm px-4 py-2 rounded-lg duration-200 ${isActive ? "text-indigo-400" : "text-gray-300"
                } hover:text-white`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm px-4 py-2 rounded-lg duration-200 ${isActive ? "text-indigo-400" : "text-gray-300"
                } hover:text-white`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm px-4 py-2 rounded-lg duration-200 ${isActive ? "text-indigo-400" : "text-gray-300"
                } hover:text-white`
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm px-4 py-2 rounded-lg duration-200 ${isActive ? "text-indigo-400" : "text-gray-300"
                } hover:text-white`
              }
            >
              About Us
            </NavLink>
          </div>

          {/* Login & Sign Up */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="#"
              className="text-gray-300 hover:text-white bg-gray-800 rounded-full text-sm px-4 py-2 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="rounded-full text-white bg-indigo-600 hover:bg-indigo-700 text-sm px-4 py-2 transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col mt-4 font-medium space-y-2 bg-gray-800 p-4 rounded-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block text-center py-2 px-4 rounded-lg duration-200 ${isActive ? "text-indigo-400" : "text-gray-300"
                  } hover:text-white`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block text-center py-2 px-4 rounded-lg duration-200 ${isActive ? "text-indigo-400" : "text-gray-300"
                  } hover:text-white`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block text-center py-2 px-4 rounded-lg duration-200 ${isActive ? "text-indigo-400" : "text-gray-300"
                  } hover:text-white`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block text-center py-2 px-4 rounded-lg duration-200 ${isActive ? "text-indigo-400" : "text-gray-300"
                  } hover:text-white`
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col items-center mt-4 space-y-2">
            <Link
              to="#"
              className="text-gray-300 hover:text-white bg-gray-800 rounded-full text-sm px-4 py-2 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="rounded-full text-white bg-indigo-600 hover:bg-indigo-700 text-sm px-4 py-2 transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
