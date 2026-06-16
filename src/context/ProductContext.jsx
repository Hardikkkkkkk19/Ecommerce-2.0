import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabase";
import asusImg from "../screenshots/asustuffa15.png";
export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data, error } = await supabase
      .from("student")
      .select("*");

    if (error) {
      console.log("Supabase Error:", error);
      return;
    }

    setProducts(data || []);
  }

  function addToCart(product) {
    setCart((prev) => [...prev, product]);

    setProducts((prev) =>
      prev.filter((item) => item.id !== product.id)
    );
  }

  function removeFromCart(id) {
    const item = cart.find((p) => p.id === id);

    if (item) {
      setProducts((prev) => [...prev, item]);
    }

    setCart((prev) =>
      prev.filter((p) => p.id !== id)
    );
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider };