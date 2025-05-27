import React from 'react';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';
import { Bucket } from '@/types';

interface BreadcrumbHeaderProps {
    selectedBucket: Bucket;
    currentPath: string;
    onBack: () => void;
}

const BreadcrumbHeader: React.FC<BreadcrumbHeaderProps> = ({
    selectedBucket,
    currentPath,
    onBack
}) => {
    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4">
            <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
            </button>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Home className="w-4 h-4" />
                <span>{selectedBucket.name}</span>
                {currentPath && (
                <>
                    <ChevronRight className="w-4 h-4" />
                    <span>{currentPath}</span>
                </>
                )}
            </div>
            </div>
        </div>
        </div>
    );
};

export {BreadcrumbHeader};