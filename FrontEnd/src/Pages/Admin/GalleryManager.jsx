import React, { useEffect, useState } from 'react'
import './GalleryManager.css'
import AdminNavBar from '../../Componants/Admin/AdminNavBar'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useFirebaseDb } from '../../Context/FirebaseContext'
import FolderManager from '../../Componants/Admin/FolderManager';

function GalleryManager() {
    const db = useFirebaseDb()
    const [folders, setFolders] = useState([])
    const [viewFolder, setViewFolder] = useState(folders[0])


    const createNewFolder = async (e) => {
        e.preventDefault()
        const folderName = e.target.folder_name.value

        try {
            await addDoc(collection(db, 'Gallery_Folders'), {
                folderName: folderName,
                numberOfImages: 0,
            })
            console.log(`Folder "${folderName}" created successfully.`);
        } catch (error) {
            console.error('Error creating folder: ', error);
        }
        e.target.reset()
        e.target.close_btn.click()
        window.location.reload()
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let querySnapshot = await getDocs(collection(db, 'Gallery_Folders'))
                const folderArray = [];
                querySnapshot.forEach((fold) => {
                    folderArray.push({ id: fold.id, ...fold.data() });
                });
                setFolders(folderArray)
            } catch (error) {
                console.error('Error fetching folder: ', error);
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        setViewFolder(folders[0])
    }, [folders])
    return (
        <>
            <AdminNavBar />
            <div className="main-div">
                <div className="folders-div">
                    <div className="add-new-folder">
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="bi bi-plus-square-fill"></i>
                        </button>
                    </div>
                    {
                        folders.map(folder => {
                            return (
                                <div className="folder" key={folder.id}
                                    onClick={() => { setViewFolder(folder) }}
                                >
                                    <i className="bi bi-folder-fill"></i>
                                    <div className='folder-text'>
                                        <h6>{folder.folderName}</h6>
                                        <p>{folder.numberOfImages} photos</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='centered-hr-div'>
                    <hr className='centered-hr'></hr>
                </div>
                {viewFolder && <FolderManager folder={viewFolder} />}
            </div>

            {/* Model for new folder creation */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create new Collection</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action=""
                            onSubmit={createNewFolder}
                        >
                            <div className="modal-body py-5">
                                <input type="text" className="form-control" name='folder_name' id="exampleFormControlInput1" placeholder="Collection Name" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" name='close_btn'>Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryManager