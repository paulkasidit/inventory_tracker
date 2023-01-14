import React from 'react';
import NewProductForm from './NewProductForm';
import EditProductForm from './EditProductForm'
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
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
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
        mainProductList: editedMainProductList,
        editing: false,
        selectedProduct: null
      });
  }

  handleDeletingProduct = (id) => {
    const newMainProductList = this.state.mainProductList.filter(product => product.id !== id);
    this.setState({
      mainProductList: newMainProductList,
      selectedProduct: null
    });
  }

  handleBuyingProduct = (id) => { 
    const newMainProductList = this.state.mainProductList;
    const productToSellIndex = newMainProductList.findIndex(product => product.id === id); 
    const productQuantityToUpdate =  newMainProductList[productToSellIndex];
    if (productQuantityToUpdate.quantity > 0){
      newMainProductList[productToSellIndex].quantity -= 1
    }
    this.setState({
      mainProductList: newMainProductList
    })
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
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
    } else {
      currentlyVisibleState = <ProductList 
      productList={this.state.mainProductList} 
      onProductSelection={this.handleChangingSelectedProduct}
      onBuyingProduct = {this.handleBuyingProduct} />;
      buttonText = "Add Product";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
  
}


export default ProductControl;