import React, { useEffect, useRef, useState } from 'react'
import './Packages.css'
import AdminNavBar from '../../Componants/Admin/AdminNavBar'
import { useFirebaseDb, useFirebaseStorage } from '../../Context/FirebaseContext'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Package from '../../Componants/Admin/Package';

function Packages() {
    const db = useFirebaseDb()
    const storage = useFirebaseStorage()

    const [file, setFile] = useState(null)
    const [allPackages, setAllPackages] = useState([])
    const closeBtnRef = useRef(null)
    const fileRef = useRef(null)
    const headingRef = useRef(null)
    const descRef = useRef(null)
    const imageRef = useRef(null);

    const manageFileInput = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile)
            const reader = new FileReader();
            reader.onload = (e) => {
                imageRef.current.src = e.target.result;
            };
            reader.readAsDataURL(selectedFile);
        }
    }

    const manageSubmit = async () => {
        try {
            const storageRef = ref(storage, `Package/image/${file.name}`);
            await uploadBytes(storageRef, file);
            const imageUrl = await getDownloadURL(storageRef);

            await addDoc(collection(db, 'Package'), {
                heading: headingRef.current.value,
                description: descRef.current.value,
                imageUrl: imageUrl,
                isActive: false,
                imageId: `Package/image/${file.name}`
            });
            console.log('Uploaded a blob or file!');
            closeBtnRef.current.click()
            window.location.reload()
        } catch (error) {
            console.error('Error uploading package:', error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Package'));
                const packagesArray = [];
                querySnapshot.forEach((doc) => {
                    packagesArray.push({ id: doc.id, ...doc.data() });
                });
                setAllPackages(packagesArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    return (
        <>
            <AdminNavBar />
            <div className="main-div">
                <div className="package-menu-div">
                    <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        New Package
                    </button>
                </div>
                <div className="row justify-content-center align-items-start g-2 w-100 pt-3">
                    {
                        allPackages.map((item) => {
                            return (
                                <Package item={item} key={item.id} />
                            )
                        })
                    }
                </div>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className='modal-content'>
                            <div className="modal-header">
                                <button type="button" className="btn-close float-end " data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="package-img-div mb-3"
                                    onClick={() => fileRef.current.click()}
                                >
                                    <img src="/assets/no-image.png" alt="" className='img-view' ref={imageRef} />
                                    <input type="file" name="" id="" hidden ref={fileRef} onChange={manageFileInput} />
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" ref={headingRef} />
                                    <label htmlFor="floatingInput">Heading</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} ref={descRef}></textarea>
                                    <label htmlFor="floatingTextarea2">Description</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeBtnRef}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={manageSubmit}>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Packages