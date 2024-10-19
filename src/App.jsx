import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Navbar.jsx/Home";
import Nav from "./Navbar.jsx/Nav";
import AboutUs from "./Navbar.jsx/AboutUs";
import Products from "./Navbar.jsx/Products";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourProducts" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
