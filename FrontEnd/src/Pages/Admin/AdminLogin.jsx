import React, { useContext, useEffect } from 'react'
import './AdminLogin.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Store/authSlice'
import { FirebaseContext } from '../../Context/FirebaseContext'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {
    const dispatch = useDispatch()
    const auth = useContext(FirebaseContext)
    const admin = useSelector(state => state.authentication.admin)
    const navigate = useNavigate()
    const manageLogin = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        dispatch(login(auth, email, password))
    }
    useEffect(() => {
        if (admin)
            navigate('/admin/dashboard/')
    }, [auth, admin])
    return (
        <div className="Login-top-div">
            <div className="login-main-div">
                <div className="login-form-header">
                    <h3 className='text-center'>Hayath Travels</h3>
                    <h6 className='text-center'>Admin Login</h6>
                </div>
                <form action=""
                    onSubmit={manageLogin}
                >
                    <input className='login-input' type="email" name="email" id="" />
                    <input className='login-input' type="password" name="password" id="" />
                    <button className='btn btn-outline-warning px-4' type="submit">login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin