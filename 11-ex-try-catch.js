const axios = require("axios");

axios.get("https://randomuser.me/api").then((response) => {
  // Can’t read `myValue` of `undefined`
  console.log(response.data.results[0].location.country);
}).catch((error) => {
    if (error.response) {
        console.log("SERVER", error.response);
    } else {
        console.log("OTHER", error);
    }
})

// Wrapping the whole code in an anonymous asynchronous function is the way to go 🤘
// (async () => {
//     try {
//         const response = await axios.get("https://randomuser.me/api");
//         console.log(response.data.results[0]);
//     } catch (error) {
//         if (error.response) {
//             console.log("SERVER", error.response);
//         } else {
//             console.log("OTHER", error);
//         }
//     }
// })();
