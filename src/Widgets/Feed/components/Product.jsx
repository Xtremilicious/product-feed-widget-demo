import React from "react";
import "../../../styles/feed.css";
import { IconContext } from "react-icons";
import { FaPlus, FaHeart, FaRegHeart } from "react-icons/fa";

export default function Product({
  productData,
  title,
  price,
  image,
  vendor,
  onBuy,
  onView,
  onLike,
  style,
}) {
  return (
    <div className="product-container" style={style}>
      {image ? (
        <div className="product-image-container" onClick={() => onView(productData.id)}>
          <img
            className="product-image"
            src={productData.image.src}
            alt="product"
          />
        </div>
      ) : null}
      <div className="meta-info">
        {title ? (
          <div className="product-title"  onClick={() => onView(productData.id)}>{productData.title}</div>
        ) : null}
        {vendor ? (
          <div className="product-vendor">{productData.vendor}</div>
        ) : null}
        <div className="product-action">
          {price ? (
            <div className="product-price">
              ${productData.variants[0].price}
            </div>
          ) : null}
          <div
            className="product-call-to-action"
            onClick={() => onBuy(productData.id)}
          >
            <IconContext.Provider value={{ color: "white" }}>
              <div>
                <FaPlus />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="favourite" onClick={() => onLike(productData.id)}>
        <IconContext.Provider value={{ className: "favourite-icon" }}>
          <div>{productData.liked ? <FaHeart /> : <FaRegHeart />}</div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
