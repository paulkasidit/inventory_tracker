import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProductForm(props){
  
  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value, 
      origin: event.target.origin.value,
      price: event.target.price.value, 
      roast: event.target.roast.value,
      id: product.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update product" />
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  product: PropTypes.object,
  onEditProduct: PropTypes.func
};

export default EditProductForm;