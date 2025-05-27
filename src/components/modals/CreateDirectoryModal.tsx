import React from 'react';

interface CreateDirectoryModalProps {
    isOpen: boolean;
    directoryName: string;
    onDirectoryNameChange: (name: string) => void;
    onClose: () => void;
    onCreate: () => void;
}

const CreateDirectoryModal: React.FC<CreateDirectoryModalProps> = ({
    isOpen,
    directoryName,
    onDirectoryNameChange,
    onClose,
    onCreate
}) => {
    if(!isOpen) return null;
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onCreate();
        }
    };

    const handleCancel = () => {
        onClose();
        onDirectoryNameChange('');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h3 className="text-lg font-semibold mb-4">Create New Folder</h3>
                <input
                    type="text"
                    value={directoryName}
                    onChange={(e) => onDirectoryNameChange(e.target.value)}
                    placeholder="Folder name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyPress={handleKeyPress}
                />
                <div className="flex space-x-3">
                <button
                    onClick={onCreate}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Create
                </button>
                <button
                    onClick={handleCancel}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors"
                >
                    Cancel
                </button>
                </div>
            </div>
        </div>
    );
};

export {CreateDirectoryModal};