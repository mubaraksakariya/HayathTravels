import React from 'react'
import './Contact.css'
import NavBar from '../../Componants/User/NavBar'
import Footer from '../../Componants/User/Footer'

function Contact() {
    return (
        <>
            <div className='nav-bar'>
                <NavBar />
            </div>
            <div className="contact-main-div">
                {/* <img className='contact-page-img-1' src="./assets/ContactPageimage.jpg" alt="" /> */}
                <div class="row justify-content-center contact-container">
                    <div class="col-md contact-form-div">
                        <form>
                            <h3 class="mb-3">Write us</h3>
                            <div class="mb-3">
                                <input type="text" class="custom-input" placeholder='Name' />
                            </div>
                            <div class="mb-3">
                                <input type="text" class="custom-input" placeholder='Email/Phone' />
                            </div>
                            <div class="mb-3">
                                <input type="text" class="custom-input" placeholder='Subject' />
                            </div>
                            <div class="mb-3">
                                <textarea name="" id="" rows="5" class="custom-input" placeholder='Message' ></textarea>
                            </div>
                            <div class="mb-3">
                                <button type='submit' className='contact-submit-button btn btn-outline-warning px-4'>Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md address-div-container">
                        <div className="address-div">
                            <h5>Contact information</h5>
                            <p>We're open for any suggestion or just to have a chat</p>
                            <div className='d-flex address-items'>
                                <div className="icon-div">
                                    <i class="bi bi-geo-alt-fill p-2"></i>
                                </div>
                                <div className='ps-2 address-text'>
                                    <p> <span className='text-white'>Address :</span> 1st Floor MPH Tower <br /> Opposite Bharat petroleum Edavanna 676541</p>
                                </div>
                            </div>
                            <div className='d-flex address-items'>
                                <div className="icon-div">
                                    <i class="bi bi-telephone-fill"></i>
                                </div>
                                <div className='ps-2 address-text'>
                                    <p> <span className='text-white'>Phone :</span> +91 9995745200 <br /> 0483-2081202</p>
                                </div>
                            </div>
                            <div className='d-flex address-items'>
                                <div className="icon-div">
                                    <i class="bi bi-envelope-at-fill"></i>
                                </div>
                                <div className='ps-2 address-text'>
                                    <p> <span className='text-white'>Email :</span> info@hayathtravels.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default Contact