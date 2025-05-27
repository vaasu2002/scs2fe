'use client';

import React, { useState } from 'react';
import { ChevronRight, Folder, File, Plus, ArrowLeft, Home } from 'lucide-react';
import { Bucket, Object, DirectoryItem } from '@/types';

const S3Frontend: React.FC = () => {
    const [selectedBucket, setSelectedBucket] = useState<Bucket | null>(null);
    const [currentPath, setCurrentPath] = useState<string>('');
    const [files, setFiles] = useState<Object[]>([]);
    const [newDirName, setNewDirName] = useState<string>('');
    const [showCreateDir, setShowCreateDir] = useState<boolean>(false);

    // Mock buckets data
    const buckets: Bucket[] = [
        { id: '682f8f1450d22faae0bcfb8d', name: 'my-app-bucket', createdAt: '2024-01-15' },
        { id: '682f8f1450d22faae0bcfb8e', name: 'media-storage', createdAt: '2024-02-20' },
        { id: '682f8f1450d22faae0bcfb8f', name: 'backup-bucket', createdAt: '2024-03-10' }
    ];

    // Mock API response based on your provided structure
    const mockApiResponse = {
        success: true,
        message: "Files retrieved successfully",
        error: "",
        data: [
        {
            "_id": "6833359ed1265afe026e9ead",
            "key": "/folder1/folder2/abcd.pdf",
            "bucket": "682f8f1450d22faae0bcfb8d",
            "originalname": "abcd.pdf",
            "storageKey": "202109855836667904",
            "encoding": "7bit",
            "mimetype": "application/pdf",
            "size": 5445,
            "owner": "682f2fe38eb5a2c15fe9569d",
            "accessLevel": "private" as const,
            "tags": [],
            "contentHash": "87f61ac3fb29663909af8f0287f7d72824d88bd5cdaab664c66c6eff965f730f",
            "versions": [],
            "createdAt": "2025-05-25T15:22:06.778Z",
            "updatedAt": "2025-05-25T15:25:44.704Z",
            "__v": 0
        },
        {
            "_id": "6833359ed1265afe026e9eae",
            "key": "/folder1/document.docx",
            "bucket": "682f8f1450d22faae0bcfb8d",
            "originalname": "document.docx",
            "storageKey": "202109855836667905",
            "encoding": "7bit",
            "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "size": 12340,
            "owner": "682f2fe38eb5a2c15fe9569d",
            "accessLevel": "private" as const,
            "tags": [],
            "contentHash": "97f61ac3fb29663909af8f0287f7d72824d88bd5cdaab664c66c6eff965f730g",
            "versions": [],
            "createdAt": "2025-05-25T14:20:06.778Z",
            "updatedAt": "2025-05-25T14:25:44.704Z",
            "__v": 0
        },
        {
            "_id": "6833359ed1265afe026e9eaf",
            "key": "/images/photo1.jpg",
            "bucket": "682f8f1450d22faae0bcfb8d",
            "originalname": "photo1.jpg",
            "storageKey": "202109855836667906",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "size": 245600,
            "owner": "682f2fe38eb5a2c15fe9569d",
            "accessLevel": "public" as const,
            "tags": [],
            "contentHash": "a7f61ac3fb29663909af8f0287f7d72824d88bd5cdaab664c66c6eff965f730h",
            "versions": [],
            "createdAt": "2025-05-25T13:15:06.778Z",
            "updatedAt": "2025-05-25T13:20:44.704Z",
            "__v": 0
        },
        {
            "_id": "6833359ed1265afe026e9eb0",
            "key": "/root-file.txt",
            "bucket": "682f8f1450d22faae0bcfb8d",
            "originalname": "root-file.txt",
            "storageKey": "202109855836667907",
            "encoding": "7bit",
            "mimetype": "text/plain",
            "size": 1024,
            "owner": "682f2fe38eb5a2c15fe9569d",
            "accessLevel": "private" as const,
            "tags": [],
            "contentHash": "b7f61ac3fb29663909af8f0287f7d72824d88bd5cdaab664c66c6eff965f730i",
            "versions": [],
            "createdAt": "2025-05-25T12:10:06.778Z",
            "updatedAt": "2025-05-25T12:15:44.704Z",
            "__v": 0
        }
        ]
    };

    const handleBucketClick = (bucket: Bucket): void => {
        setSelectedBucket(bucket);
        setCurrentPath('');
        // Mock API call - in real implementation, you'd fetch from your API
        setFiles(mockApiResponse.data);
    };

    const parseDirectoryStructure = (files: Object[], currentPath: string): DirectoryItem[] => {
        const items = new Map<string, DirectoryItem>();

        files.forEach((file: Object) => {
            const key = file.key.startsWith('/') ? file.key.slice(1) : file.key;
        
        // Filter based on current path
        let relativePath = key;
        if (currentPath) {
            if (!key.startsWith(currentPath + '/')) return;
            relativePath = key.slice(currentPath.length + 1);
        }
        
        const parts = relativePath.split('/');
        
        if (parts.length === 1) {
            // It's a file in current directory
            items.set(parts[0], {
                type: 'file',
                name: parts[0],
                data: file
            });
        } else {
            // It's inside a directory
            const dirName = parts[0];
            if (!items.has(dirName)) {
            items.set(dirName, {
                type: 'directory',
                name: dirName,
                path: currentPath ? `${currentPath}/${dirName}` : dirName
            });
            }
        }
        });
        
        return Array.from(items.values()).sort((a, b) => {
        if (a.type !== b.type) return a.type === 'directory' ? -1 : 1;
        return a.name.localeCompare(b.name);
        });
    };

    const handleDirectoryClick = (directory: DirectoryItem): void => {
        if (directory.path) {
        setCurrentPath(directory.path);
        }
    };

    const handleBack = (): void => {
        if (currentPath) {
        const parts = currentPath.split('/');
        parts.pop();
        setCurrentPath(parts.join('/'));
        } else {
        setSelectedBucket(null);
        setFiles([]);
        }
    };

  const handleCreateDirectory = (): void => {
    if (newDirName.trim() && selectedBucket) {
      // In real implementation, you'd make an API call here
      const newPath = currentPath ? `${currentPath}/${newDirName.trim()}` : newDirName.trim();
      
      // Mock creating a directory by adding a placeholder file
      const mockFile: Object = {
        "_id": Date.now().toString(),
        "key": `/${newPath}/.keep`,
        "bucket": selectedBucket.id,
        "originalname": ".keep",
        "storageKey": Date.now().toString(),
        "encoding": "7bit",
        "mimetype": "text/plain",
        "size": 0,
        "owner": "682f2fe38eb5a2c15fe9569d",
        "accessLevel": "private",
        "tags": [],
        "contentHash": "",
        "versions": [],
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
      };
      
      setFiles([...files, mockFile]);
      setNewDirName('');
      setShowCreateDir(false);
    }
  };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
        });
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
        handleCreateDirectory();
        }
    };

    const handleCreateDirInPath = (e: React.MouseEvent, item: DirectoryItem): void => {
        e.stopPropagation();
        if (item.path) {
        setCurrentPath(item.path);
        setShowCreateDir(true);
        }
    };

    if(!selectedBucket){
        return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">S3 Buckets</h1>
            
            <div className="grid gap-4">
                {buckets.map((bucket) => (
                <div
                    key={bucket.id}
                    onClick={() => handleBucketClick(bucket)}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 cursor-pointer transition-all duration-200"
                >
                    <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Folder className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                        <h3 className="font-semibold text-gray-900">{bucket.name}</h3>
                        <p className="text-sm text-gray-500">Created: {bucket.createdAt}</p>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        );
    }

  const currentItems = parseDirectoryStructure(files, currentPath);
    return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBack}
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
            
            <button
              onClick={() => setShowCreateDir(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Folder</span>
            </button>
          </div>
        </div>
    </div>

      {/* Create Directory Modal */}
      {showCreateDir && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Create New Folder</h3>
            <input
              type="text"
              value={newDirName}
              onChange={(e) => setNewDirName(e.target.value)}
              placeholder="Folder name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={handleKeyPress}
            />
            <div className="flex space-x-3">
              <button
                onClick={handleCreateDirectory}
                className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Create
              </button>
              <button
                onClick={() => {
                  setShowCreateDir(false);
                  setNewDirName('');
                }}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {currentPath ? `Contents of /${currentPath}` : 'Bucket Contents'}
            </h2>
            
            {currentItems.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Folder className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>This folder is empty</p>
              </div>
            ) : (
              <div className="space-y-2">
                {currentItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => item.type === 'directory' && handleDirectoryClick(item)}
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
                          onClick={(e) => handleCreateDirInPath(e, item)}
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
      </div>
    </div>
  );
};

export default S3Frontend;