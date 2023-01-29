import * as c from './ActionTypes';

export const deleteProduct = id => ({
  type: c.DELETE_PRODUCT,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

export const addProduct =  (product) => {
  const {name, origin, price, roast, id} = product; 
  return {
    type: c.ADD_PRODUCT,
    name: name, 
    origin: origin, 
    price: price, 
    roast: roast, 
    id: id
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id, 
  formattedWaitTime: formattedWaitTime
});
