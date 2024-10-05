import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-white navbar-lg py-3 shadow-sm">
                <div class="container">
                    <Link class="navbar-brand fw-bold fs-4" href="#">SHOP</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#" to="/Product">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#" to="/Contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#" to="/About">About</Link>
                            </li>



                        </ul>
                        <div className="buttons">
                            <Link href="#" className='btn btn-outline-dark' to="/Login">
                                <i className='fa fa-sign-in me-1'></i>Login
                            </Link>
                            <Link  href="#" className='btn btn-outline-dark ms-2' to="/Register">
                                <i className='fa fa-user-plus me-1'></i>Register
                            </Link>
                            <Link  href="#" className='btn btn-outline-dark ms-2'to="/Cart">
                                <i className='fa fa-shopping-car me-1'></i>Cart (0)
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    )
}
