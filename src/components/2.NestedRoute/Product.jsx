import { Link, Outlet, useSearchParams } from "react-router-dom";
import New from "./New";
import Feature from "./Feature";

function Product() {
  // useSearchParams is similar to useState
  const [searchParam, setSearchParam] = useSearchParams();
  //   check whether a perticular attribute has a value in URL
  const filterAvailable = searchParam.get("filter");
  return (
    <div>
      {/* ------Outlet--------- */}
      <h3>Concept: Outlet</h3>
      <Link to={"features"}>features</Link>
      <Link to={"new"}>new</Link>
      {/* this will be like this-> http://localhost:5173/product/features
      this will be like this-> http://localhost:5173/product/new */}

      {/* commnet line no. 13,14,15 to uncomment 18,19,20 */}

      {/* <h3>Concept: Relative Links</h3>
      <Link to={"/features"}>features</Link>
      <Link to={"/new"}>new</Link> */}

      {/* this will be like this-> http://localhost:5173/features
      this will be like this-> http://localhost:5173/new */}

      {/* this will only render one item */}
      <Outlet />

      {/* ----------useSearchParams-------- */}

      <h3>Concept: useSearchParams</h3>
      <button
        // onClick={() => setSearchParam({ filter: "active" })}
        // we can also pass multiple params like how we add multiple filters on amazon like below
        onClick={() => setSearchParam({ filter: "active", price: 100 })}
      >
        Active
      </button>
      <button onClick={() => setSearchParam({})}>Remove Filters</button>

      {/* base on filterAvailable value displaying different text */}
      {filterAvailable
        ? "Active Users(filter available in url)"
        : "All Users(filter not available in url)"}
    </div>
  );
}

export default Product;
