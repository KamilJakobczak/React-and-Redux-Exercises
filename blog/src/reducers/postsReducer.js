const postsReducer = (state = [], action) => {
  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }
  // return state;
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'ADD_POST':
      return [...state, action.payload];
    default:
      return state;
  }
};
export default postsReducer;
