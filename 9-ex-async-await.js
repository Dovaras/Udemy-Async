const axios = require("./node_modules/axios");

async function getCitySummary(cityName) {
  const response = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + cityName);
  console.log(response.data.extract);
}

getCitySummary("Rome");

// QUIZ - Write this code below using the async/await syntax.

//axios.get("http://ip-api.com/json").then() // -> Async/await.
// anonymous function.

(async () => {
  const response = await axios.get("http://ip-api.com/json");
  console.log("lat:" + response.data.lat, "lon:" + response.data.lon)
})()