import React from 'react';
import './Header.css';
import {FaShoppingCart} from 'react-icons/fa'


const Header = () => {
    return (
            <div className="menu">
                <h1 className="logo">Tiendapp</h1>
                
                <nav className="nav">
                    <a href="#">Inicio</a>
                    <a href="#">Contacto</a>
                    <a href="#">Productos</a>
                    
                </nav>
                <FaShoppingCart className="carrito" size="2em"/>
               
              

           </div>
    )


}

export default Header;