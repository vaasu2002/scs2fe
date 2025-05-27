export interface Bucket{
    id: string;
    name: string;
    createdAt: string;
}

export interface Object {
    _id: string;
    key: string;
    bucket: string;
    originalname: string;
    storageKey: string;
    encoding: string;
    mimetype: string;
    size: number;
    owner: string;
    accessLevel: 'private' | 'public';
    tags: string[];
    contentHash: string;
    versions: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface ApiResponse {
    success: boolean;
    message: string;
    error: string;
    data: Object[];
}

export interface DirectoryItem {
    type: 'directory' | 'file';
    name: string;
    path?: string;
    data?: Object;
}