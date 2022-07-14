
const key = "2e2a5a2aba2c61c858b4191046400d7b"

function Check(){
  var icon = "https://openweathermap.org/img/w/50d.png";
  var temp = "0°C";
  var weather  = ""
  var location = ""
  var country = ""

  $('.icon').attr('src',icon);
  $('.location').html(location)
  $('.country').html(country)
  $('.weather').html(weather);
  $('.temp').html(temp);
  
  var loc = document.getElementById('input').value

  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+loc+"&units=imperial&appid="+key,function(data){
      document.querySelector('.error').innerHTML = ""
      document.querySelector('.error').style.boxShadow = ""
      document.querySelector('.error').style.backgroundColor = 'transparent'
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
      
      // box-shadow: 0 2px 5px rgba(0,0,0,0.7);

}).fail(()=>{
  document.querySelector('.error').innerHTML = 'city not exist';
  document.querySelector('.error').style.boxShadow = "0 2px 5px rgba(0,0,0,0.7)";
  document.querySelector('.error').style.backgroundColor = "#ff9090";
});
}



