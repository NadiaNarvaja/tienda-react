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

const Item = (props) => {
  const { titulo, description, price, equipo, url } = props;
  return (
    <>
      <div style={productContainer}>
        <img src={url} alt="imagen del producto"></img>
        <h3> {titulo} </h3>
        <h5>{description}</h5>
        <p> ${price}</p>
        <p> {equipo}</p>
      </div>
    </>
  );
};

export default Item;
