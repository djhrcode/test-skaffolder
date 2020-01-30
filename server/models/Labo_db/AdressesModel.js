import AdressesModelGenerated from "./generated/AdressesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AdressesModelGenerated.init();
  
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
      return await AdressesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AdressesModelGenerated,
  ...customModel
};
