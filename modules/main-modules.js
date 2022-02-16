// export function MainModules() {
//   /*
// ==========================================================================
// // Merge two arrays
// ==========================================================================
// */
//   const array1 = ["🤠", "🤓", "😬", "😒"];
//   const array2 = ["🤡", "💩", "👻", "💀"];
//   const merge = [...array1, ...array2]; // OR array1.concat(array2)
//   clog(merge);

//   /*
// ==========================================================================
// // Merge two objects
// ==========================================================================
// */

//   const emojis = {
//     unamused: "😒",
//     grimacing: "😬",
//     cowboyhat: "🤠",
//     ner: "🤓",
//   };
//   const emojiBeast = {
//     clown: "🤡",
//     poop: "💩",
//     ghost: "👻",
//     skull: "💀",
//   };
//   const mergedObjects = { ...emojis, ...emojiBeast };

//   /*
// ==========================================================================
// // Shorten an Array
// ==========================================================================
// */
//   const bigArray = ["🤠", "🤓", "😬", "😒", "🤡", "💩", "👻", "💀"];
//   const newArray = (bigArray.length = 3);
//   clog(bigArray);

//   /*
// ==========================================================================
// // Remove duplicates from Array
// ==========================================================================
// */

//   const delDuplicates = (array) => [...new Set(array)];
//   clog(
//     delDuplicates(array[("🤡", "🤠", "🤓", "😬", "😒", "🤡", "💩", "👻", "💀")])
//   );

//   /*
// ==========================================================================
// // Performance of a function
// ==========================================================================
// */

//   const start = performance.now();
//   // Function to be tested
//   const end = performance.now();
//   const total = start - end;
//   clog(`function takes: ${total} miliseconds`);

//   /*
// ==========================================================================
// // Using logical to assign values
// ==========================================================================
// */

//   const defaultsToValue = (elValue) => {
//     elValue = elValue || 10;
//     clog(elValue);
//   };
//   let elValue1 = 2;
//   let elValue2 = null;
//   clog(defaultsToValue(elValue1)); // 2
//   clog(defaultsToValue(elValue2)); // 10
//   /*
// ==========================================================================
// // Using ternary operators
// ==========================================================================
// */
//   const defaultsToValue = (temp) => {
//     return temp > 39 || temp < 35.5
//       ? "visit doctor"
//       : temp < 37.5 && temp > 36.5
//       ? "Go OUT AND PLAY"
//       : temp <= 39 && temp >= 35.5
//       ? "take some rest"
//       : "NADA 🤡 ";
//   };
// }

/* 
==========================================================================
// Shorten console.log
========================================================================== 
*/
export const clog = console.log.bind(document);
// clog("Ciao bella mi piacere parlare il italiano");

// export const element = document.getElementById(id);

export function mergeArrays(array1, array2) {
  const merge = [...array1, ...array2];
  return merge;
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
