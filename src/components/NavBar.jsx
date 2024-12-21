import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Contact from './Contact'
import NavBar from './NavBar'


const NavBar = () => {
    return (
        <nav className='navbar'>
            <link to="/" className='logo'><h1>App23</h1>1</link>
            <ul className='menu'>
                <li><Link className='menu-link' to="/">Home</Link></li>
                <li><Link className='menu-link' to="/productos/categoria">Categorias</Link></li>
                <li><Link className='menu-link' to="/contact">Contact</Link></li>
                <li><Link className='menu-link' to="/cartwidget">Carrito</Link></li>
            </ul>
        </nav>
    )
} 

export default NavBar



