import React, { useState } from 'react';
import '../App.css';

interface FolderProps {
    depth: number,
    name: string,
    folderId: string,
    handleExpland: any
}

const FolderComponent: React.FC<FolderProps> = ({depth, name, handleExpland, folderId}) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);


    return <div>
        <div 
            className='folder-item'
                style={ {margin:`${depth*30}px`}}
            >
                <p 
                    className='open-button'
                    onClick={() => handleExpland(folderId)}
                >+</p>
                <p>{name}</p>
            </div>
    </div>
}

export default FolderComponent;