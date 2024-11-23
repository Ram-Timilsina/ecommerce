import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Navbar.jsx/Home";
import Nav from "./Navbar.jsx/Nav";
import AboutUs from "./Navbar.jsx/AboutUs";
import Products from "./Navbar.jsx/Products";
import ViewDetail from "./Navbar.jsx/ViewDetail";
import CartItems from "./Navbar.jsx/CartItems";
import Footer from "./Navbar.jsx/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className="sticky bg-white top-0">
          <Nav />
        </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourProducts" element={<Products />} />
          <Route path="/viewDetails/:id" element={<ViewDetail />} />
          <Route path="/cartItems" element={<CartItems />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
