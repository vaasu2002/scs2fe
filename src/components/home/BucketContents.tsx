import React from 'react';
import { ChevronRight, Folder, File, Plus } from 'lucide-react';
import { DirectoryItem } from '@/types';
import { formatFileSize, formatDate } from '@/utils/fileUtils';

interface BucketContentsProps {
  items: DirectoryItem[];
  currentPath: string;
  onDirectoryClick: (directory: DirectoryItem) => void;
  onCreateFolder: () => void;
  onCreateFolderInPath: (e: React.MouseEvent, item: DirectoryItem) => void;
}

const BucketContents: React.FC<BucketContentsProps> = ({
  items,
  currentPath,
  onDirectoryClick,
  onCreateFolder,
  onCreateFolderInPath
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {currentPath ? `Contents of /${currentPath}` : 'Bucket Contents'}
          </h2>
          <button
            onClick={onCreateFolder}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Folder</span>
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Folder className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>This folder is empty</p>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => item.type === 'directory' && onDirectoryClick(item)}
                className={`flex items-center justify-between p-3 rounded-md border ${
                  item.type === 'directory' 
                    ? 'hover:bg-blue-50 hover:border-blue-200 cursor-pointer' 
                    : 'hover:bg-gray-50'
                } transition-colors`}
              >
                <div className="flex items-center space-x-3">
                  {item.type === 'directory' ? (
                    <Folder className="w-5 h-5 text-blue-600" />
                  ) : (
                    <File className="w-5 h-5 text-gray-500" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    {item.type === 'file' && item.data && (
                      <div className="flex space-x-4 text-sm text-gray-500">
                        <span>{formatFileSize(item.data.size)}</span>
                        <span>{item.data.mimetype}</span>
                        <span>{formatDate(item.data.createdAt)}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {item.type === 'directory' && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => onCreateFolderInPath(e, item)}
                      className="p-1 hover:bg-blue-100 rounded transition-colors"
                      title="Create folder inside"
                    >
                      <Plus className="w-4 h-4 text-blue-600" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export {BucketContents};