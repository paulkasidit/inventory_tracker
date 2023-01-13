import React from "react";
import NewProductForm from "./NewProductForm";
import EditProductForm from "./EditProductForm";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";


class ProductControl extends React.Component{
  
  constructor(props){
    super(props);
    this.stae = { 
      formVisibleOnPage: false,
      mainProductList: [], 
      selectedProduct: null,
      editing: false
    }
  }

  handleEditClick = () => {
    console.log("editing reached");
    this.setState({
      editing: true
    });
  }

  handleEditingProductInList = (productToEdit) => {
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
    const newMainProductList = this.state.mainProductList.filter(product => product.id
      !== id);
      this.setState({
        mainProductList: newMainProductList,
        selectedProduct: null
      });
  } 

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedProduct = (id) => { 
    const selectedProduct = this.state.mainProductList.filer(product => product.id === id)[0];
    this.setState({
      selectedProduct: selectedProduct
    })
  } 

  handleClick = () => {
    if (this.state.selecteddTicker != null){
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

  }

}

export default ProductControl;