export default function ProductDetails() {
    return (
        <div className="container py-5">

            <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>

                <div className="card-body text-center p-5">

                    <i className="fa-solid fa-box-open fa-4x mb-4"></i>

                    <h1 className="fw-bold mb-3">
                        Product Details
                    </h1>

                    <p className="text-secondary">
                        Here you can see all product details.
                    </p>

                    <div className="mt-4">
                        <h5>Product Name: Laptop</h5>
                        <h5>Price: $800</h5>
                        <h5>Quantity: 10</h5>
                    </div>

                </div>

            </div>

        </div>
    );
}