import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./Product.css";

const Prodcut = (props) => {
  // Destructuring essentials from props
  const { handleAddToCart, product } = props;
  const { name, img, seller, price, ratings } = props.product;
  // console.log(props);

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} ✡ </small>
        </p>
      </div>
      <button className="cart-btn" 
      onClick={() => handleAddToCart(product)}>
        <p className="cart-btn-text">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Prodcut;
