import { TProduct, TInitialState, Action } from "context";

export const productReducer = (state: TProduct[], action: Action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case "DELETE_PRODUCT":
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

export const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state + 1;
    default:
      return state;
  }
};
