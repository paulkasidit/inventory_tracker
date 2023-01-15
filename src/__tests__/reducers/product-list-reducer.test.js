import ProductListReducer from '../../reducers/product-list-reducer';

describe('ProductListReducer', () => {

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
      type: "ADD_PRODUCT", 
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

  test ("Should return default state if there is no action type passed into the reducer", () => {
    expect(ProductListReducer({},{type:null})).toEqual({});
  });

});