// import { sayHi } from "./sayHi.js";
import { clog } from "./main-modules.js";
import { mergeArrays } from "./main-modules.js";

const container = document.getElementById("container");

// sayHi("Bruno");
clog("Ciao bella mi piacere parlare il italiano");

const array1 = ["🤠", "🤓", "😬", "😒"];
const array2 = ["🤡", "💩", "👻", "💀"];

let mergedArray = mergeArrays(array1, array2);

container.innerHTML = `<h1>${mergedArray}</h1>`;
