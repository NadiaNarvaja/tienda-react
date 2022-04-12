import React from "react";

const ItemDetails = (props) => {
  const { title, description, price, image } = props.producto;

  const imgStyleContainer = {
    heigth: "40%",
    width: "40%",
  };

  const imgStyle = {
    heigth: "40%",
    width: "40%",
  };
  return (
    <>
      <div style={imgStyleContainer}>
        <img src={image} style={imgStyle} alt="imagen del producto"></img>
      </div>
      <h2>Detalles del prodcuto</h2>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>${price}</p>
    </>
  );
};

export default ItemDetails;
