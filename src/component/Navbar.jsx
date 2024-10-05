import React from 'react'
import "./Navbar.css"
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-white navbar-lg py-3 shadow-sm">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="#">SHOP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Prodect</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>



                        </ul>
                        <div className="buttons">
                            <a href="" className='btn btn-outline-dark'>
                                <i className='fa fa-sign-in me-1'></i>Login
                            </a>
                            <a href="" className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-user-plus me-1'></i>Register
                            </a>
                            <a href="" className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-shopping-car me-1'></i>Cart (0)
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    )
}
