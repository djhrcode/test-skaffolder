// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function PostsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case types.LIST_POSTS_SUCCESS:
      return { ...state, listPosts: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}