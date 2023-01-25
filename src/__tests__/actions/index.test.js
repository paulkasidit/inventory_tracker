import * as actions from './../../actions';

describe('Inventory Tracker actions', () => {

  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: 'DELETE_PRODUCT',
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
      type: 'ADD_PRODUCT',
      name: "Jamaica Blue",
      origin: "Australia",
      price: 3.00,
      roast: "Dark Roast",
      id: 1
    });
  })
});