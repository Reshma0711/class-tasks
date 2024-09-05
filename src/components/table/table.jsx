import { Button } from "react-bootstrap";

const CustomTable = ({ recipes }) => {
  // Destructure recipes from props
  return (
    <div className="container">
      <h2>Recipe Table</h2>

      <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Recipe Name</th>
            <th>Image</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Rating</th>
            <th>Read more</th>
          </tr>
        </thead>
        <tbody>
          {
          recipes.map((recipe, index) => (
            <tr key={recipe.id}>
              <td>{index + 1}</td> 
              <td>{recipe.name}</td>
              <td>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{ width: "100px", height: "auto" }}
                />
              </td>
              <td>
                {recipe.ingredients.join(", ")} 
              </td>
              <td>{recipe.instructions}...</td>{" "}
            
              <td>{recipe.rating}</td>
              <td>
                <Button variant="primary">Read More</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
