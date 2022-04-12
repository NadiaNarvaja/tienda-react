import React from "react";

const productContainer = {
  width: "25%",
  background: "#6495ed",
  margin: 10,
  border: "1px solid black",
  padding: 10,
  textAlign: "center",
  borderRadius: 5,
  opacity: 0.9,
};

const imageContainer = {
  heigth: "55%",
  width: "50%",
  margin: "auto",
  background: "grey",
};

const imageStyles = {
  heigth: "90%",
  width: "90%",
};

const Item = (props) => {
  const { titulo, description, price, equipo, image } = props;
  return (
    <>
      <div style={productContainer}>
        <div style={imageContainer}>
          <img src={image} style={imageStyles} alt="imagen del producto"></img>
        </div>
        <h3> {titulo} </h3>
        <h5>{description}</h5>
        <p> ${price}</p>
        <p> {equipo}</p>
      </div>
    </>
  );
};

export default Item;
