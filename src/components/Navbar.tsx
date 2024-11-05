import React from 'react';
import { Menu, X, Building2, ArrowRight, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PayrollLink</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#integration" className="text-gray-600 hover:text-gray-900">Integration</a>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Contact Sales <MessageSquare className="ml-2 h-4 w-4" />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#integration" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Integration</a>
            <button className="w-full text-left px-3 py-2 text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Contact Sales <MessageSquare className="ml-2 h-4 w-4" />
            </button>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}