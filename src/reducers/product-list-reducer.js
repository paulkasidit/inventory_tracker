const reducer = (state = {}, action) => {
  
  const {name , origin, price, roast, id} = action;
  
  switch (action.type) {

    case 'ADD_PRODUCT':
      return Object.assign({}, state, {
        [id]:{ 
          name: name,
          origin: origin, 
          price: price, 
          roast: roast,
          id: id
        }
      });
    case 'DELETE_PRODUCT':
      let newState = {...state};
      delete newState[id];
      return newState; 
    default:
      return state;
      
  }
};

export default reducer;