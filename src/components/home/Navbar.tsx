'use client'
import { useState } from 'react';
import { 
    ChevronDown, User, Settings, LogOut 
} from 'lucide-react';
import Logo from '@/components/Logo';

export const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const username = "John Doe"; 
    return (
      <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center text-2xl font-bold">
              <Logo isScrolled={true}/>
            </div>
            
            <div className="relative">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-3 py-2"
                >
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-medium">{username}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
              <div className="py-1">
                <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                  Signed in as <span className="font-medium text-gray-900">{username}</span>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
                <hr className="my-1" />
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
                  <LogOut className="w-4 h-4" />
                  <span>Sign out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </nav>
  );
};