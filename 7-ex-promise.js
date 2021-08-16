const axios = require("./node_modules/axios");

// Getting a wikipedia article and displaying its "extract" (summary)
// axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/Vilnius").then((response) => {
//     console.log(response.data.extract);
// });

// Getting information on our location based on the IP.
axios.get("http://ip-api.com/json").then((response) => {
    console.log("lat:" + response.data.lat, "lon:" + response.data.lon);
});
