import actionsFunction from "./generated/PostsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import PostsApi from "../../api/PostsApi";
 
 actionsFunction.loadPostsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return PostsApi
     .getPostsList()
     .then(list => {
       dispatch(actionsFunction.loadPostsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
