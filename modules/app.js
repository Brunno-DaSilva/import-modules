// import { sayHi } from "./sayHi.js";
import { clog, mergeArrays, elementID } from "./main-modules.js";
import { getFooterDate } from "./getFooterDate.js";
import { Stack } from "./arrayClasses.js";

// sayHi("Bruno");
clog("Ciao bella mi piacere parlare il italiano");

const container = elementID("container");
const arrSmile = ["🤠", "🤓", "😬", "😒"];
const arrGeneral = ["🤡", "💩", "👻", "💀"];

let mergedArray = mergeArrays(arrSmile, arrGeneral);

getFooterDate("currentYear");

//Classes:

const arrOfMonsters = ["👿", "👹", "👺", "👽", "👾", "🤖", "🎃"];
const target = Stack.empty;
const theNewStackData = arrOfMonsters.reduceRight(
  (stack, item) => stack.push(item),
  target
);
clog(theNewStackData);

const arrayInClass = theNewStackData._array;
const arrayLength = theNewStackData.length;

container.innerHTML = `
<h1>Merged Arrays: ${mergedArray}</h1> 
<p>ArrayInClass: ${arrayInClass}</p> 
<p>Array Length: ${arrayLength}</p> 
<p>Array POP: ${arrayPush}</p> 


`;
