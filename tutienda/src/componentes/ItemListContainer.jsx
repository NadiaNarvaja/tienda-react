import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";

const itemListContainerStyles = {
  textAlign: "center",
  color: "black",
};

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
  {
    id: 1,
    title: "Remera Nike Air",
    description: "una descripcion",
    price: 4500,
    equipo: "San Lorenzo",
    pictureURL: "https://picsum.photos/120",
  },
  {
    id: 2,
    title: "short",
    description: "una descripcion",
    price: 2500,
    equipo: "Boca",
    pictureURL: "https://picsum.photos/120",
  },
  {
    id: 3,
    title: "musculosa",
    description: "una descripcion",
    price: 1500,
    equipo: "River",
    pictureURL: "https://picsum.photos/120",
  },
  {
    id: 4,
    title: "buzo",
    description: "una descripcion",
    price: 3500,
    equipo: "Newells",
    pictureURL: "https://picsum.photos/120",
  },
  {
    id: 5,
    title: "remera",
    description: "una descripcion",
    price: 2500,
    equipo: "Velez",
    pictureURL: "https://picsum.photos/120",
  },
  {
    id: 6,
    title: "short",
    description: "una descripcion",
    price: 1500,
    equipo: "Velez",
    pictureURL: "https://picsum.photos/120",
  },
];

const ItemListContainer = ({ greeting }) => {
  const [flag, setFlag] = useState(false);

  const [data, setData] = useState([]);

  const managerFlag = () => {
    setFlag(true);
  };

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
    promesa.then((data) => {
      setData(data);
    });
  }, []);

  console.log(flag);

  return (
    <>
      <ItemList productos={data} />
    </>
  );
};

export default ItemListContainer;
