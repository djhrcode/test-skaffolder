import PostsModelGenerated from "./generated/PostsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PostsModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await PostsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PostsModelGenerated,
  ...customModel
};
