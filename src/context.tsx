import React, { createContext, useReducer } from "react";

import { productReducer, shoppingCartReducer } from "reducer";

/**
 * @param products: TProduct
 * @param shoppingCart: number
 */

export type TProduct = {
  id: number;
  name: string;
  price: number;
};

export type TInitialState = {
  products: TProduct[];
  shoppingCart: number;
};

export type Action =
  | { type: "ADD" }
  | { type: "CREATE"; create: object }
  | { type: "DELETE"; id: string };

const initialState = {
  products: [],
  shoppingCart: 0,
};

const AppContext = createContext<{
  state: TInitialState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const mainReducer = (
  { products, shoppingCart }: TInitialState,
  action: Action
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
