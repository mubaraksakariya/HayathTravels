import React, { useState } from 'react'
import './Package.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

import { useFirebaseDb, useFirebaseStorage } from '../../Context/FirebaseContext';

function Package({ item }) {
    const [packageItem, setPackageItem] = useState(item);
    const db = useFirebaseDb()
    const storage = useFirebaseStorage()

    const manageDelete = () => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to do this ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        deleteObject(ref(storage, item.imageId)).then(() => {
                            console.log('image deleted');
                        }).catch((error) => {
                            console.log(error.message);
                        });
                        await deleteDoc(doc(db, "Package", item.id));
                        window.location.reload()
                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                    }
                }
            ]
        });
    }

    const manageActivate = () => {
        confirmAlert({
            title: 'Confirm to Activate/Deactivate ?',
            message: 'This will show in your websiteS !!',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        const updatedItem = { ...packageItem, isActive: !packageItem.isActive };
                        await setDoc(doc(db, "Package", item.id), updatedItem);
                        setPackageItem(updatedItem);
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        console.log("Cancelled");
                    }
                }
            ]
        });
    }
    return (
        <div className="col-md-3 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: '20rem' }}>
                <div className="btn-group dropstart package-menu">
                    <ul className="dropdown-menu">
                        {
                            packageItem.isActive ?
                                <li><a className="dropdown-item" href="#"
                                    onClick={manageActivate}
                                >Deactivate</a></li>
                                :
                                <li><a className="dropdown-item" href="#"
                                    onClick={manageActivate}
                                >Activate</a></li>
                        }
                        <li><a className="dropdown-item text-danger" href="#"
                            onClick={manageDelete}
                        >Delete</a></li>
                    </ul>
                    <span className="dropdown-btn pe-4 pt-2" data-bs-toggle="dropdown" style={{ cursor: 'pointer' }}>
                        <i className="bi bi-arrow-left-square-fill" style={{ fontSize: 'large' }}></i>
                    </span>
                </div>

                <img src={packageItem.imageUrl} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{packageItem.heading}</h5>
                    <p className="card-text">{packageItem.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Package