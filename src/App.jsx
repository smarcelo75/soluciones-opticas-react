import { BrowserRouter,Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Error } from "./components/Error/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home greeting={'Bienvenido a Soluciones Ópticas!!!'}/>}/>
          <Route path="/product" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="*" element={<Error message={'Error 404'}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;