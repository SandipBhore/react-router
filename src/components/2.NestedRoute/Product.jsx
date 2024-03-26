import { Link, Outlet } from "react-router-dom";
import New from "./New";
import Feature from "./Feature";

function Product() {
  return (
    <div>
      <Link to={"features"}>features</Link>
      <Link to={"new"}>new</Link>
      {/* this will only render one item */}
      <Outlet />
    </div>
  );
}

export default Product;
