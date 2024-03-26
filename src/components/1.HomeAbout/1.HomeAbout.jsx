import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import Product from "../2.NestedRoute/Product";
import Feature from "../2.NestedRoute/Feature";
import New from "../2.NestedRoute/New";

function HomeAbout() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
        {/* Nested Route */}
        <Route path="/product" element={<Product />}>
          <Route path="features" element={<Feature />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </div>
  );
}

export default HomeAbout;
