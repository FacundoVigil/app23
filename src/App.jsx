import NavBar from "./components/NavBar"
import {usestate} from "react"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./components/Contact"
import { CartContext } from "./context/CartContext"
import Carrito from "./components/Carrito"

function App() {

  const {carrito, setCarrito}  = usestate([])

  const cantidadEnElCarrito = (id) => {
    return carrito.reduce((acumulador, producto) => producto.id === id ? acumulador + producto.cantidad : acumulador, 0)
  }

  return (
    <CartContext.Provider value={{carrito, setCarrito}} >
      <BrowserRouter>  
        <NavBar />


        <Routes>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="/contact/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />}/>
        </Routes>

        <ItemListContainer />
        <ItemDetailContainer />
      </BrowserRouter>
      </CartContext.Provider>

    
  )
}

export default App

