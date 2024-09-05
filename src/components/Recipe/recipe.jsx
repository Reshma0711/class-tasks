import axios from "axios";
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import CustomTable from "../table/table";







const Recipe=()=>{
   
    const [recipes,setrecipes]=useState([])

    useEffect(()=>{
        fetchData();
    })



  const fetchData = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/recipes");
      const  { recipes } = response.data;
      setrecipes(recipes)
      console.log(recipes); 
    } 
    catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };




    return(
        <>
         <h1>Recipe Data</h1>
        
           <CustomTable recipes={recipes}/>
         
        </>
    )
}

export default Recipe