import { useState } from "react";

export default function Product({ productDetails }) {
  let [quantity, setQuantity] = useState(productDetails.quantity);

  return (
    <>
      <div className="card text-center my-4">
        <div className="card-body">
          <h3>{productDetails.prodName}</h3>
          <p>Price: {productDetails.price}</p>
          <p>Quantity: {quantity}</p>

          <button
            className="btn btn-primary"
            onClick={() => setQuantity(quantity + 1)}
          >
            Add Quantity
          </button>
        </div>
      </div>
    </>
  );
}