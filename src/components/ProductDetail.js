import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product, onClickingDelete} = props; 

  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <h3>{product.name} - {product.price}</h3>
      <p><em>Origin:{product.origin}</em></p>
      <p><em>Roast:{product.roast}</em></p>
      {
        product.quantity === 0 
        ? <p>Out Of Stock</p>
        : <p>> Quantity: {product.quantity}</p>
      }
      <button onClick={ props.onClickingEdit }>Update product</button>
      <button onClick={()=> onClickingDelete(product.id) }>Delete product</button> 
      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func, 
  onClickingEdit: PropTypes.func
};

export default ProductDetail;