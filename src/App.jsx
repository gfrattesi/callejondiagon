import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos al Callejón Diagon"/>
    </>
  )
}

export default App
