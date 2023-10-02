import React, { useContext, useEffect, useState } from 'react'
import './Offers.css'
import { DbContext } from '../../Context/FirebaseContext';
import { collection, query, where, getDocs } from "firebase/firestore";


function Offers() {
    const db = useContext(DbContext)
    const [allPackages, setAllPackages] = useState([])
    useEffect(() => {
        console.log(db);
        const fetchData = async () => {
            try {
                const q = query(collection(db, 'Package'), where('isActive', '==', true));
                const querySnapshot = await getDocs(q);
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
    }, [db])

    return (
        <div className="offer-main-div">
            <div className='offer-header pb-1'>
                <h1>SPECIAL PACKAGES</h1>
            </div>
            <hr className="colored-line" />
            <div className="row justify-content-center align-items-top g-2 pt-4 w-100">
                {
                    allPackages && allPackages.map(item => {
                        return (
                            <div className="col-md-6 pt-0 offer-box-div" key={item.id}>
                                <div className="card pt-1 p-3">
                                    <img src={item.imageUrl} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.heading}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Offers