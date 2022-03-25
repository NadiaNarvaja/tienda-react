import {FaShoppingCart} from 'react-icons/fa';


const carritoStyles = {
    
    color:'cornflowerblue',
    ':hover': {
        cursor: 'pointer !important'
      }
}


const CartWidget = () =>  (<FaShoppingCart style={carritoStyles} size="2em"/>)
 
export default CartWidget;


