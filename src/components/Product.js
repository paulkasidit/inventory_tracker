import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h3>{props.name} - {props.price}</h3>
        <p><em>{(Math.round(props.price * 100) / 100).toFixed(2)}</em></p>
        <p><em>{props.roast}</em></p>
          {props.quantity === 0 
          ?<p>Out of Stock</p>
          :<p>{"Quantity: " + props.quantity + " lbs"}</p>
          }
        <hr/>
        {props.quantity === 0
          ?<p></p>
          :<button class = "button is-success" onClick = {() => props.onBuy(props.id)}>Buy</button>
        }
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string, 
  quantity: PropTypes.number,
  whenProductClicked: PropTypes.func,
  onBuy: PropTypes.func
};


export default Product;
