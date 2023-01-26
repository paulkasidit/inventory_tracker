import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Inventory Tracker actions', () => {

  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: c.DELETE_PRODUCT,
      id: 1
    });
  });

  it('addProduct should create ADD_PRODUCT action',() => {
    expect(actions.addProduct({
      name: "Jamaica Blue",
      origin: "Australia",
      price: 3.00,
      roast: "Dark Roast",
      id: 1
    })).toEqual({
      type: c.ADD_PRODUCT,
      name: "Jamaica Blue",
      origin: "Australia",
      price: 3.00,
      roast: "Dark Roast",
      id: 1
    });
  })
});