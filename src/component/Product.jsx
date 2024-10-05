import React from 'react'
import { useState, useEffect } from "react"
export default function Product() {
    const [data, setdata] = useState([])
    const [filter, setfilter] = useState(data)
    const [loading, setloading] = useState(false)

    let componentMount = true
    useEffect(() => {
        const getproducts = async () => {
            setloading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            const res = await response.json()
            if (componentMount) {
                setdata(res)
                setfilter(res)
                setloading(false)
                console.log(filter)
            }
            return () => {
                componentMount = false
            }
        }
        getproducts();

    }, [])

    const Loadin = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pd-5">
                    <button className='btn btn-outline-dark'>All</button>
                    <button className='btn btn-outline-dark'>men's clothing</button>
                    <button className='btn btn-outline-dark'>jewelery</button>
                    < button className='btn btn-outline-dark'>electronics</button>
                    < button className='btn btn-outline-dark'>women's clothing</button>
                </div>

                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4"key={product.id} >
                                    <img src={product.image} class="card-img-top" alt={product.title}  height="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)} </h5>
                                        <p class="card-text">{product.price}</p>
                                        <a href="#" class="btn btn-outline-dark">Buy NOW</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>

        )

    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Prodect</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
