import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product, onClickingDelete, onClickingSell } = props; //new code

  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <h3>{product.name} - {product.price}</h3>
      <p><em>Origin:{product.origin}</em></p>
      <p><em>Roast:{product.roast}</em></p>
      <p><em>Quanity:{product.quantityInPounds} lbs</em></p>
      <button onClick={ props.onClickingEdit }>Update product</button> { /* new code */ }
      <button onClick={()=> onClickingSell(product) }>Sell product</button> { /* new code */ }
      <button onClick={()=> onClickingDelete(product.id) }>Sell product</button> { /* new code */ }
      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingDelete: PropTypes.func, // new code
  onClickingEdit: PropTypes.func
};

export default ProductDetail;