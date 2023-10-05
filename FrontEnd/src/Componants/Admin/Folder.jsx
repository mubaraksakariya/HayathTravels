import React, { useEffect, useState } from 'react'
import './Folder.css'
import { useFirebaseDb, useFirebaseStorage } from '../../Context/FirebaseContext'
import { collection, getCountFromServer, query, where } from 'firebase/firestore'

function Folder({ folder, setViewFolder }) {
    const db = useFirebaseDb()
    const storage = useFirebaseStorage()
    const [count, setCount] = useState()
    useEffect(() => {
        const getCount = async () => {
            const q = query(collection(db, "Gallery"), where("folderId", "==", folder.id));
            const snapshot = await getCountFromServer(q);
            console.log(snapshot.data().count);
            setCount(snapshot.data().count);
        }
        folder && getCount()
    }, [folder])
    return (
        <div className="folder" key={folder.id}
            onClick={() => { setViewFolder(folder) }}
        >
            <i className="bi bi-folder-fill"></i>
            <div className='folder-text'>
                <h6>{folder.folderName}</h6>
                <p>{count} photos</p>
            </div>
        </div>
    )
}

export default Folder