import { useState } from "react";
import ListItem from "./ListItem";

const shoppingList = [
  { id: 1, name: "apple", price: "200" },
  { id: 2, name: "banana", price: "100" },
  { id: 3, name: "oronge", price: "300" },
];

function App(props) {
  const [list, setList] = useState(shoppingList);
  const remaingAmount = list.filter((item) => !item.isDone).length;

  const handleClick = (id) => {
    const FruitList = list.slice();
    FruitList.forEach((item) => {
      console.log(item);
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
    });
    setList(FruitList);
  };
  return (
    <>
      <h1>Shopping List</h1>
      <p>{remaingAmount}</p>
      <ul>
        {shoppingList.map((item) => (
          <ListItem key={item.id} item={item} onClick={handleClick} />
        ))}
      </ul>
    </>
  );
}

export default App;
