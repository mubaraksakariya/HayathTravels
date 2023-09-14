import React from 'react'
import './Offers.css'

function Offers() {
    const offers = [1, 2]
    return (
        <div className="offer-main-div">
            <div className='offer-header pb-1'>
                <h1>SPECIAL PACKAGES</h1>
            </div>
            <hr className="colored-line" />
            <div class="row justify-content-center align-items-center g-2 pt-4">
                {
                    offers.map(offer => {
                        return (
                            <div class="col-md-6 pt-0 offer-box-div" key={offer}>
                                <div class="card pt-1 p-3">
                                    <img src="./offer (1).jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Offers