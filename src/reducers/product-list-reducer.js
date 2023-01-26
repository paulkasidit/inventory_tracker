import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  
  const {name , origin, price, roast, quantity, id} = action;
  
  switch (action.type) {

    case c.ADD_PRODUCT:
      return Object.assign({}, state, {
        [id]:{ 
          name: name,
          origin: origin, 
          price: price, 
          roast: roast,
          quantity: quantity,
          id: id
        }
      });
    case c.DELETE_PRODUCT:
      let newState = {...state};
      delete newState[id];
      return newState; 
    default:
      return state;
      
  }
};

export default reducer;