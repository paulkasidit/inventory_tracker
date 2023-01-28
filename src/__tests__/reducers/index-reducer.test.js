import rootReducer from '../../reducers/index';
import ProductListReducer from '../../reducers/product-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import { createStore } from 'redux';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainProductList: {},
      selectedProduct: {}
    });
  });

  test('Should contain ProductListReducer logic', () => {
    expect(store.getState().mainProductList).toEqual(ProductListReducer(undefined, { type: null }));
  });

  test('Should contain selectedProductReducer logic', () => {
    expect(store.getState().selectedProduct).toEqual(selectedProductReducer(undefined, { type: null }));
  });

});

// describe ("rootReducer", () => {

//   test('Should return default state if no action type if recognized.',() => {
//     expect(rootReducer({},
//       {type: null})).toEqual({
//         mainProductList: {},
//         formVisibleOnPage: false
//       });
//   });

//   test('Check that initial state of Initiali ProductListReducer matches root reducer',() => {
//     expect(store.getState().mainProductList)
//     .toEqual(ProductListReducer(undefined, 
//       {type: null}));
//   });

//   test('Check that initial state of ProductListReducer matches root reducer', () => {
//     expect(store.getState().mainProductList).toEqual(ProductListReducer(undefined, { type: null }));
//   });


//   test('Check that ADD_PRODUCT action works for productList Reducer and root reducer',() =>{
//     const action = {
//       type: c.ADD_PRODUCT,
//       name: "Jamaica Blue",
//       origin: "Australia",
//       price: 3.00,
//       roast: "Dark Roast",
//       id: 1
//     }
//     store.dispatch(action);
//     expect(store.getState().mainProductList)
//     .toEqual(ProductListReducer(undefined, 
//       {type:null}));
//   })

//   test('Check that TOGGLE_FORM action works for formVisible reducer and root reducer',() => {
//     const action = {
//       type: c.TOGGLE_FORM
//     }
//     store.dispatch(action);
//     expect(store.getState().formVisibleOnPage).toEqual(
//       formVisibleReducer(undefined, action));
//   })
// });