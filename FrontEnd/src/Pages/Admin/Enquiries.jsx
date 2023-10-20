import React, { useEffect, useState } from 'react';
import './Enquiries.css';
import AdminNavBar from '../../Componants/Admin/AdminNavBar';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { useFirebaseDb } from '../../Context/FirebaseContext';

function Enquiries() {
	const db = useFirebaseDb();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(
				collection(db, 'mail'),
				orderBy('createdAt', 'desc')
			);
			const documents = [];
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				const createdAt = data.createdAt
					? data.createdAt.toDate()
					: null;
				documents.push({ id: doc.id, ...data, createdAt });
			});
			setData(documents);
			setLoading(false);
		};

		fetchData();
	}, [db]);

	return (
		<>
			<AdminNavBar />
			<div className='main-div'>
				{loading ? (
					// Loading screen
					<div className='loading-screen'>Loading...</div>
				) : (
					<div className='message-top-div'>
						{data.map((item) => {
							const formattedDate = item.createdAt
								? item.createdAt.toLocaleString('en-US', {
										year: 'numeric',
										month: 'short',
										day: 'numeric',
										hour: 'numeric',
										minute: 'numeric',
										second: 'numeric',
										hour12: true,
								  })
								: '';
							return (
								<div
									key={item.id}
									className='card message-div text-bg-dark mb-3'>
									<div className='card-header bg-transparent border-success'>
										{item.message.from}
									</div>
									<div className='card-body'>
										<h5 className='card-title'>
											{item.message.subject}
										</h5>
										<p className='card-text'>
											{item.message.text}
										</p>
									</div>
									<div className='card-footer border-success'>
										{formattedDate}
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
}

export default Enquiries;
