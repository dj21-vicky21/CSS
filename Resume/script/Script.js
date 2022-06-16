let icon  = document.getElementById('dark-icon');
let text  = document.getElementById('dark-text');
let checkbox = document.getElementById('darkmode-btn');
let body = document.body;
let header = document.getElementById('header');
let head_right_1 = document.getElementById('head-1');
let head_right_2 = document.getElementById('head-2');
let head_right_3 = document.getElementById('head-3');
let head_right_4 = document.getElementById('head-4');
let head_right_5 = document.getElementById('head-5');
let head_right_6 = document.getElementById('head-6');
let head_right_7 = document.getElementById('dark2');
let head_right_8 = document.getElementById('dark3');
let head_right_a = document.getElementById('dark4');
let head_right_a_7 = document.getElementById('head-7');
let head_right_a_8 = document.getElementById('head-8');
let head_right_a_9 = document.getElementById('head-9');
let head_right_a_10 = document.getElementById('head-10');
let body_main = document.getElementById('body');
let img = document.getElementById('img');
let body_left_name = document.getElementById('body-left-name');
let body_right = document.getElementById('body-right');
let about = document.getElementById('about');
let education = document.getElementById('education');
let skills = document.getElementById('skills');
let achivements = document.getElementById('achivements');
let h5_1 =document.getElementById('heading5-1');
let h5_2 =document.getElementById('heading5-2');
let h5_3 =document.getElementById('heading5-3');
let h5_4 =document.getElementById('heading5-4');
let h5_5 =document.getElementById('heading5-5');
let h5_6 =document.getElementById('heading5-6');
let h5_7 =document.getElementById('heading5-7');
let h5_8 =document.getElementById('heading5-8');
let h5_9 =document.getElementById('heading5-9');
let h5_10 =document.getElementById('heading5-10');


function hover(x){
    if (checkbox.checked == true) {
        x.style.background = 'rgba(64, 77, 77, 0.856)'
    }
    else{
        x.style.background = 'rgba(13, 236, 236, 0.856)'
    }
}

function nonhover1(x){
    if (checkbox.checked == true) {
        x.style.background = '#333'
    }
    else{
        x.style.background = 'rgb(0, 255, 255)'
    }
}

function nonhover2(x){
    if (checkbox.checked == true) {
        x.style.background = '#222'
    }
    else{
        x.style.background = 'rgb(0, 255, 255)'
    }
}


