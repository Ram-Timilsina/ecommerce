import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [showNav, setShowNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <CartContext.Provider
      value={{ cart, setCart, showNav, setShowNav, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartContextProvider, CartContext };
