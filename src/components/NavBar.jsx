import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
      <nav>
        <h1>Callejón Diagon</h1>
          <ul>
            <li>Varitas</li>
            <li>Accesorios</li>
            <li>Dulces</li>
          </ul>
        <CartWidget/>
      </nav>
    </div>
  )
}

export default NavBar