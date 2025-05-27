import { motion } from 'framer-motion';
import { JSX } from 'react';

interface LogoProps {
    isScrolled: boolean;
}

export default function Logo({ isScrolled }: LogoProps): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
        >
            <div className={`${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                SCS<sup className="text-sm">2</sup>
            </div>
        </motion.div>
    );
}