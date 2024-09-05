import axios from "axios";
import { Component } from "react";

class DisplayCard extends Component {
  state = {
    dishes: [],
    error: false,
    selectdish: null,
  };

  componentDidMount = () => {
    this.Fetchdata();
  };

  Fetchdata = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      this.setState({
        dishes: response.data.recipes,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error: true,
      });
    }
  };

  selectDish = (dish) => {
    this.setState({ selectdish: dish });
  };

  render() {
    const { dishes, error, selectdish } = this.state;

    if (error) {
      return <h1>Failed to load the content</h1>;
    }

    // Styles
    const containerStyle = {
      display: "flex",
      justifyContent: "space-between",
      width: "100vw",
      height: "100vh",
      padding: "20px",
    };

    const dishListStyle = {
      width: "40vw",
      height: "100%",
      overflowY: "auto",
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const dishStyle = {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    };

    const dishStyleHover = {
      ...dishStyle,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transform: "translateY(-5px)",
    };

    const sidePanelStyle = {
      width: "45vw",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    return (
      <div style={containerStyle}>
        {/* Left section for the dish list */}
        <div style={dishListStyle}>
          {dishes.length > 0 ? (
            dishes.map((each) => (
              <div
                key={each.id}
                style={dishStyle}
                onClick={() => this.selectDish(each)}
                onMouseEnter={(e) => (e.currentTarget.style = dishStyleHover)}
                onMouseLeave={(e) => (e.currentTarget.style = dishStyle)}
              >
                <div>
                  <h3>{each.name}</h3>
                </div>
                <img
                  src={each.image}
                  height={"80px"}
                  width={"80px"}
                  style={{ borderRadius: "8px" }}
                  alt={each.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/80";
                  }}
                />
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>

        {/* Right section for the selected dish */}
        {selectdish && (
          <div style={sidePanelStyle}>
            <h2>{selectdish.name}</h2>
            <img
              src={selectdish.image}
              height={"300px"}
              width={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
              alt={selectdish.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300";
              }}
            />

            <p>
              <strong>Ingredients:</strong>{" "}
              {selectdish.ingredients || "No description available."}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {selectdish.rating || "No description available."}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default DisplayCard;
