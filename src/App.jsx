import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Error } from "./components/Error/Error";
import { CartContextProvider } from "./context/CartContext"
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home greeting={'Bienvenido a Soluciones Ópticas!!!'} />} />
              <Route path="/product" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Error message={'Error 404'} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;