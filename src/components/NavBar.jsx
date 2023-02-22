import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to={`/`} className='brand'><h1 className='brand'>Callejón Diagon</h1></Link>
          <ul>
            <Link to={`/tienda`} className='tienda'><li>Tienda</li></Link>
            <Link to={`/category/${"varitas"}`} className="categorias"><li>Varitas</li></Link>
            <Link to={`/category/${"accesorios"}`} className="categorias"><li>Accesorios</li></Link>
            <Link to={`/category/${"dulces"}`} className="categorias"><li>Dulces</li></Link>
          </ul>
          <Link to={`/cart`} className="link-cart"><CartWidget/></Link>
      </nav>
    </div>
  )
}

export default NavBar