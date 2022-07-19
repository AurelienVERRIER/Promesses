// Exercice 1

setTimeout(() => {
 "Hello world"
}, 2000);


// Exercice 2

const temperature = 2

const feeling = () => {
return new Promise((resolve, reject) => {

setTimeout(() => {
  if (temperature<=10) {
    resolve("Il fait froid");
  } else {
    reject("Il fait chaud");
  } 
  }, 4000)
})};


// const waitForMyResults = async () => {
//   try {
//     // resolve
//     console.log("loading...");
//     const result = await getHousesInParis();
//     console.log(result);
//   } catch (error) {
//     // reject
//     console.log("error");
//     console.log(error);
//   }
// };

// waitForMyResults();
