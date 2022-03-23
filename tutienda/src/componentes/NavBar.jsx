import React from 'react';
import '../NavBar.css';
import CartWidget from './CartWidget';


const Header = () => {
    return (
            <div className="menu">
                <h1 className="logo">Tiendapp</h1>
                
                <nav className="nav">
                    <a href="#">Inicio</a>
                    <a href="#">Contacto</a>
                    <a href="#">Productos</a>
                    
                </nav>
                 <CartWidget/>
               
              

           </div>
    )


}

export default Header;