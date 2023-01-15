import React from "react"; 
import PropTypes from "prop-types"; 

function ReusableForm(props){
  return(
    <React.Fragment>

      <div class = "columns is-centered is-two-thirds">
          <form onSubmit={props.formSubmissionHandler}>
            <label class = "label">Product Name</label>
            <div class = "field">
              <div class = "control">
                <input
                class = "input"
                type = "text"
                name = "name"
                placeholder="Product Name"
                />
              </div>
            </div>
            <label class = "label">Product Origin</label>
            <div class = "field">
              <div class = "control">
                <input
                class = "input"
                type = "text"
                name = "origin"
                placeholder="Product Origin"
                />
              </div>
            </div>
            <label class = "label">Product Price</label>
            <div class = "field">
              <div class = "control">
                <input
                class = "input"
                type = "number"
                name = "price"
                placeholder="0.00"
                />
              </div>
            </div>
            <label class = "label">Product Roast</label>
            <div class = "field">
              <div class = "control">
                <input
                class = "input"
                type = "text"
                name = "roast"
                placeholder="Product Roast"
                />
              </div>
            </div>
            <button class = "button is-success is outlined" type = "submit">
              {props.buttonText}
            </button>  
          </form>
      </div>

      

      {/* <form onSubmit={props.formSubmissionHandler}>
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
        <button type = "submit">{props.buttonText}</button>
      </form> */}
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func, 
  buttonText: PropTypes.string
}

export default ReusableForm;