const userId = {
   id: 4451234,
   name: "Javi",
   surname: "Calzado",
   age: 36,
};

const userNoId = {
   name: "Javi",
   surname: "Calzado",
   age: 36,
};

const hasId = ({id}) => id? true : false;

console.log("1ª prueba con hasId : " + hasId(userId));
console.log("2ª prueba con hasId : " + hasId(userNoId));

const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];

const head = ([primero,]) => primero;

console.log("Prueba con head : " + head(teachers));

const tail = ([,...resto]) => resto;

console.log("Prueba con tail : " + tail(teachers));

const swapFirstToLast = ([primero,...resto]) => [resto, primero];

console.log("Prueba con swapFirstToLast : " + swapFirstToLast(teachers));

const excludeId = ({id, ...resto}) => resto;

console.log("Prueba con excludeId : " );
console.log(excludeId(userId));

const listA = ["javascript" , "angular", "react", "axios"];

const wordsStartingWithA = array => array.filter(element => element.startsWith('a'));

console.log("Prueba con wordsStartingWithA : " + wordsStartingWithA(listA));

const concat = array => array.join('|');

console.log("Prueba con concat : " + concat(teachers));

const listNumbers = [1, 2, 3, 4];

const multArray = (x, array) => {
   let result = [];
   array.forEach(element => {
      result.push(element * x);
   });
   
   return result;

};

console.log("Prueba con multArray : " + multArray(5, listNumbers));

const calcMult = array => {
   let result = 0;
   array.forEach(element => {
      result  += result? element*result: element;
   });
   
   return result;
};

console.log("Prueba con calcMult : " + calcMult(listNumbers));

const swapFirstSecond = ([primero, segundo, ...resto]) => [segundo, primero, resto];

console.log("Prueba con swapFirstSecond : " + swapFirstSecond(teachers));

const longest = (x, array) => array.every(element => element.startsWith(x));

console.log("Prueba con longest : " + longest('a', wordsStartingWithA(listA)));

const searchInStringV1 = (x, string) => Array.from(string).reduce((sumWords, word) => sumWords + (word===x? 1:0), 0);

console.log("Prueba con searchInStringV1 : " + searchInStringV1('a', 'angular'));

const searchInStringV2 = (x, string) => {
   let result = 0;
   Array.from(string).forEach(element => element === x? result++ : result);
   return result;
};

console.log("Prueba con searchInStringV2 : " + searchInStringV2('a', 'angular'));

const sortCharacters = string => Array.from(string).sort();

console.log("Prueba con sortCharacters : " + sortCharacters('angular'));

const shout = palabras => palabras.join('!').toUpperCase();

console.log("Prueba con shout : " + shout(teachers));
