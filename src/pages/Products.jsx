import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

function Products() {
  const { products } = useContext(ProductContext);

  return (
    <div className="container">

      <h1 className="title">
        All Products
      </h1>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default Products;