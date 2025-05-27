import { motion } from 'framer-motion';
import { JSX } from 'react';

interface DesktopMenuProps {
    isScrolled: boolean;
}

const navItems = ['Features', 'How It Works', 'Pricing', 'Testimonials', 'FAQ'];

export default function DesktopMenu({ isScrolled }: DesktopMenuProps): JSX.Element {
    return (
        <nav className="hidden md:flex ml-10 space-x-8">
            {navItems.map((item, index) => (
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
    );
}
