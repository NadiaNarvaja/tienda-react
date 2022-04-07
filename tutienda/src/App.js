import React from "react";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

const flex = {
  display: "flex",
  flexWrap: "wrap",
};

function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Bienvenido a tu tienda" />
    </>
  );
}

export default App;
