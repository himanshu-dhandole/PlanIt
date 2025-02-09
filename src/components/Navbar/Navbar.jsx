import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Rocket } from "lucide-react";

const GlassmorphicCard = ({ children, className = "" }) => (
  <div
    className={`rounded-xl border border-slate-700/50 bg-slate-900/50 shadow-lg backdrop-blur-lg ${className}`}
  >
    {children}
  </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <GlassmorphicCard className="rounded-t-xl">
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2.5 lg:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="transition-transform duration-300 hover:scale-110">
              <Rocket className="h-8 w-8 text-indigo-400" />
            </div>
            <span className="ml-2 text-xl font-bold text-white">PlanIt</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-indigo-400 focus:outline-none lg:hidden"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
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
                className="h-6 w-6"
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

          <div className="hidden lg:flex lg:items-center lg:space-x-6">
  {[
    { name: "Home", path: "/" },
    { name: "Organizers", path: "/organizersearchpage" },
    { name: "Services", path: "/serviceproviders" },
    { name: "Chat", path: "/chat" },
  ].map((link) => (
    <NavLink
      key={link.name}
      to={link.path}
      className={({ isActive }) =>
        `rounded-lg px-4 py-2 text-sm duration-200 ${
          isActive
            ? "bg-slate-800/50 text-indigo-400"
            : "text-slate-300 hover:bg-slate-800/30 hover:text-indigo-400"
        }`
      }
    >
      {link.name}
    </NavLink>
  ))}
</div>

          {/* Login & Sign Up */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Link
              to="/logout"
              className="rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              Log out
            </Link>
            <Link
              to="/hostprofile"
              className="rounded-full bg-indigo-500 px-4 py-2 text-sm text-white transition-colors hover:bg-indigo-600"
            >
              P
            </Link>
          </div>
        </nav>
      </GlassmorphicCard>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      >
        <GlassmorphicCard className="fixed left-0 right-0 top-16 z-40 p-4">
          <ul className="mt-4 flex flex-col space-y-2 font-medium">
            {[
             { name: "Home", path: "/" },
             { name: "Organizers", path: "/organizersearchpage" },
             { name: "Services", path: "/serviceproviders" },
             { name: "chat", path: "/chat" },
            ].map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 text-center duration-200 ${
                      isActive
                        ? "bg-slate-800/50 text-indigo-400"
                        : "text-slate-300 hover:bg-slate-800/30 hover:text-indigo-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="mt-4 flex flex-col items-center space-y-2">
            <Link
              to="#"
              className="w-full rounded-full bg-slate-800/80 px-4 py-2 text-center text-sm text-slate-300 transition-colors hover:text-white"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="w-full rounded-full bg-indigo-500 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-indigo-600"
            >
              Get started
            </Link>
          </div>
        </GlassmorphicCard>
      </div>
    </header>
  );
}
