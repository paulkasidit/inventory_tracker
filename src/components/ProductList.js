import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) { 

  return (
    <React.Fragment>
      <hr/>
        <div class = "columns is-centered">
          <div class = "column">
                  <h1 class = "title is-1">Product List</h1>
                  {  
                  Object.values(props.productList).length > 0   
                  ? Object.values(props.productList).map((product) => 
                    <div class = "box">
                        <Product whenProductClicked = {props.onProductSelection}
                        name = {product.name}
                        origin = {product.origin}
                        price = {product.price}
                        roast = {product.roast}
                        quantity = {product.quantity}
                        onBuy = {props.onBuyingProduct} 
                        formattedWaitTime = {product.formattedWaitTime}
                        id = {product.id}
                        key = {product.id}      
                        />
                    </div>
                  )
                :<p>Add some new products here.</p>
                  }
             </div>
          </div>
    </React.Fragment>
  )
}

ProductList.propTypes = {
  productList: PropTypes.object,
  onProductSelection: PropTypes.func,
  onBuyingProduct: PropTypes.func
};

export default ProductList;

