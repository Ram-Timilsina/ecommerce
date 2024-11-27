import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartContextProvider } from "./Context/CartContext.jsx";
import Wrapper from "./Navbar.jsx/Wrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <Wrapper>
        <App />
      </Wrapper>
    </CartContextProvider>
  </StrictMode>
);
