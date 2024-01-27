import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a Soluciones Ópticas!!!'}/>
    </>
  )
}

export default App;