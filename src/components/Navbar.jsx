import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-20 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} className="h-10 w-10 mr-2" alt="logo" />
            <div className="span text-xl tracking-tight">VirualR</div>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((items, index) => (
              <li key={index} className="space-x-4 items-center tracking-tight">
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3">
              Create Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((items, index) => (
                <li key={index} className="py-4">
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3">
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
