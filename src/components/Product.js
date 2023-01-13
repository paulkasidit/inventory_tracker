import React from "react"; 
import PropTypes from "prop-types"; 

function Product(props){
  return (
    <React.Fragment>
      <h3> {props.name}</h3>
      <div onClick = {() => props.whenProductClicked(props.id)}>
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
  id: PropTypes.string
}

export default Product; 