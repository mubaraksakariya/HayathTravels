import React from 'react'
import './Dashboard.css'
import AdminNavBar from '../../Componants/Admin/AdminNavBar';
function Dashboard() {
    return (
        <>
            <AdminNavBar />
            <div className="main-div">
                <img src="/assets/Logo-Nobg.png" alt="" className='w-25 admin-page-logo' />
            </div>
        </>
    )
}

export default Dashboard