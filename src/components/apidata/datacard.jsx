import axios from "axios";
import { useState, useEffect } from "react"; // Use useEffect for fetching data
import CustomCard from "../cards/customcard";

const Datafetch = () => {
  const [recipes, setRecipes] = useState([]); // Use a state variable for recipes


  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        setRecipes(response.data.recipes); // Update recipes state with fetched data
    
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors gracefully
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures fetching data only once

  return (
    <>
      {recipes.map(
        (
          recipe // Use recipe from the state
        ) => (
          <CustomCard key={recipe.id} title={recipe.name} /> // Assuming id exists for unique keys
        )
      )}
    </>
  );
};

export default Datafetch;
