import React from 'react'

import second from "../image/second.jpg"
export default function Home() {
    return (
        <div className='hero'>
            <div class="card text-bg-dark border-0">
                <img src={second} class="card-img" alt="Background"  hight="550px"/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 class="card-title display-3 fw-bolder mb-0 text-dark ">NEW SEASON ARRIVALS</h5>
                    <p class="card-text lead fs-2 text-dark">CHECK OUT ALL THE TRENDS</p>

                    </div>
                </div>
            </div>
           
        </div>
    )
}
