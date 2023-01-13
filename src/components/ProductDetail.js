import Product from "product"; 
import PropTypes from "prop-types"; 
import React from "react";

function ProductDetail(props){

  const {product, onClickingDelete} = product; 

  return (
    <React.Fragment>
      <h3>Product Details</h3>
      <h3>{product.name}</h3>
        <ul>
          <li>{product.origin}</li>
          <li>{product.price}</li>
          <li>{product.roast}</li>
        </ul>
        <button onClick = {props.onClickingEdit}>Update Product</button>
        <button onClick = {() => onClickingDelete(product.id)}>Delete Product</button>
      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default ProductDetail; 