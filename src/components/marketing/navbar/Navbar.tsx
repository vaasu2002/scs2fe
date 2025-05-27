import React, { JSX, useEffect, useState } from 'react';
import Logo from '../../Logo';
import DesktopMenu from './DesktopMenu';
import AuthButtons from './AuthButtons';
import MobileMenuToggle from './MobileMenuToggle';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';

export function Navbar(): JSX.Element {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold"
                        >
                            <Logo isScrolled={isScrolled} />
                        </motion.div>
                        <DesktopMenu isScrolled={isScrolled} />
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <AuthButtons isScrolled={isScrolled} />
                    </div>

                    <div className="md:hidden">
                        <MobileMenuToggle 
                            isOpen={isMobileMenuOpen} 
                            isScrolled={isScrolled} 
                            toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        />
                    </div>
                </div>

                {isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />}
            </div>
        </header>
    );
}
