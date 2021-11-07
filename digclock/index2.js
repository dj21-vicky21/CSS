setInterval(() => {
    var da = new Date();
    var hrs = da.getHours();
    var mins = da.getMinutes();
    var secs = da.getSeconds();
    var dats = da.getDate();
    var mons =da.getMonth();
    var yeas = da.getFullYear();
    var dayys = da.getDay();
    var ampm = 'am';
    if(hrs < 6){
        document.getElementById('clock').style.background = 'URL(https://i.pinimg.com/originals/76/d7/01/76d701b907da257137c81b7c69523c01.gif)';
        document.getElementById('clock').style.backgroundSize = 'cover';
    }
    if(hrs >=6){
        document.getElementById('clock').style.background = 'URL(https://www.gifimages.pics/images/quotes/english/general/good-morning-sunrise-animated-gif-52650-297553.gif)';
        document.getElementById('clock').style.backgroundSize = 'cover';
    }
    if(hrs >=12){
        document.getElementById('clock').style.background = 'URL(https://www.gifimages.pics/images/quotes/english/general/good-afternoon-sun-animated-gif-52650-93167.gif)';
        document.getElementById('clock').style.backgroundSize = 'cover';
    }
    if(hrs>=16){
        document.getElementById('clock').style.background = 'URL(https://www.gifimages.pics/images/quotes/english/general/good-evening-gif-sun-boat-52650-93248.gif) ';
        document.getElementById('clock').style.backgroundSize = 'cover';
    }if(hrs>=18){
        document.getElementById('clock').style.background = 'URL(https://i.pinimg.com/originals/76/d7/01/76d701b907da257137c81b7c69523c01.gif)';
        document.getElementById('clock').style.backgroundSize = 'cover';
    }
    if(hrs < 12){
        ampm = "AM";
    }else{
        ampm = "PM"
    }
    if(hrs == 0){
        hrs = 12;
    }
    if (hrs > 12){
        hrs -=  12;
    }
    if (secs < 10){
        secs = "0"+secs;
    }
    if (mins < 10){
        mins = "0"+mins;
    }
    if (hrs < 10){
        hrs = "0"+hrs
    }
    if (dats < 10){
        dats = "0"+dats
    }
    if (mons < 10){
        mons = "0"+mons
    }
    if(dayys == 1){
        dayys = 'MON'
    }
    if(dayys == 2){
        dayys = 'TUE'
    }
    if(dayys ==  3){
        dayys = 'WED'
    }
    if(dayys ==  4){
        dayys = 'THUR'
    }
    if(dayys == 5){
        dayys = 'FRI'
    }
    if(dayys == 6){
        dayys = 'SAT'
    }
    if(dayys ==  7){
        dayys = 'SUN'
    }
    
    document.getElementById('hr').textContent = hrs;
    document.getElementById('min').textContent = mins;
    document.getElementById('sec').textContent = secs;
    document.getElementById('dat').textContent = dats;
    document.getElementById('mon').textContent = mons;
    document.getElementById('yea').textContent = yeas;
    document.getElementById('dayy').textContent = dayys;
    document.getElementById('ampm').textContent = ampm;
    // document.getElementById('clock').style.background = 'URL(https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_960_720.jpg)';

 
});