import { useEffect, useState } from "react";
import Loader from "./loader";
import Home from "./home";

const App = () => {
  let [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(!true)
    }, 2000);
  }, []);
  if (load) {
    return (
      <Loader />
    )
  } else {
    return (
      <Home />
    )
  };
};
export default App;