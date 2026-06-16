import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <div className="container">

      <div className="hero">
        <h1>Welcome To VasaiKart</h1>
        <p>Shop Smart, Live Better</p>
      </div>

      <h2 className="title">Todays Special Featured Products Are</h2>

      <div className="grid">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;