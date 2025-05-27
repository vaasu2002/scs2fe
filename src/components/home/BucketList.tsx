import React from 'react';
import { ChevronRight, Folder, Plus } from 'lucide-react';
import { Bucket } from '@/types';

interface BucketListProps {
    buckets: Bucket[];
    onBucketClick: (bucket: Bucket) => void;
    onCreateBucket: () => void;
}

export const BucketList: React.FC<BucketListProps> = ({
    buckets,
    onBucketClick,
    onCreateBucket
}) => {
  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">S3 Buckets</h1>
          <button
            onClick={onCreateBucket}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create Bucket</span>
          </button>
        </div>
        
        <div className="grid gap-4">
          {buckets.map((bucket) => (
            <div
              key={bucket.id}
              onClick={() => onBucketClick(bucket)}
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
};