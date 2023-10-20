import React from 'react';
import './AdminNavBar.css';
import { useFirebaseAuth } from '../../Context/FirebaseContext';
import { signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

function AdminNavBar() {
	const auth = useFirebaseAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;
	const manageLogout = () => {
		console.log('clicked');
		signOut(auth);
	};
	return (
		<nav className='navbar navbar-expand-lg bg-secondary bg-body-black'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/admin/dashboard/'>
					Hayath
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<a
							className={`nav-link ${
								pathname === '/admin/dashboard'
									? 'current-page'
									: ''
							}`}
							aria-current='page'
							href='#'
							onClick={(e) => {
								e.preventDefault();
								navigate('/admin/dashboard');
							}}>
							Dashboard
						</a>
						<a
							className={`nav-link ${
								pathname === '/admin/packages'
									? 'current-page'
									: ''
							}`}
							href='#'
							onClick={(e) => {
								e.preventDefault();
								navigate('/admin/packages');
							}}>
							Packages
						</a>
						<a
							className={`nav-link ${
								pathname === '/admin/gallerymanager'
									? 'current-page'
									: ''
							}`}
							href='#'
							onClick={(e) => {
								e.preventDefault();
								navigate('/admin/gallerymanager');
							}}>
							Gallery
						</a>
						<a
							className={`nav-link ${
								pathname === '/admin/enquiries'
									? 'current-page'
									: ''
							}`}
							href='#'
							onClick={(e) => {
								e.preventDefault();
								navigate('/admin/enquiries');
							}}>
							Enquiries
						</a>
					</div>
					<button
						className='btn btn-sm btn-danger ms-2 sign-out-btn'
						onClick={manageLogout}>
						logout
					</button>
				</div>
			</div>
		</nav>
	);
}

export default AdminNavBar;
