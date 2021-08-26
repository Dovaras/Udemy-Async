const axios = require("axios");

// const getWikipediaArticle = (articleName) => {
//   try {
//     axios
//     .get("https://en.wikipedia.org/api/rest_v1/page/summary/" + articleName)
//     .then((response) => {
//       console.log(response.data.extract);
//     });}
//     catch(err) {
//       console.error("GOTCHA! ", err);
//     };
// }
//  getWikipediaArticle("Udemy");

// (async () => {
// try {
//   axios.get("https://randomuser.me/api").then((response) => {
//   console.log(response.data.results[0].email);
// })} catch(err) {
//     console.error("GOTCHA! ", err);
// }})()

// QUIZ - async/await.

// Rewrite the function using async/await, and DO NOT FORGET to add error handling!
(async () => {
  try {
    const response = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + "Udemy");
    console.log(response.data.extract);
  }
  catch (err) {
    console.error("GOTCHA!", err)
  }
  })()