import PostsApiGenerated from "./generated/PostsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class PostsApi extends PostsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Posts List
  static getPostsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/postss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default PostsApi;