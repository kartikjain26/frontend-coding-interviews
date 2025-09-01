import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Folder, MOCK_DATA} from './types/index'
import FolderComponent from './components/FolderComponent';

function App() {
  const [folders, setFolders] = useState<Folder[]>(MOCK_DATA);

  const handleExpland = (id: string) => {
    console.log("Inside handle Expamnd", folders)
    console.log(id)
    const arr = folders.map((folder, i) => {
      if(id === folder.id) {
        return {...folder,  isOpen: !folder.isOpen}
      }
      return folder;
    })

    setFolders(arr);
  }

  const checkParentIsOpen = (parentId: string, folders: Folder[]) => {
    const parentFolder = folders.find((f) => f.id === parentId);

    console.log('parent', parentFolder);

    return parentFolder?.isOpen;
  }

  const getDepth = (folderId: string, folders: Folder[]): number => {
    const folder = folders.find((f) => f.id === folderId );

    if(!folder?.parentId) return 0;

    return 1 + getDepth(folder.parentId, folders);
  }
  
  return (
    <div className="App">
      <h1>Sidebar Folders</h1>
      <div className='folder-container'>
        {
          folders.map((folder, i) => {
            const depth = getDepth(folder.id, folders);
            return <div className='folder-row'>
              {
                folder.parentId == null && 
                  <FolderComponent 
                      depth={depth} 
                      name={folder.name}
                      folderId={folder.id}
                      handleExpland={handleExpland}
                  />
              }
              {
                folder.parentId != null && checkParentIsOpen(folder.parentId!, folders) &&
                <FolderComponent 
                      depth={depth} 
                      name={folder.name}
                      folderId={folder.id}
                      handleExpland={handleExpland}
                  />
              }
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
