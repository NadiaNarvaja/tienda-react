import React from 'react';
import Item from './Item.jsx';

// title, descritption, price,equipo,pictureURL

const ItemList = (prodcutos) => {

    
    return (
    <>

    {prodcutos.map( producto => {
            return (
                <Item titulo={prodcutos.title}/>
            )
    })}
    
    </>
    )



    }

export default ItemList;