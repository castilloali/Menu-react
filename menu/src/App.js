import { Container } from "react-bootstrap";
import Navbarw from "./Compnents/Nav";
import Header from "./Compnents/Header";
import Category from "./Compnents/Category";
import CardList from "./Compnents/CardList";
import { data } from "./Data";
import { useState } from "react";


function App() {

  const [itemsData, setitemsData] = useState(data)
  return (
    <div>
      <Navbarw/>
    <Container>
      <Header/>
      <Category/>
      <CardList itemsData={itemsData}/>
    </Container>
    </div>
  );
}

export default App;
