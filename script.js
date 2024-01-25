const apikey = "ffcc90b7e575e53b956ddd0837365df1";
const weburl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbtn = document.querySelector("#searchbutton");
const searchinput = document.querySelector("#searchme");
// console.log(searchinput);
const cityname = searchinput.value;
// document.onkeydown = function(obj){
//     console.log(obj.keyCode);
// }
async function getdata(cityname) {
  const response = await fetch(weburl + cityname + `&appid=${apikey}`);
  let data = await response.json();
  // console.log("2 " , data);

  if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
  } 
  else {

    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block';
    document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C ";
    document.querySelector(".city").innerHTML = cityname;
    document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
    document.querySelector(".windspeed").innerHTML =
      Math.round(data.wind.speed) + " kmph";

    if (data.weather[0].main == "Clear") {
      const img = document.querySelector(".weathericon");
      img.src = "images/clear.png";
    } else if (data.weather[0].main == "Mist") {
      const img = document.querySelector(".weathericon");
      img.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      const img = document.querySelector(".weathericon");
      img.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      const img = document.querySelector(".weathericon");
      img.src = "images/snow.png";
    } else if (data.weather[0].main == "drizzle") {
      const img = document.querySelector(".weathericon");
      img.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Clouds") {
      const img = document.querySelector(".weathericon");
      img.src = "images/clouds.png";
    }
  }
}
document.onkeydown = function(obj){
    if(obj.keyCode == 13){
        getdata(searchinput.value);
    }
}
searchbtn.addEventListener("click", function () {
  console.log("1 " + cityname);
  getdata(searchinput.value);
  // console.log("3" + searchinput.value);
});
