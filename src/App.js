import React from "react";

import "./App.css";
import { Container } from "react-bootstrap";
import Additems from "./components/Additems";
import ListItems from "./components/ListItems";

function App() {
  return (
    <Container>
      <Additems />
      <ListItems />
    </Container>
  );
}

export default App;
