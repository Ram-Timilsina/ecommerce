import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [showNav, setShowNav] = useState("");
  useEffect(() => {
    console.log(cart.showNav);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    console.log("show Nav:", showNav);
  }, [showNav]);
  return (
    <CartContext.Provider value={{ cart, setCart, showNav, setShowNav }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContextProvider, CartContext };
