import { Container } from "react-bootstrap";
import Navbarw from "./Compnents/Nav";
import Header from "./Compnents/Header";
import Category from "./Compnents/Category";


function App() {
  return (
    <div>
      <Navbarw/>
    <Container>
    <Header/>
    <Category/>
    </Container>
    </div>
  );
}

export default App;
