import React, { useEffect, useState } from 'react'
import './FolderManager.css'
import { useFirebaseDb, useFirebaseStorage } from '../../Context/FirebaseContext'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { query, where, collection, addDoc, getDocs } from "firebase/firestore";
function FolderManager({ folder }) {
    const storage = useFirebaseStorage()
    const db = useFirebaseDb()
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(10);
    const [uploadError, setUploadError] = useState(null);
    const [folderImages, setFolderImages] = useState([])
    useEffect(() => {
        const getFiles = async () => {
            const q = query(collection(db, "Gallery"), where("folderId", "==", folder.id));
            const querySnapshot = await getDocs(q);
            const images = []
            querySnapshot.forEach((doc) => {
                images.push(doc.data())
            });
            setFolderImages(images)
        }
        getFiles()
    }, [folder])

    const manageSubmit = async (e) => {
        e.preventDefault();
        const files = e.target.images.files;
        if (files.length <= 0) {
            console.log("nofiles");
            setUploadError('No files selected')
            console.log(folderImages);
            return false
        }
        setIsUploading(true);
        setUploadError(null); // Reset previous upload errors
        for (const file of files) {
            const uniqueFileName = `${file.name}_${new Date().getTime()}`;
            const storageRef = ref(storage, `Gallery/${uniqueFileName}`);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get the progress percentage
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress); // Update the progress state
                },
                (error) => {
                    console.error('Error uploading image:', error);
                    setUploadError('Error uploading image. Please try again.');
                    setIsUploading(false);
                },
                () => {
                    // Upload completed successfully
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            addDoc(collection(db, 'Gallery'), {
                                folderId: folder.id,
                                imageUrl: downloadURL,
                                imageId: `Gallery/${uniqueFileName}`
                            });
                            setIsUploading(false);
                        })
                        .catch((error) => {
                            console.error('Error getting download URL:', error);
                            setUploadError('Error retrieving download URL. Please try again.');
                            setIsUploading(false);
                        });
                }
            );
        }
        console.log("completed");
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    return (
        <>
            <h2 className='text-white px-4'>{folder.folderName}</h2>
            <div className="image-input card-container">
                <form action=""
                    onSubmit={manageSubmit}
                >
                    <div className="mb-3 w-50">
                        <label htmlFor="formFileMultiple" className="form-label text-white">Upload new Images to {folder.folderName}</label>
                        <input className="form-control" type="file" name='images' id="formFileMultiple" multiple />
                    </div>
                    {isUploading &&
                        <div className="progress my-3 w-50 position-relative" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className='uploadProgress'> {uploadProgress} %</div>
                            <div className="progress-bar bg-warning" style={{ width: `${uploadProgress}%` }}></div>
                        </div>
                    }
                    <button type='submit' className="btn btn-outline-success">Upload</button>
                    <span className='mx-3 text-danger'>{uploadError}</span>
                </form>

            </div>
            <div className="row g-4 card-container">
                {
                    folderImages.map(file => {
                        return (
                            <div className="col-md-3" key={file.imageId}>
                                <div className="card">
                                    <button type="button" className="btn-close close-btn" aria-label="Close"></button>
                                    <div className="card-img-div">
                                        <img src={file.imageUrl} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default FolderManager