import React from "react";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailsContainer from "./componentes/ItemDetailsContainer";

function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Bienvenido a tu tienda" />

      <ItemDetailsContainer />
    </>
  );
}

export default App;
