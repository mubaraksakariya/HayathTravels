import React, { useContext, useEffect, useState } from 'react';
import './Offers.css';
import { DbContext } from '../../Context/FirebaseContext';
import { collection, query, where, getDocs } from 'firebase/firestore';

function Offers() {
	const db = useContext(DbContext);
	const [allPackages, setAllPackages] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const q = query(
					collection(db, 'Package'),
					where('isActive', '==', true)
				);
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
	}, [db]);

	return (
		<div className='offer-main-div'>
			<div className='offer-header pb-1'>
				<h1>SPECIAL PACKAGES</h1>
			</div>
			<hr className='colored-line' />
			<div className='row justify-content-around align-items-top g-1 mt-4'>
				{allPackages &&
					allPackages.map((item) => {
						return (
							<div
								className='col-lg-3 col-md-6 p-1 offer-box-div'
								key={item.id}>
								<div className='card pt-1 p-1'>
									<img
										src={item.imageUrl}
										className='card-img-top'
										alt='...'
									/>
									{/* <div className='card-body'>
										<h5 className='card-title'>
											{item.heading}
										</h5>
										<p className='card-text'>
											{item.description}
										</p>
									</div> */}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Offers;
