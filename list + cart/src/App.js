import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edukasi from "./components/Edukasi";
import Header from "./components/Header";
import Home from "./components/Home";
import Transaksi from "./components/Transaksi";
import About from "./components/About"
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route exact path="/" element = {<Home/>}></Route>
        <Route exact path="/edukasi" element = {<Edukasi/>}></Route>
        <Route exact path="/transaksi" element = {<Transaksi/>}></Route>
        <Route exact path="/about" element = {<About/>}></Route>
        <Route exact path="/cart" element = {<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
