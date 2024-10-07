import { Button } from "react-bootstrap"
import CustomCard from "../cards/customcard";
import { useState } from "react";




const Example=()=>{
    const [cards,setCards]=useState([]);
    const [count,setCount]=useState(0)

     const addCardHandler=()=>{
          setCount(count+1);
          setCards([...cards, { title: `${count + 1}` }]);
     }

      const delCardHandler = (indexToRemove) => {
        if (cards.length > 0) {
          const filteredCards = cards.filter((card, i) => i !== indexToRemove);
          setCards(filteredCards);
        } else {
          alert("No cards to delete!");
        }
      };
     
    return (
      <>
        <Button style={{ backgroundColor: "Green" }}  onClick={addCardHandler}>
          AddCard
        </Button>
        <Button
          style={{ backgroundColor: "Red" }}
          onClick={() => delCardHandler(cards.length - 1)}
        >
          DelCard
        </Button>

        {cards.map((val, index) => {
          return <CustomCard key={index} title={val.title} />;
        })}
      </>
    );
}

export default Example