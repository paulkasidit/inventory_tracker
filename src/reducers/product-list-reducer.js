import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  
  const {name, origin, price, roast, quantity, id, formattedWaitTime, timeAdded } = action;
  
  switch (action.type) {

    case c.ADD_PRODUCT:
      return Object.assign({}, state, {
        [id]:{ 
          name: name,
          origin: origin, 
          price: price, 
          roast: roast,
          quantity: quantity,
          id: id,
          timeAdded: timeAdded,
          formattedWaitTime: formattedWaitTime
        }
      });
    case c.DELETE_PRODUCT:
      let newState = {...state};
      delete newState[id];
      return newState; 
    case c.UPDATE_TIME: 
      const newProduct = Object.assign({}, state[id], {formattedWaitTime});
      const updatedState = Object.assign({}, state, {
        [id]: newProduct
      });
      return updatedState;
    default:
      return state;   
  }
};

export default reducer;