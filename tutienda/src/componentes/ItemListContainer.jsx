import React, {useEffect, useState} from 'react';
import ItemList from './ItemList.jsx';


const itemListContainerStyles = {
    
        textAlign: 'center',
        color: 'black'
}

/*
const onAdd = (contador) => {
    console.log(contador)
    if (contador > 5) {
        console.log("No se puede pedir mas cantidad que la que existe en stock")
    }
    else{
        console.log(`La cantidad de ${contador} ha sido agregada al carrito correctamente`)
    }
}*/

const productos = [
{id:1, title: 'remera', descritption:'una descripcion', price: 4500, equipo:'San Lorenzo', pictureURL: 'PICURL'},
{id:2, title: 'short', descritption:'una descripcion' , price: 2500, equipo:'Boca', pictureURL: 'PICURL' },
{id:3, title: 'musculosa',descritption:'una descripcion', price: 1500, equipo:'River', pictureURL: 'PICURL'},
{id:4, title: 'buzo', descritption:'una descripcion', price: 3500, equipo:'Newells', pictureURL: 'PICURL'},
{id:5, title: 'remera', descritption:'una descripcion', price: 2500, equipo:'Velez', pictureURL: 'PICURL'},
{id:6, title: 'short', descritption:'una descripcion', price: 1500, equipo:'Velez', pictureURL: 'PICURL'}
]








  

const ItemListContainer = ({greeting}) => {

   const [flag, setFlag] = useState(false);
   
   console.log("flag fuera " + flag)
  
   const managerFlag = () =>
    {
        
         setFlag(true)
         
    }  
    
    const promesa = new Promise ((res, rej) => {
            res(productos)
    });
    
    useEffect(() => {
        setTimeout(() => {
            if (flag){
                promesa.then(()=> {
                    <ItemList prodcutos = {productos} />
                    console.log('ok prod ' + productos )
                })
            }
        },2000 )
    })

    console.log(flag)

    return (
            <>
            <h3 style={itemListContainerStyles}> {greeting}</h3>
            <button onClick={managerFlag}>Ver detalle</button>
            
            
            </>

    )
}


export default ItemListContainer;