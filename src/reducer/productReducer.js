export default function (state, action) {
  switch (action.type) {
    case "search": {
      return action.serachResult;
    }
    case "sort": {
      return action.data;
    }
    default:
      return state;
  }
}
