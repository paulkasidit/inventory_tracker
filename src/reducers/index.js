import formVisibleReducer from './form-visible-reducer';
import productListReducer from './product-list-reducer';
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainProductList: productListReducer
});

export default rootReducer;