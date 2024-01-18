export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      break;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
      break;
    case "CHANGE_CART_QTY":
      return { ...state, cart: state.cart.filter((c) => (c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)) };
      break;
    default:
      return state;
      break;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
      break;
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
      break;
    case "FILTER_BY_DELIVERY":
      return { ...state, quickDelivery: !state.quickDelivery };
      break;
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
      break;
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
      break;
    case "CLEAR_FILTERS":
      return { byStock: false, quickDelivery: false, byRating: 0 };
      break;
    default:
      return state;
      break;
  }
};
