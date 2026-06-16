import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Cart() {
  const { cart, removeFromCart } =
    useContext(ProductContext);

  return (
    <div className="container">

      <h1 className="title">
        Shopping Cart
      </h1>

      <div className="grid">
        {cart.map((item) => (
          <div
            className="card"
            key={item.id}
          >
            <img
              src={item.image}
              alt=""
            />

            <h3>{item.name}</h3>

            <p>₹ {item.price}</p>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Cart;