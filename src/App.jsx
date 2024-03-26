import { useState } from "react";
import "./App.css";
import HomeAbout from "./components/1.HomeAbout/1.HomeAbout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeAbout />
    </>
  );
}

export default App;
