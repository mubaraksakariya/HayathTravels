import React from 'react'
import './Contact.css'
import NavBar from '../../Componants/User/NavBar'

function Contact() {
    return (
        <div className="contact--main-div">
            <NavBar />
            <img className='contact-page-img-1' src="./assets/ContactPageimage.jpg" alt="" />
        </div>
    )
}

export default Contact