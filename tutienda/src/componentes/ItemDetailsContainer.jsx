import React, { useEffect, useState } from "react";
import ItemDetails from "./ItemDetails";
const ItemDetailsContainer = () => {
  const [dato, setDato] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products/1")
        .then((res) => res.json())
        .then((json) => setDato(json));
    }, 2000);
  }, []);

  return (
    <>
      <ItemDetails producto={dato} />
    </>
  );
};

export default ItemDetailsContainer;
