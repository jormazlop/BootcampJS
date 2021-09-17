import * as Utils from "./utils.js";
import * as API from "./data-business.js";


let initializeHTML = characters => {

   const root = document.getElementById("root");

   root.innerHTML = "";

   characters.forEach(element => {
      let char = Utils.createCharacterRow(element);
      root.appendChild(char);
      char.addEventListener("click", function(){ selectChar(element) });
   });

}

let selectChar = (character) => {
   Utils.showCharacter(character);
}

// Initialize data
API.getCharacters().then(response => initializeHTML(response.data));










