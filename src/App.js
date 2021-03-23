import "./App.css";
import React, { useEffect, useState } from "react";

import FeedWidget from "./Widgets/Feed";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const dummyAlertBuy = (id) => {
    alert("Buy Product ID " + id);
  };
  const dummyAlertView = (id) => {
    alert("View Product ID " + id);
  };
  const dummyAlertLike = (id) => {
    alert("Like Product ID " + id);
  };

  const customStyle = {
    background: "",
    color: "",
  };

  return (
    <div className="dashboard">
      <div className="demo-shop">Demo Shop</div>
      <div>
        {isLoaded ? (
          <FeedWidget
            products={items}
            title={true}
            price={true}
            image={true}
            vendor={true}
            style={customStyle}
            onBuy={dummyAlertBuy}
            onView={dummyAlertView}
            onLike={dummyAlertLike}
          />
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}

export default App;
