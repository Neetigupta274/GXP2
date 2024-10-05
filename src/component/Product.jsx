// import React from 'react'
// import { useState, useEffect } from "react"
// export default function Product() {
//     const [data, setdata] = useState([])
//     const [filter, setfilter] = useState(data)
//     const [loading, setloading] = useState(false)

//     let componentMount = true
//     useEffect(() => {
//         const getproducts = async () => {
//             setloading(true);
//             const response = await fetch("https://fakestoreapi.com/products")
//             const res = await response.json()
//             if (componentMount) {
//                 setdata(res)
//                 setfilter(res)
//                 setloading(false)
//                 console.log(filter)
//             }
//             return () => {
//                 componentMount = false
//             }
//         }
//         getproducts();

//     }, [])

//     const Loadin = () => {
//         return (
//             <>
//                 <div className="col-md-3">
               
//                 </div>
//             </>
//         )
//     }

//     const filterProduct=(cat)=>{
//         const update=data.filter((x)=>x.category === cat)
//         setfilter(update)
//     }

//     const ShowProducts = () => {
//         return (
//             <>
//                 <div className="buttons d-flex justify-content-center mb-5 pd-5">
//                     <button className='btn btn-outline-dark'onClick={()=>{setfilter(data)}}>All</button>
//                     <button className='btn btn-outline-dark'onClick={()=>{filterProduct("men's clothing")}}>men's clothing</button>
//                     <button className='btn btn-outline-dark' onClick={()=>{filterProduct("jewelery")}}>jewelery</button>
//                     < button className='btn btn-outline-dark' onClick={()=>{filterProduct("electronics")}}>electronics</button>
//                     < button className='btn btn-outline-dark'onClick={()=>{filterProduct("women's clothing")}}>women's clothing</button>
//                 </div>

//                 {filter.map((product) => {
//                     return (
//                         <>
//                             <div className="col-md-3 mb-4">
//                                 <div class="card h-100 text-center p-4"key={product.id} >
//                                     <img src={product.image} class="card-img-top" alt={product.title}  height="250px"/>
//                                     <div class="card-body">
//                                         <h5 class="card-title mb-0">{product.title.substring(0,12)} </h5>
//                                         <p class="card-text">{product.price}</p>
//                                         <a href="#" class="btn btn-outline-dark">Buy NOW</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 })}
//             </>

//         )

//     }
//     return (
//         <div>
//             <div className="container my-5 py-5">
//                 <div className="row">
//                     <div className="col-12 mb-5">
//                         <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
//                         <hr />
//                     </div>
//                 </div>
//                 <div className="row justify-content-center">
//                     {loading ? <loading /> : <ShowProducts />}
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate
export default function Product() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // initialize navigate

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            const res = await response.json();
            setData(res);
            setFilter(res);
            setLoading(false);
        };
        getProducts();
    }, []);

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const showProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pd-5">
                    <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct('jewelery')}>Jewelery</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct('electronics')}>Electronics</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                </div>

                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                    <p className="card-text">${product.price}</p>
                                    {/* Navigate to Card component with product data */}
                                    <button className="btn btn-outline-dark" onClick={() => navigate(`/product/${product.id}`, { state: { product } })}>
                                        Add to Card
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <div>Loading...</div> : showProducts()}
                </div>
            </div>
        </div>
    );
}
