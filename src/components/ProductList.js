import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) { 

  return (
    <React.Fragment>
      <hr/>
        <div class = "columns is-centered">
          <div class = "column">
              <div class = "box">
                  {props.productList.length > 0       
                  ? props.productList.map((product) => 
                        <Product whenProductClicked = {props.onProductSelection}
                        name = {product.name}
                        origin = {product.origin}
                        price = {product.price}
                        roast = {product.roast}
                        quantity = {product.quantity}
                        onBuy = {props.onBuyingProduct} 
                        id = {product.id}
                        key = {product.id}
                        />
                  )
                :<p>Add some new products</p>
                  }
             </div>
            </div>
          </div>
    </React.Fragment>
  )
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func,
  onBuyingProduct: PropTypes.func
};

export default ProductList;

