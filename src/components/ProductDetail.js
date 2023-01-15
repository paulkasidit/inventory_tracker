import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product, onClickingDelete} = props; 

  return (
    <React.Fragment>
    <div class = "box">
      <h1 class = "title is-1">Product Details</h1>
        <h3 class = "title is-4">{product.name} - {product.price}</h3>
        <div class = "box">
          <p><em>Origin:{product.origin}</em></p>
          <p><em>Roast:{product.roast}</em></p>
          {
            product.quantity === 0 
            ? <p>Out Of Stock</p>
            : <p>> Quantity: {product.quantity}</p>
          }
        </div>
        <button class = "button is-info is outlined" onClick={ props.onClickingEdit }>Update product</button>
        <button class = "button is-danger is outlined" onClick={()=> onClickingDelete(product.id) }>Delete product</button> 
        <hr/>
    </div>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func, 
  onClickingEdit: PropTypes.func
};

export default ProductDetail;