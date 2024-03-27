import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import Product from "../2.NestedRoute/Product";
import Feature from "../2.NestedRoute/Feature";
import New from "../2.NestedRoute/New";
// LazyLoad component
const LazyLoad = React.lazy(() => {
  import("../3.LazyLoad/LazyLoad");
});

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
          <Route index element={<Feature />}></Route>
          <Route path="features" element={<Feature />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route
          path="lazyLoad"
          element={
            <React.Suspense fallback="loading...">
              <LazyLoad />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default HomeAbout;
