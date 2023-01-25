import ProductListReducer from '../../reducers/product-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('ProductListReducer', () => {

  const currentState  = { 
    1: {
      name: "Jamaica Blue",
      origin: "Australia",
      price: 3.00,
      roast: "Dark Roast",
      id: 1
    }, 2:{
      name: "Caracas",
      origin:  "Venezuela",
      price: 3.00,
      roast: "Light Roast",
      id: 2
    }
  }

  let action; 
  const productData = {
    name: "Jamaica Blue",
    origin: "Australia",
    price: 3.00,
    roast: "Dark Roast",
    id: 1
  };

  test("Should add new product data to mainProductList", () => {
    const {name , origin, price, roast, id} = productData;
    
    action = {
      type: c.ADD_PRODUCT, 
      name: name,
      origin: origin, 
      price: price, 
      roast: roast,
      id: id
    }; 

    expect(ProductListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        origin: origin, 
        price: price, 
        roast: roast,
        id: id
      }
    });

  });

  test("Should update product data in mainProductList with matching id", () => {
    
    const {name , origin, price, roast, id} = productData;
    
    //adding original unaltered product to list
    action = {
      type: c.ADD_PRODUCT, 
      name: name,
      origin: origin, 
      price: price, 
      roast: roast,
      id: id
    }; 

    //updating product data at product with same id
    action = {
      type: c.ADD_PRODUCT, 
      name: "Jamaica Blue Roast",
      origin: origin, 
      price: price, 
      roast: roast,
      id: id
    }; 

    expect(ProductListReducer({}, action)).toEqual({
      [id] : {
        name: "Jamaica Blue Roast",
        origin: origin, 
        price: price, 
        roast: roast,
        id: id
      }
    });

  });

  test ("Should return default state if there is no action type passed into the reducer", () => {
    expect(ProductListReducer({},{type:null})).toEqual({});
  });

  test("Should successfuly delete a product", () => {
    action = {
      type: c.DELETE_PRODUCT,
      id: 1
    };
    expect(ProductListReducer(currentState,action)).toEqual({
      2: {
        name: "Caracas",
        origin: "Venezuela",
        price: 3.00,
        roast: "Light Roast",
        id: 2
      }
    });
  });

});