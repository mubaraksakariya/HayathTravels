import React, { useEffect, useState } from 'react'
import './Gallery.css'
import NavBar from '../../Componants/User/NavBar'

import { collection, getDocs } from "firebase/firestore";
import { useFirebaseDb } from '../../Context/FirebaseContext'
import ImageSwiper from '../../Componants/User/ImageSwiper';
import Footer from '../../Componants/User/Footer';
import FolderThumpnail from '../../Componants/User/FolderThumpnail';

function Gallery() {
    const db = useFirebaseDb()
    const [folders, setFolders] = useState([])
    const [folderVIew, setFolderView] = useState(0)
    const [slideSHowBg, setSlideShowBg] = useState(null)
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
            <div className="gallery-main-div">
                <h3>GALLERY</h3>
            </div>
            <div className="gallery-content-div" >
                <img src={slideSHowBg} alt="" className='gallery-bg-img' />
                <div className="gallery-div">
                    <div className='folder-selection-div'>
                        {
                            folders.map(folder => {
                                return (
                                    <FolderThumpnail folder={folder} setFolderView={setFolderView} key={folder.id} />
                                )
                            })
                        }
                    </div>
                    <div className="slide-show-div">
                        <div className='slide-show'>
                            <ImageSwiper folder={folderVIew} setSlideShowBg={setSlideShowBg} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default Gallery