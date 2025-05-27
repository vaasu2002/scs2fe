'use client';

import React from 'react';
import { DirectoryItem } from '@/types';
import { parseDirectoryStructure } from '@/utils/fileUtils';
import { useSCS2State } from '@/hooks/useSCS2State';
import {
  BucketList,BreadcrumbHeader,BucketContents
} from '@/components/home';
import {
  CreateBucketModal,CreateDirectoryModal
} from '@/components/modals';

const Home: React.FC = () => {
  const {
    selectedBucket,
    currentPath,
    files,
    buckets,
    showCreateDir,
    showCreateBucket,
    newDirName,
    newBucketName,
    setCurrentPath,
    setShowCreateDir,
    setShowCreateBucket,
    setNewDirName,
    setNewBucketName,
    handleBucketClick,
    handleBack,
    handleCreateDirectory,
    handleCreateBucket
  } = useSCS2State();

  const handleDirectoryClick = (directory: DirectoryItem): void => {
    if (directory.path) {
      setCurrentPath(directory.path);
    }
  };

  const handleCreateDirInPath = (e: React.MouseEvent, item: DirectoryItem): void => {
    e.stopPropagation();
    if (item.path) {
      setCurrentPath(item.path);
      setShowCreateDir(true);
    }
  };

  if (!selectedBucket) {
    return (
      <>
        <BucketList
          buckets={buckets}
          onBucketClick={handleBucketClick}
          onCreateBucket={() => setShowCreateBucket(true)}
        />
        <CreateBucketModal
          isOpen={showCreateBucket}
          bucketName={newBucketName}
          onBucketNameChange={setNewBucketName}
          onClose={() => setShowCreateBucket(false)}
          onCreate={handleCreateBucket}
        />
      </>
    );
  }

  const currentItems = parseDirectoryStructure(files, currentPath);
  
  return (
    <div className="bg-gray-50">
      <BreadcrumbHeader
        selectedBucket={selectedBucket}
        currentPath={currentPath}
        onBack={handleBack}
      />

      <CreateDirectoryModal
        isOpen={showCreateDir}
        directoryName={newDirName}
        onDirectoryNameChange={setNewDirName}
        onClose={() => setShowCreateDir(false)}
        onCreate={handleCreateDirectory}
      />

      <div className="max-w-6xl mx-auto p-6">
        <BucketContents
          items={currentItems}
          currentPath={currentPath}
          onDirectoryClick={handleDirectoryClick}
          onCreateFolder={() => setShowCreateDir(true)}
          onCreateFolderInPath={handleCreateDirInPath}
        />
      </div>
    </div>
  );
};

export default Home;