let eye = document.getElementById('eye')
let check = document.getElementById('for_eye')
let password = document.getElementById('password')
let containers = document.getElementById('containers')
let dummyadd = document.getElementById('dummyadd')
let submit = document.getElementById('submit')
let wish = document.getElementById('say_wish')

function EyeChange(){
    if(check.checked == true){
        eye.className = "fa-solid fa-eye"
        password.type = 'text'
    }
    else{
        eye.className = "fa-solid fa-eye-slash"
        password.type = 'password'
    }
    
}

function CheckPassword(){
    if(password.value == 'Html'){
        containers.style.display = 'none'
    }
    else{
        submit.setAttribute("data-bs-toggle","modal")
        submit.setAttribute("data-bs-target","#modal2")
        submit.click()
    }
}

function dismiss(){
    submit.removeAttribute("data-bs-toggle")
    submit.removeAttribute("data-bs-target")
}

// say wish
let dat = new Date();
let hrs =dat.getHours();
if(hrs < 5){
    wish.innerText = 'GOOD NIGHT,';
}
else if(hrs < 12){
    wish.innerText = 'GOOD MORNING,';
}
else if(hrs < 15){
    wish.innerText = 'GOOD AFTERNOON,';
}
else if(hrs < 18){
    wish.innerText = 'GOOD EVENING,';
}
else if(hrs <=24){
    wish.innerText = 'GOOD NIGHT,';
}
else{
    wish.innerText = 'GOOD NIGNT, '
}



























