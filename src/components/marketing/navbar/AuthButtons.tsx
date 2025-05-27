import { motion } from 'framer-motion';
import { JSX } from 'react';

interface AuthButtonsProps {
    isScrolled: boolean;
}

export default function AuthButtons({ isScrolled }: AuthButtonsProps): JSX.Element {
    return (
        <>
            <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
            >
                Sign In
            </motion.button>
            <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`px-4 py-2 rounded-lg font-medium ${
                    isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
            >
                Get Started
            </motion.button>
        </>
    );
}