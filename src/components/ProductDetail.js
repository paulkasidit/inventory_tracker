import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <h3>{product.name} - {product.price}</h3>
      <p><em>{product.origin}</em></p>
      <p><em>{product.roast}</em></p>
      <button onClick={ props.onClickingEdit }>Update product</button> { /* new code */ }
      <button onClick={()=> onClickingDelete(product.id) }>Close product</button> { /* new code */ }
      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func, // new code
  onClickingEdit: PropTypes.func
};

export default ProductDetail;