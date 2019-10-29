const axios = require("axios");
const args = process.argv.slice(2);

function getWeatherToday(city = "Berlin", unit = "metric") {
  axios
    .all([
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=3bc7d9fa9147ed9fcd0e449c0bfd2fca`
      ),
      axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&APPID=3bc7d9fa9147ed9fcd0e449c0bfd2fca`
      )
    ])
    .then(
      axios.spread((res1, res2) => {
        let para = "";
        unit === "imperial" ? (para = "°F") : (para = "°C");
        let temp = res1.data.main.temp;
        let name = res1.data.name;
        let country = res1.data.sys.country;
        let description = res1.data.weather[0].description;
        console.log(`It is now ${temp}${para} in ${name}, ${country}`);
        console.log(`The current weather conditions are: ${description}`);
        // console.log(res2.data.list);
        for (let i = 0; i < res2.data.list.length; i++) {
          let dayTime = res2.data.list[i].dt_txt.slice(10, 13);
          let temp = res2.data.list[i].main.temp;
          let date = res2.data.list[i].dt_txt.slice(5, 10);
          if (dayTime == 12) {
            console.log(`${date} ${temp} ${para}`);
          }
        }
      })
    )
    .catch(err => {
      console.log(err);
    });
}

const result = getWeatherToday(args[0], args[1]);
