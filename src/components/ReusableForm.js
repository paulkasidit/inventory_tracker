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
            <select name = "origin">
              <option value = "Brazil">Brazil</option>
              <option value = "Ethiopia">Ethiopia</option>
              <option value = "Kenya">Kenya</option>
            </select>

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
            <select name = "roast">
              <option value = "Light">Light Roast</option>
              <option value = "Medium">Medium Roast</option>
              <option value = "Dark">Dark Roast</option>
            </select>

            <button class = "button is-success is outlined" type = "submit">
              {props.buttonText}
            </button>  
          </form>
      </div>
      
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func, 
  buttonText: PropTypes.string
}

export default ReusableForm;