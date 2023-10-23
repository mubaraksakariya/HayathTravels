import React, { useEffect, useState } from 'react';
import './Folder.css';
import {
	useFirebaseDb,
	useFirebaseStorage,
} from '../../Context/FirebaseContext';
import {
	collection,
	deleteDoc,
	doc,
	getCountFromServer,
	getDocs,
	query,
	setDoc,
	where,
} from 'firebase/firestore';
import { confirmAlert } from 'react-confirm-alert';
import { deleteObject, ref } from 'firebase/storage';

function Folder({ folder, setViewFolder, setForceUpdate }) {
	const db = useFirebaseDb();
	const storage = useFirebaseStorage();
	const [count, setCount] = useState();
	useEffect(() => {
		const getCount = async () => {
			const q = query(
				collection(db, 'Gallery'),
				where('folderId', '==', folder.id)
			);
			const snapshot = await getCountFromServer(q);
			console.log(snapshot.data().count);
			setCount(snapshot.data().count);
		};
		folder && getCount();
	}, [folder]);

	const FolderRename = (e) => {
		e.preventDefault();
		const newName = e.target.folderName.value;
		console.log(folder.id);
		setDoc(
			doc(db, 'Gallery_Folders', folder.id),
			{
				folderName: newName,
			},
			{ merge: true }
		);
		setForceUpdate((old) => !old);
		e.target.reset();
		e.target.close.click();
	};
	const ConfirmDelete = () => {
		confirmAlert({
			title: 'Delete this folder ?',
			message: 'All data inside this folder will be deleted',
			buttons: [
				{
					label: 'Yes',
					onClick: () =>
						FolderDelete().then(() => {
							console.log('all done');
							setForceUpdate((old) => !old);
						}),
				},
				{
					label: 'No',
					onClick: () => alert('Click No'),
				},
			],
		});
		const FolderDelete = async () => {
			const galleryQuery = query(
				collection(db, 'Gallery'),
				where('folderId', '==', folder.id)
			);
			const gallerySnapshot = await getDocs(galleryQuery);
			gallerySnapshot.forEach(async (doc) => {
				const imageRef = ref(storage, doc.data().imageId);
				deleteObject(imageRef).then(() => {
					deleteDoc(doc.ref);
				});
			});

			await deleteDoc(doc(db, 'Gallery_Folders', folder.id));
		};
	};

	return (
		<div className='folder'>
			<i
				className='bi bi-folder-fill'
				onClick={() => {
					setViewFolder(folder);
				}}></i>
			<div className='folder-text'>
				<h6>{folder.folderName}</h6>
				<p>{count} photos</p>
			</div>
			<div className='dropstart folder-options'>
				<i
					className='bi bi-three-dots-vertical'
					data-bs-toggle='dropdown'></i>
				<ul className='dropdown-menu dropdown-menu-dark'>
					<li>
						<a
							className='dropdown-item'
							data-bs-toggle='modal'
							data-bs-target={`#${folder.id}`}>
							Rename
						</a>
					</li>
					<li>
						<a
							className='dropdown-item link-danger'
							onClick={ConfirmDelete}>
							Delete
						</a>
					</li>
				</ul>
			</div>

			{/* Model for rename */}
			<div
				className='modal fade '
				id={`${folder.id}`}
				tabIndex='-1'
				aria-labelledby='renameModel'
				aria-hidden='true'>
				<div className='modal-dialog modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1
								className='modal-title fs-5'
								id={`#${folder.id}`}>
								Rename
							</h1>
						</div>
						<form onSubmit={FolderRename}>
							<div className='modal-body'>
								<div className='mb-3'>
									<input
										type='text'
										className='form-control'
										id='recipient-name'
										name='folderName'
									/>
								</div>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									name='close'
									className='btn btn-secondary'
									data-bs-dismiss='modal'>
									Close
								</button>
								<button
									type='submit'
									className='btn btn-primary'>
									Save changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Folder;
