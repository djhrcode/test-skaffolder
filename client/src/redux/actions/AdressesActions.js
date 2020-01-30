import actionsFunction from "./generated/AdressesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AdressesApi from "../../api/AdressesApi";
 
 actionsFunction.loadAdressesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AdressesApi
     .getAdressesList()
     .then(list => {
       dispatch(actionsFunction.loadAdressesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
