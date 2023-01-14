
import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h3>{props.name} - {props.price}</h3>
        <p><em>{props.price}</em></p>
        <p><em>{props.roast}</em></p>
        <p><em>Quanity:{props.quantityInPounds} lbs</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string, 
  quantityInPounds: PropTypes.number,
  whenProductClicked: PropTypes.func
};


export default Product;
