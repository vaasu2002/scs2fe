import { motion } from 'framer-motion';
import React from 'react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
            }`}>
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
            <div className="flex items-center">
                <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
                >
                <div className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                    SCS<sup className="text-sm">2</sup>
                </div>
                </motion.div>
                
                <nav className="hidden md:flex ml-10 space-x-8">
                {['Features', 'How It Works', 'Pricing', 'Testimonials', 'FAQ'].map((item, index) => (
                    <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                        isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                    >
                    {item}
                    </motion.a>
                ))}
                </nav>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
                <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
                >
                Sign In
                </motion.button>
                <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`px-4 py-2 rounded-lg font-medium ${
                    isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
                >
                Get Started
                </motion.button>
            </div>
            
            <div className="md:hidden">
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
                </button>
            </div>
            </div>
            
            {/* Mobile menu */}
            {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                {['Features', 'How It Works', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                    <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                    >
                    {item}
                    </a>
                ))}
                <div className="pt-4 pb-2 border-t border-gray-200">
                    <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    >
                    Sign In
                    </a>
                    <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 mt-2"
                    >
                    Get Started
                    </a>
                </div>
                </div>
            </motion.div>
            )}
        </div>
        </header>
    );
}