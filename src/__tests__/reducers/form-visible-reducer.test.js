import formVisibleReducer from '../../reducers/form-visible-reducer';

describe ("formVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(
      formVisibleReducer(false, 
      {type: 'null'}))
      .toEqual(false);
  });

  test('Should toggle successfuly between false and true', () => {
    expect(
      formVisibleReducer(false, 
      {type: 'TOGGLE_FORM'}))
      .toEqual(true);
  });

});