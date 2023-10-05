import React, { useEffect, useState } from 'react'
import './Gallery.css'
import NavBar from '../../Componants/User/NavBar'

import { collection, addDoc, getDocs } from "firebase/firestore";
import { useFirebaseDb } from '../../Context/FirebaseContext'
import ImageSwiper from '../../Componants/User/ImageSwiper';
import Footer from '../../Componants/User/Footer';
import FolderThumpnail from '../../Componants/User/FolderThumpnail';

function Gallery() {
    const db = useFirebaseDb()
    const [folders, setFolders] = useState([])
    const [folderVIew, setFolderView] = useState(0)
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
        setFolderView(folders[0])
    }, [folders])
    return (
        <>
            <div className='nav-bar'>
                <NavBar />
            </div>
            <div className="contact-main-div">
                <h3>GALLERY</h3>
            </div>
            <div className="gallery-content-div">
                <FolderThumpnail folders={folders} setFolderView={setFolderView} />
                {/* <div className="folder-selection-div">
                    {folders.map((folder => {
                        return (
                            <FolderThumpnail folder={folder} key={folder.id} setFolderView={setFolderView} />
                        )
                    }))}
                </div> */}
                <ImageSwiper folder={folderVIew} />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default Gallery