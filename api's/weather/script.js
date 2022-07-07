
function check(){
    var loc = document.getElementById('input').value
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+loc+"&units=imperial&appid=2e2a5a2aba2c61c858b4191046400d7b",function(data){
    console.log(data)

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon +".png";

    var temp = Math.floor((data.main.temp-32)*.5556)+"°C";

    var weather  = data.weather[0].main
    
    var location = data.name+"-"
    
    var country = data.sys.country

    $('.icon').attr('src',icon);
    $('.location').text(location)
    $('.country').html(country)
    $('.weather').html(weather);
    $('.temp').html(temp);


});

}


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    var lat = position.coords.latitude;
    var lon =  position.coords.longitude;
  

    $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=2e2a5a2aba2c61c858b4191046400d7b",function(data){
    console.log(data)

    var icon = "https://openweathermap.org/img/w/" + data.current.weather[0].icon+".png";
    $('.icon').attr('src',icon);
    
    var temp = Math.floor((data.current.temp-32)*.5556) +"°C";
    $('.temp').html(temp);
    
    var weather  =  data.current.weather[0].main
    $('.weather').html(weather);
    
    var location = data.name+"-"
    $('.location').html(location)
    
    var country = data.sys.country
    if(country === undefined){
      country == "-" 
    }
    $('.country').html(country)
    



    // $('.icon').attr('src',icon);
    // $('.weather').html(weather);
    // $('.temp').html(temp);

    


});

    
    
    
  }
