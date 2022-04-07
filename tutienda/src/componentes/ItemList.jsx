import React from "react";
import Item from "./Item.jsx";

// title, descritption, price,equipo,pictureURL
const flex = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};
const ItemList = ({ productos }) => {
  return (
    <div style={flex}>
      {productos.map((producto) => {
        const { id, title, description, price, equipo, pictureURL } = producto;

        return (
          <Item
            id={id}
            titulo={title}
            description={description}
            price={price}
            equipo={equipo}
            url={pictureURL}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
