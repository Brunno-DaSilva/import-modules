// import { sayHi } from "./sayHi.js";
import { clog, mergeArrays, elementID } from "./main-modules.js";

const container = elementID("container");

// sayHi("Bruno");
clog("Ciao bella mi piacere parlare il italiano");

const array1 = ["🤠", "🤓", "😬", "😒"];
const array2 = ["🤡", "💩", "👻", "💀"];

let mergedArray = mergeArrays(array1, array2);

container.innerHTML = `<h1>${mergedArray}</h1>`;
