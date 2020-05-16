document.getElementById("temp").innerHTML;
console.log("Hello world");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.response);
    console.log(data.main.temp);
    
    document.getElementById("temp").innerHTML = data.main.temp+"°C";
    if (data.weather[0].main == "Thunderstorm"){
      document.getElementById("weather").className = "fas fa-bolt fa-4x";
    }
    else if (data.weather[0].main == "Rain"){
      document.getElementById("weather").className = "fas fa-cloud-showers-heavy fa-4x";
    }
    else if (data.weather[0].main == "Drizzle"){
      document.getElementById("weather").className = "fas fa-cloud-rain fa-4x";
    }
    else if (data.weather[0].main == "Snow"){
      document.getElementById("weather").className = "fas fa-snowflake fa-4x";
    }
    else if (data.weather[0].main == "Fog"){
      document.getElementById("weather").className = "fas fa-smog fa-4x";
    }
    else if (data.weather[0].main == "Clouds"){
      document.getElementById("weather").className = "fas fa-cloud-sun fa-4x";
    }
    else if (data.weather[0].main == "Clear"){
      document.getElementById("weather").className = "fas fa-sun fa-4x";
    }
  }
};

xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Bishkek&units=metric&appid=09b255440dc49ec686f7e9c9f28f8e86");
xhttp.send();

$.get('https://api.exchangeratesapi.io/latest?base=USD', function(data) {
    console.log((data.rates.RUB).toFixed(2));
    $("#dollar").html((data.rates.RUB).toFixed(2));
});

var con = new XMLHttpRequest();

con.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.response);
    console.log(data.results[0].measurements);
    document.getElementById("air").innerHTML = data.results[0].measurements[0].parameter + ": " + data.results[0].measurements[0].value + " " + data.results[0].measurements[0].unit;
}
};

con.open("GET","https://api.openaq.org/v1/latest?location=Bishkek");
con.send();



if (localStorage.username){
  document.getElementById("user").innerHTML = "Hello, " + localStorage.username + " !";
};

function myFunction(){
  var name = document.getElementById("username").value;
  if (name!=null){
    localStorage.username = name;
  }
};

if (localStorage.light){
  document.getElementById('light').className = localStorage.light;
}
else{
  localStorage.light = "Off";
}



function changeImage() {
  var x = document.getElementById('light-control').innerHTML;
  if (x=="On"){
     x = "Off";
  }
  else{
    x = "On";
  }
  localStorage.light = x;
  document.getElementById('light-control').innerHTML = localStorage.light;
  document.getElementById('light').className =  localStorage.light;
}



function openDoor() {
  var x = document.getElementById('door-state').innerHTML;
  if (x=="open"){
     x = "close";
  }
  else{
    x = "open";
  }
  document.getElementById('door-state').innerHTML = x;
  document.getElementById('door').className = x;
}



