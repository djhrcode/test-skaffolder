import AddressModelGenerated from "./generated/AddressModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AddressModelGenerated.init();
  
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
      return await AddressModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AddressModelGenerated,
  ...customModel
};
