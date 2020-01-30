import AdressesApiGenerated from "./generated/AdressesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AdressesApi extends AdressesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Adresses List
  static getAdressesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/adressess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AdressesApi;