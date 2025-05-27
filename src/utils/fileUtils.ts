import { DirectoryItem,Object } from '@/types';

export const formatFileSize = (bytes: number): string => {
    if(bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

export const parseDirectoryStructure = (files: Object[], currentPath: string): DirectoryItem[] => {
    const items = new Map<string, DirectoryItem>();
    
    files.forEach((file: Object) => {
        const key = file.key.startsWith('/') ? file.key.slice(1) : file.key;
        let relativePath = key;
        if(currentPath){
            if (!key.startsWith(currentPath + '/')) return;
            relativePath = key.slice(currentPath.length + 1);
        }
        
        const parts = relativePath.split('/');
    
        if(parts.length === 1){
            items.set(parts[0], {
                type: 'file',
                name: parts[0],
                data: file
            });
        }
        else{
            const dirName = parts[0];
            if(!items.has(dirName)){
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