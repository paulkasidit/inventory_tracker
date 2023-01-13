import React from "react"; 
import PropTypes from "prop-types"; 

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type = "text"
          name = "name"
          placeholder="Product Name"
        />
        <input
          type = "text"
          name = "origin"
          placeholder="Product Origin"
        />
        <input
          type = "text"
          name = "price"
          placeholder="Product Price"
        />
        <input
          type = "text"
          name = "roast"
          placeholder="Product Roast"
        />
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func, 
  buttonText: PropTypes.string
}

export default ReusableForm;