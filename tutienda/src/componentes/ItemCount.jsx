import React, {useState} from 'react';


//  --------- Estilos ---------
const ItemCountDivStyles = {
    display:'flex',
    justifyContent:'center',
    background: '#6495ed',
    padding:5,
    margin: 'auto',
    width:'30%', 
    borderRadius:10
}

const buttonStyles = {
    margin:10,
    
}

const pStyles = {
    fontSize:14,
    fontWeight:'bold'
}

const contenedorBotonAgregar = {
    display:'flex',
    justifyContent:'center',
   // background: '#6495ed',
   
    margin: 'auto',
    marginTop:5,
    
    width:'30%', 
    borderRadius:10
}

const botonAgregar = {
   
    border: '1px solid #6495ed',
    padding:5,
    borderRadius:10,
    marginLeft:10

}

// ----------------------




const ItemCount = ({stock, initial, onAdd}) => {
    


    const [contador, setContador] = useState(initial);

    
   

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        setContador(
            contador > 1 ? contador - 1 : contador           
            );
    }

    const manageronADD = (contador) => {
        onAdd(contador)
    }


    return (
        <>
                <div style={ItemCountDivStyles}>
                <button style={buttonStyles} onClick={restar}>-</button>
                <p style={pStyles}>{contador}</p>
                <button style={buttonStyles} onClick={sumar}>+</button> 
                </div>
                <div style={contenedorBotonAgregar}>
                <button style={botonAgregar} onClick={() => manageronADD(contador)} >Agregar al carrito</button>
                </div>

                
        </>
    )
}



export default ItemCount;