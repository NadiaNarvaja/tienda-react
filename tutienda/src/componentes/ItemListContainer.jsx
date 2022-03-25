import ItemCount from './ItemCount.jsx';

const itemListContainerStyles = {
    
        textAlign: 'center',
        color: 'black'
}


const onAdd = (contador) => {
    console.log(contador)
    if (contador > 5) {
        console.log("No se puede pedir mas cantidad que la que existe en stock")
    }
    else{
        console.log(`La cantidad de ${contador} ha sido agregada al carrito correctamente`)
    }
}

const ItemListContainer = ({greeting}) => {
    return (
            <>
            <h3 style={itemListContainerStyles}> {greeting}</h3>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            
            </>

    )
}


export default ItemListContainer;