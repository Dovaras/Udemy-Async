const axios = require("./node_modules/axios");


// async / await. The wonderful syntax for asynchronous code which makes it look synchronous.

// axios.get("http://ip-api.com/json").then((response) => {
//     console.log("lat:" + response.data.lat, "lon:" + response.data.lon);
// });

	(async () => {
        const response = await axios.get("http://ip-api.com/json");
		console.log("lat:" + response.data.lat, "lon:" + response.data.lon)
	})()