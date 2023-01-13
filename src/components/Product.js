import React from "react"; 
import PropTypes from "prop-types"; 

function Product(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
      <h3> {props.name}</h3>
        <ul>
          <li>{props.origin}</li>
          <li>{props.price}</li>
          <li>{props.roast}</li>
        </ul>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Product.propTypes = { 
  name: PropTypes.string, 
  origin: PropTypes.string, 
  price: PropTypes.string, 
  roast: PropTypes.string,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
}

export default Product; 