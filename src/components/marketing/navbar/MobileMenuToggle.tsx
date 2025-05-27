import { JSX } from "react";

interface MobileMenuToggleProps {
    isOpen: boolean;
    isScrolled: boolean;
    toggleMenu: () => void;
}

export default function MobileMenuToggle({ isOpen, isScrolled, toggleMenu }: MobileMenuToggleProps): JSX.Element {
    return (
        <button onClick={toggleMenu} className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>
    );
}