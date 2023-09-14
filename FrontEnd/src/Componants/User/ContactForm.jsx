import React from 'react'
import './ContactForm.css'

function ContactForm() {
    return (
        <div className='contact-top-div'>
            <div className="row contact-div">
                <div className="col-md-6 contact-img-div">
                    <img src="./assets/office.jpg" alt="" className='contact-img' />
                </div>
                <div className="col-md-6 my-5 ">
                    <form action="" className='contact-form'>
                        <div class="mb-3 ">
                            <h3>Quick Enquiry</h3>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control contact-input-feild" name="" id="" aria-describedby="helpId" placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control contact-input-feild" name="" id="" aria-describedby="emailHelpId" placeholder="Email/Phone" />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control contact-input-feild" name="" id="" rows="3" placeholder='Message' />
                        </div>
                        <div class="">
                            <button type='submit' className='contact-submit-button btn btn-lg btn-outline-success px-4'>send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm