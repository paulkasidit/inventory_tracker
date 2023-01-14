import React from "react"; 
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid'; 

function NewProductForm(props){
  
  function handleNewProductFormSubmission(event){
    event.preventDefault(); 
    props.onNewProductCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      quantityInPounds: 130,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler= {handleNewProductFormSubmission}
        buttonText = "Create New Product"
      />
    </React.Fragment>
  )

}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
}

export default NewProductForm;