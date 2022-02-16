// import { sayHi } from "./sayHi.js";
import { clog, mergeArrays, elementID } from "./main-modules.js";
import { getFooterDate } from "./getFooterDate.js";

// sayHi("Bruno");
clog("Ciao bella mi piacere parlare il italiano");

const container = elementID("container");
const array1 = ["🤠", "🤓", "😬", "😒"];
const array2 = ["🤡", "💩", "👻", "💀"];

let mergedArray = mergeArrays(array1, array2);
container.innerHTML = `<h1>${mergedArray}</h1>`;

getFooterDate("currentYear");
