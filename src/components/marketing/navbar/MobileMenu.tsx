import { motion } from 'framer-motion';
import { JSX } from 'react';

interface MobileMenuProps {
    closeMenu: () => void;
}

const navItems = ['Features', 'How It Works', 'Pricing', 'Testimonials', 'FAQ'];

export default function MobileMenu({ closeMenu }: MobileMenuProps): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
        >
            <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map(item => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={closeMenu}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    >
                        {item}
                    </a>
                ))}
                <div className="pt-4 pb-2 border-t border-gray-200">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
                        Sign In
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 mt-2">
                        Get Started
                    </a>
                </div>
            </div>
        </motion.div>
    );
}