import { Routes, Route } from "react-router-dom";
import  Home  from "./pages/home";
import  Cart  from "./pages/cart";
import Header from "./components/header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
