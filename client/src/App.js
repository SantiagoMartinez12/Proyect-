import "./App.css";
import Leinster from "./componentes/leinster";
import getCervezas from "../src/store/action/index.js";
import Lista from "./componentes/clientes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCervezas());
  }, [dispatch]);

  return (
    <Lista />
    // <Routes>
    //   <Route path="/">
    //     <Leinster />
    //   </Route>
    //   <Route exact path="/carta">
    //     <Lista />
    //   </Route>
    // </Routes>
  );
}

export default App;
