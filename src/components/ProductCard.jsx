import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className="card">
      <img src={product.image} alt="" />

      <h3>{product.name}</h3>

      <p>₹ {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;