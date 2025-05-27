import { useState } from 'react';
import { Bucket, Object } from '../types';
import { mockBuckets, mockFiles } from '../data/mockData';

export const useSCS2State = () => {
    const [selectedBucket, setSelectedBucket] = useState<Bucket | null>(null);
    const [currentPath, setCurrentPath] = useState<string>('');
    const [files, setFiles] = useState<Object[]>([]);
    const [buckets, setBuckets] = useState<Bucket[]>(mockBuckets);
  
    const [showCreateDir, setShowCreateDir] = useState<boolean>(false);
    const [showCreateBucket, setShowCreateBucket] = useState<boolean>(false);
    const [newDirName, setNewDirName] = useState<string>('');
    const [newBucketName, setNewBucketName] = useState<string>('');

    const handleBucketClick = (bucket: Bucket): void => {
        setSelectedBucket(bucket);
        setCurrentPath('');
        setFiles(mockFiles);
    };

    const handleBack = (): void => {
        if(currentPath){
            const parts = currentPath.split('/');
            parts.pop();
            setCurrentPath(parts.join('/'));
        }
        else{
            setSelectedBucket(null);
            setFiles([]);
        }
    };

    const handleCreateDirectory = (): void => {
        if (newDirName.trim() && selectedBucket) {
        const newPath = currentPath ? `${currentPath}/${newDirName.trim()}` : newDirName.trim();
        
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

    const handleCreateBucket = (): void => {
        if (newBucketName.trim()) {
        const newBucket: Bucket = {
            id: Date.now().toString(),
            name: newBucketName.trim(),
            createdAt: new Date().toLocaleDateString('en-CA')
        };
        
        setBuckets([...buckets, newBucket]);
        setNewBucketName('');
        setShowCreateBucket(false);
        }
    };

    return {
        selectedBucket,
        currentPath,
        files,
        buckets,
        showCreateDir,
        showCreateBucket,
        newDirName,
        newBucketName,
        
        setSelectedBucket,
        setCurrentPath,
        setShowCreateDir,
        setShowCreateBucket,
        setNewDirName,
        setNewBucketName,
        
        handleBucketClick,
        handleBack,
        handleCreateDirectory,
        handleCreateBucket
    };
};