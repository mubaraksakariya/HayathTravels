import React, { useEffect } from 'react'
import './FolderThumpnail.css'

function FolderThumpnail({ folder, setFolderView }) {
    const divStyle = {
        backgroundImage: `url(${folder.thumpnail})`,
    };

    return (
        <div className="folder-thumb-div" style={divStyle}
            onClick={() => { setFolderView(folder) }}
        >
            {/* <h4>{folder.folderName}</h4> */}
            <h4 className='folder-thumb-h4'>Inaguration</h4>
        </div>
    )
}

export default FolderThumpnail