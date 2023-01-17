import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewProductForm from './NewProductForm';
import EditProductForm from './EditProductForm'
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedProduct: null,
      editing: false,
    };
  }

  handleEditClick = () => { 
    console.log("handleEditClick reached!")
    this.setState({
      editing: true
    });
  }

  handleEditinProductInList = (productToEdit) => {
    const { dispatch } = this.props; 
    const {id, name, price, origin, roast} = productToEdit;
    const action = {
      type: 'ADD_PRODUCT',
      id: id,
      name: name, 
      price: price,
      origin: origin,
      roast: roast
    }
    dispatch(action);
    this.setState({
      editing: false, 
      selectedProduct: null
    });
  }

  handleDeletingProduct = (id) => {
    const { dispatch } = this.props; 
    const action = { 
      type: 'DELETE_PRODUCT',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedProduct: null
    });
  }

  handleBuyingProduct = (id) => {  
    const selectedProduct = this.props.mainProductList[id];
    const { dispatch } = this.props;  
    const {name, price, origin, quantity, roast} = selectedProduct;
    const action = {
      type: 'ADD_PRODUCT',
      id: id,
      name: name, 
      price: price,
      origin: origin,
      quantity: quantity > 0 ? quantity - 1 : quantity,
      roast: roast
    }
    dispatch(action); 
  }
  
  handleAddingNewProductToList = (newProduct) => {   
    const {dispatch} = this.props; 
    const {id, name, price, origin, quantity, roast} = newProduct;  
    const action = {
      type: 'ADD_PRODUCT',
      id: id,
      name: name, 
      price: price,
      origin: origin,
      quantity: quantity,
      roast: roast,
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.props.mainProductList[id];
    this.setState({
      selectedProduct: selectedProduct
    });
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render(){

    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing){
      currentlyVisibleState = <EditProductForm 
      product = {this.state.selectedProduct}
      onEditProduct = {this.handleEditinProductInList}
      />
      buttonText = "Return to Product List";
    }
    else if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} 
      onClickingDelete = {this.handleDeletingProduct}
      onClickingEdit = {this.handleEditClick}
      />
      buttonText = "Return to Product List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation = {this.handleAddingNewProductToList}  />;
      buttonText = "Return to Product List";
    } else{
      currentlyVisibleState = <ProductList 
      productList={this.props.mainProductList} 
      onProductSelection={this.handleChangingSelectedProduct}
      onBuyingProduct = {this.handleBuyingProduct} />;
      buttonText = "Add Product";
    }

    return (
      <React.Fragment>
        <div class = "columns is-centered">
          <div class = "column is-one-quarter">
              <div class = "box">
                <button class = "button is-link" onClick={this.handleClick}>{buttonText}</button>
              </div>
          </div>
          <div class = "column is-half">
            <div class = "box">
              {currentlyVisibleState}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ProductControl.propTypes = {
  mainProductList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainProductList: state
  }
}

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;