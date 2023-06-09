import { Container } from "react-bootstrap";
import Navbarw from "./Compnents/Nav";
import Header from "./Compnents/Header";
import Category from "./Compnents/Category";
import CardList from "./Compnents/CardList";
import { data } from "./Data";
import { useState } from "react";


function App() {

  const [itemsData, setitemsData] = useState(data)


  const filterByCategory = (cat) =>{
    if(cat === "الكل") {
      setitemsData(data)
    }else {
      const newArr = data.filter((item)=> item.category === cat)
        setitemsData(newArr)
      }
    }
  
    const allCategory = ["الكل", ...new Set(data.map((category) => category.category))]
    



    const filterBySearch = (word) =>{
      if(word !== "") {
        const newArr = data.filter((item)=> item.title === word)
          setitemsData(newArr)
        }
      }
    

  return (
    <div>
      <Navbarw filterBySearch={filterBySearch}/>
    <Container>
      <Header/>
      <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
      <CardList itemsData={itemsData}/>
    </Container>
    </div>
  );
}

export default App;
