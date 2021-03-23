import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

import FeedWidget from "./Widgets/Feed";

function App() {
  const [error, setError] = useState(null);
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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  //   return (
  //     <ul>
  //       {items.map((item) => (
  //         <li key={item.id}>
  //           {item.name} {item.price}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
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
