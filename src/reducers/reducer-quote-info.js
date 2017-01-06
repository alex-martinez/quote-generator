export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_QUOTE":
      return action.payload
    default:
      return state;
  }
}
