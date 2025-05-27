import { Bucket, Object } from '../types';

export const mockBuckets: Bucket[] = [
    { id: '682f8f1450d22faae0bcfb8d', name: 'my-app-bucket', createdAt: '2024-01-15' },
    { id: '682f8f1450d22faae0bcfb8e', name: 'media-storage', createdAt: '2024-02-20' },
    { id: '682f8f1450d22faae0bcfb8f', name: 'backup-bucket', createdAt: '2024-03-10' }
];

export const mockFiles: Object[] = [
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
];