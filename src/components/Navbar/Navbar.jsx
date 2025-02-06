import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Rocket } from "lucide-react";

const GlassmorphicCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-lg bg-slate-900/50 border border-slate-700/50 shadow-lg rounded-xl ${className}`}>
    {children}
  </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <GlassmorphicCard className="rounded-t-xl">
        <nav className="px-4 lg:px-6 py-2.5 flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="transition-transform hover:scale-110 duration-300">
              <Rocket className="h-8 w-8 text-indigo-400" />
            </div>
            <span className="ml-2 text-xl font-bold text-white">PlanIt</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-300 hover:text-indigo-400 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm px-4 py-2 rounded-lg duration-200 ${
                    isActive 
                      ? "text-indigo-400 bg-slate-800/50" 
                      : "text-slate-300 hover:text-indigo-400 hover:bg-slate-800/30"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Login & Sign Up */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="#"
              className="text-slate-300 hover:text-white bg-slate-800/80 rounded-full text-sm px-4 py-2 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="rounded-full text-white bg-indigo-500 hover:bg-indigo-600 text-sm px-4 py-2 transition-colors"
            >
              Get started
            </Link>
          </div>
        </nav>
      </GlassmorphicCard>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      >
        <GlassmorphicCard className="fixed top-16 left-0 right-0 z-40 p-4">
          <ul className="flex flex-col mt-4 font-medium space-y-2">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-center py-2 px-4 rounded-lg duration-200 ${
                      isActive 
                        ? "text-indigo-400 bg-slate-800/50" 
                        : "text-slate-300 hover:text-indigo-400 hover:bg-slate-800/30"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col items-center mt-4 space-y-2">
            <Link
              to="#"
              className="w-full text-center text-slate-300 hover:text-white bg-slate-800/80 rounded-full text-sm px-4 py-2 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="w-full text-center rounded-full text-white bg-indigo-500 hover:bg-indigo-600 text-sm px-4 py-2 transition-colors"
            >
              Get started
            </Link>
          </div>
        </GlassmorphicCard>
      </div>
    </header>
  );
}