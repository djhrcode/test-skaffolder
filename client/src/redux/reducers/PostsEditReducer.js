// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  posts: {}
};

// Reducer
export default function PostsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case types.GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case types.LIST_USER_SUCCESS:
      return { ...state, listUser: action.payload };
    case types.UPDATE_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}