import React from 'react';
import PropTypes from 'prop-types';
import './FolderThumpnail.css';

const FolderThumpnail = ({ folder, setFolderView }) => {
	const divStyle = {
		backgroundImage: `url(${folder.thumpnail})`,
	};

	const handleFolderClick = () => {
		setFolderView(folder);
	};

	return (
		<div
			className='folder-thumb-div'
			style={divStyle}
			onClick={handleFolderClick}>
			<div className='folder-overlay'></div>
			<h4 className='folder-thumb-h4'>Inauguration</h4>
		</div>
	);
};

FolderThumpnail.propTypes = {
	folder: PropTypes.object.isRequired,
	setFolderView: PropTypes.func.isRequired,
};

export default FolderThumpnail;
