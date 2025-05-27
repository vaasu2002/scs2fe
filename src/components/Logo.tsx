import { motion } from 'framer-motion';
import { JSX } from 'react';

interface LogoProps {
    isScrolled: boolean;
}

export default function Logo({ isScrolled }: LogoProps): JSX.Element {
    return (
        <div className={`${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            SCS<sup className="text-sm">2</sup>
        </div>
    );
}