import React from 'react'
import './css/header.css'
import './image/cart.svg'
import './image/registration.svg'
import { NavLink } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

function Header() {
  const state = useSelector((state=0)=> state.addItem)
  return (
    <div>
        <header className='header'>
            <NavLink className='logo' to='/'>
             <h2>MiniStore</h2>
           </NavLink>
            <ul className='nav'>
                <li className='link'><NavLink to="/">Home</NavLink></li>
                <li className='link'><NavLink to="/products">Products</NavLink></li>
                <li className='link'><NavLink to="/clothes">Clothes</NavLink></li>
                <li className='link'><NavLink to="/blog">Blog</NavLink></li>
            </ul>
            <div className='pages'>
              <NavLink to="/cart" className='cart'>
            <img src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png" alt="" />
            <p>cart ({state.length})</p>
            </NavLink>
            </div>
        </header>
    </div>
  )
}

export default Header