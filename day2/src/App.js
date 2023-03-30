import "./App.css";
import "./component/card-detail/cardDetails.css";
import Controls from "./component/counter/controller";
import Home from "./component/home/home";
import NavbarComponent from "./component/navbar/navbar";
import About from "./component/about/about";
import Shop from "./component/shop/shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./component/notFound/notFound";
import CardDetails from "./component/card-detail/cardDetails";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<CardDetails />} path="/shop/:id" />
        <Route element={<Controls />} path="/counter" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
