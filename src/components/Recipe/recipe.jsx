import axios from "axios";
import { useEffect, useState } from "react"
import CustomTable from "../table/table";







const Recipe=()=>{
   
    const [recipes,setrecipes]=useState([])
    const [query,setQuery]=useState("")

    useEffect(()=>{
        fetchData();
    },[query])

    const searchHandler=()=>{
      setQuery(query)
    }


  const fetchData = async () => {
    try {
      let response = await axios.get(`https://dummyjson.com/recipes\search=${query}`);
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
          <input type="text" placeholder="Search Item" onChange={searchHandler}/>
           <CustomTable recipe={recipes}/>
         
        </>
    )
}

export default Recipe