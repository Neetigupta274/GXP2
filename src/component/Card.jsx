// import React from 'react';
// import { useLocation, useParams } from 'react-router-dom';

// const Card = () => {
//     const { state } = useLocation(); // get product data from state
//     const { product } = state; // destructure product from state

//     return (
//         <div className="container my-5 py-5">
//             <div className="row">
//                 <div className="col-md-6">
//                     <img src={product.image} alt={product.title} height="400px" width="400px" />
//                 </div>
//                 <div className="col-md-6">
//                     <h1 className="display-5">{product.title}</h1>
//                     <p className="lead fw-bolder">
//                         Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i>
//                     </p>
//                     <h3 className="display-6 fw-bold my-4">${product.price}</h3>
//                     <p className="lead">{product.description}</p>
//                     <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;

import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Card = () => {
    const { state } = useLocation(); // get product data from state
    const { product } = state; // destructure product from state

    return (
        <div className="container my-5 py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card h-100 text-center p-4">
                        <img src={product.image} className="card-img-top" alt={product.title} height="400px" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title}</h5>
                            <p className="card-text lead fw-bolder">
                                Rating: {product.rating && product.rating.rate} <i className="fa fa-star"></i>
                            </p>
                            <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                            <p className="card-text">{product.description}</p>
                            <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
                            <button className="btn btn-dark ms-2 px-4 py-2">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

