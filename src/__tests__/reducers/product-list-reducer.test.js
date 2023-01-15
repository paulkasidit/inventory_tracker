import ProductListReducer from '../../reducers/product-list-reducer';

describe('ProductListReducer', () => {
  test ("Should return default state if there is no action type passed into the reducer", () => {
    expect(ProductListReducer({},{type:null})).toEqual({});
  });
});