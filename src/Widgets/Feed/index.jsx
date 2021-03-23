import React from "react";
import Product from "./components/Product";
import "../../styles/feed.css";

//default action
const invokeFunction = (id) => {
  alert("No action configured for product " + id);
};

export default function Feed(props) {
  const {
    products = [],
    title = true,
    price = true,
    image = true,
    vendor = true,
    onBuy = invokeFunction,
    onView = invokeFunction,
    onLike = invokeFunction,
    style = {},
  } = props;


  return (
    <div className="feed-container">
      {products.length > 0
        ? products.map((data, key) => (
            <Product
              key={data.product.id}
              productData={data.product}
              style={style}
              onBuy={onBuy}
              onView={onView}
              onLike={onLike}
              title={title}
              price={price}
              vendor={vendor}
              image={image}
            />
          ))
        : "No data available"}
    </div>
  );
}