function dark_mode(){
    if (checkbox.checked == true) {
        icon.className = 'bx bxs-moon'
        text.innerHTML ="Dark-Mode"
        // body.style.background ="white"
        // body.style.color ="black"
        header.style.background = "rgb(0, 255, 255)"
        header.style.color ="#111"
        head_right_1.style.background = "rgb(0, 255, 255)"
        head_right_1.style.color ="#111"
        head_right_2.style.background = "rgb(0, 255, 255)"
        head_right_2.style.color ="#111"
        head_right_3.style.background = "rgb(0, 255, 255)"
        head_right_3.style.color ="#111"
        head_right_4.style.background = "rgb(0, 255, 255)"
        head_right_4.style.color ="#111"
        head_right_5.style.background = "rgb(0, 255, 255)"
        head_right_5.style.color ="#111"
        head_right_6.style.background = "rgb(0, 255, 255)"
        head_right_6.style.color ="#111"
        head_right_7.style.background = "rgb(0, 255, 255)"
        head_right_7.style.color ="#111"
        head_right_8.style.background = "rgb(0, 255, 255)"
        head_right_8.style.color ="#111"
        head_right_a_7.style.background = "rgb(0, 255, 255)"
        head_right_a_7.style.color ="#111"
        head_right_a.style.background = "rgb(0, 255, 255)"
        head_right_a.style.color ="#111"
        head_right_a_8.style.background = "rgb(0, 255, 255)"
        head_right_a_8.style.color ="#111"
        head_right_a_9.style.background = "rgb(0, 255, 255)"
        head_right_a_9.style.color ="#111"
        head_right_a_10.style.background = "rgb(0, 255, 255)"
        head_right_a_10.style.color ="#111"
        body_main.style.background = "#fff"
        body_main.style.color ="#111"
        img.style.background = "rgba(0, 255, 255, 0.295)"
        img.style.color ="#111"
        body_left_name.style.background = "rgba(0, 255, 255)"
        body_left_name.style.color ="#111"
        // body_right.style.background = "#fff"
        // body_right.style.color ="black"
        about.style.background = "#fff"
        about.style.color ="#111"
        education.style.background = "#fff"
        education.style.color ="#111"
        skills.style.background = "#fff"
        skills.style.color ="#111"
        achivements.style.background = "#fff"
        achivements.style.color = "#111"
        h5_1.style.borderBottom = '2px solid #111'
        h5_2.style.borderBottom = '2px solid #111'
        h5_3.style.borderBottom = '2px solid #111'
        h5_4.style.borderBottom = '2px solid #111'
        h5_5.style.borderBottom = '2px solid #111'
        h5_6.style.borderBottom = '2px solid #111'
        h5_7.style.borderBottom = '2px solid #111'
        h5_8.style.borderBottom = '2px solid #111'
        h5_9.style.borderBottom = '2px solid #111'
        h5_10.style.borderBottom = '2px solid #111'
        
        
        

    }

    else{
        icon.className = 'bx bxs-sun'
        text.innerHTML = "Light-Mode"
        // body.style.background = "black"
        // body.style.color ="white"
        header.style.background = "#222"
        header.style.color ="white"
        head_right_1.style.background = "#333"
        head_right_1.style.color ="white"
        head_right_2.style.background = "#333"
        head_right_2.style.color ="white"
        head_right_3.style.background = "#333"
        head_right_3.style.color ="white"
        head_right_4.style.background = "#333"
        head_right_4.style.color ="white"
        head_right_5.style.background = "#333"
        head_right_5.style.color ="white"
        head_right_6.style.background = "#333"
        head_right_6.style.color ="white"
        head_right_7.style.background = "#333"
        head_right_7.style.color ="#fff"
        head_right_a.style.background = "#333"
        head_right_a.style.color ="#fff"
        head_right_8.style.background = "#333"
        head_right_8.style.color ="#fff"
        head_right_a_7.style.background = "#222"
        head_right_a_7.style.color ="#fff"
        head_right_a_8.style.background = "#222"
        head_right_a_8.style.color ="#fff"
        head_right_a_9.style.background = "#222"
        head_right_a_9.style.color ="#fff"
        head_right_a_10.style.background = "#222"
        head_right_a_10.style.color ="#fff"
        body_main.style.background = "#333"
        body_main.style.color ="#fff"
        img.style.background = "#222"
        img.style.color ="#fff"
        body_left_name.style.background = "#222"
        body_left_name.style.color ="#fff"
        // body_right.style.background = "#222"
        // body_right.style.color ="#fff"
        about.style.background = "#333"
        about.style.color ="#fff"
        education.style.background = "#333"
        education.style.color ="#fff"
        skills.style.background = "#333"
        skills.style.color ="#fff"
        achivements.style.background = "#333"
        achivements.style.color ="#fff"
        h5_1.style.borderBottom = '2px solid #fff'
        h5_2.style.borderBottom = '2px solid #fff'
        h5_3.style.borderBottom = '2px solid #fff'
        h5_4.style.borderBottom = '2px solid #fff'
        h5_5.style.borderBottom = '2px solid #fff'
        h5_6.style.borderBottom = '2px solid #fff'
        h5_7.style.borderBottom = '2px solid #fff'
        h5_8.style.borderBottom = '2px solid #fff'
        h5_9.style.borderBottom = '2px solid #fff'
        h5_10.style.borderBottom = '2px solid #fff'

    }
     

}