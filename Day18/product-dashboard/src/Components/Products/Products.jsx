import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Products() {

    const [count, setCount] = useState(0);

    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h1 className="fw-bold">Our Products</h1>

                <p className="text-secondary">
                    Manage your products from here
                </p>
            </div>

            <div className="row g-4">

                <div className="col-md-4">
                    <div className="card shadow h-100">
                        <div className="card-body text-center">
                            <i className="fa-solid fa-laptop fa-3x mb-3"></i>

                            <h5 className="card-title">Laptop</h5>

                            <p className="card-text">
                                Powerful laptop for everyday work.
                            </p>

                            <button className="btn btn-primary">
                                View Product
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow h-100">
                        <div className="card-body text-center">
                            <i className="fa-solid fa-mobile-screen fa-3x mb-3"></i>

                            <h5 className="card-title">Mobile</h5>

                            <p className="card-text">
                                Modern mobile with great features.
                            </p>

                            <button className="btn btn-primary">
                                View Product
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow h-100">
                        <div className="card-body text-center">
                            <i className="fa-solid fa-headphones fa-3x mb-3"></i>

                            <h5 className="card-title">Headphones</h5>

                            <p className="card-text">
                                Enjoy high quality sound.
                            </p>

                            <button className="btn btn-primary">
                                View Product
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-center mt-5">
                <h4>Products Counter: {count}</h4>

                <button
                    className="btn btn-success mt-2"
                    onClick={() => setCount(count + 1)}
                >
                    Add Product
                </button>
            </div>

            <Outlet />

        </div>
    );
}