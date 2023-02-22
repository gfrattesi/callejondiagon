import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Welcome greeting="Bienvenidos al Callejón Diagon"/>}/>
        <Route exact path="/tienda" element={<ItemListContainer/>}/>
        <Route exact path="/category/:category" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
