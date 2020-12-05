export const initialState = {
  basket: [],
};

//Selector : "Here it is used to calculate total price"
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => amount + item.unitPrice, 0);
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it does not exist in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "EMPTY_BASKET":
      return {
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
