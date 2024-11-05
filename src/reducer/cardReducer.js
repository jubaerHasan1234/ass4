export default function cardReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.addProduct];
    }
    case "remove": {
      return [
        ...state.filter(
          (currentProduct) => currentProduct.id !== action.removeId
        ),
      ];
    }
    default: {
      return state;
    }
  }
}
