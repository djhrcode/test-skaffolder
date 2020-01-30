import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import PostsReducer from "./PostsReducer";
import PostsEditReducer from "./PostsEditReducer";
import PostsListReducer from "./PostsListReducer";
import ProductsReducer from "./ProductsReducer";
import ProfileReducer from "./ProfileReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	HomeReducer,
	PostsReducer,
	PostsEditReducer,
	PostsListReducer,
	ProductsReducer,
	ProfileReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
