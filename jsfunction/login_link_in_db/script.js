let signup =()=>{
    let page1 = document.querySelector('.loginpage')
    let page2 = document.querySelector('.signuppage')
    page1.style.display = 'none'
    page2.style.display = 'block'
} 
function eyechangeforlogin(){
    let lp = document.getElementById('login_password');
    let eye = document.getElementById('eyeicon');
    if(lp.type === 'password'){
        lp.type = 'text';
        eye.classList = 'fa-solid fa-eye';
    }
    else{
        lp.type = 'password';
        eye.classList = 'fa-solid fa-eye-slash';
    }
    
}
function eyechangeforsignin(){
    let sp = document.getElementById('signin_Cpassword');
    let eye = document.getElementById('eyeicon2');
    if(sp.type === 'password'){
        sp.type = 'text';
        eye.classList = 'fa-solid fa-eye';
    }
    else{
        sp.type = 'password';
        eye.classList = 'fa-solid fa-eye-slash';
    }
    
}
function checkpassword(){
    let password = document.getElementById('signin_password')
    let C_password = document.getElementById('signin_Cpassword')
    let err = document.getElementById('err2')
    if(password.value == C_password.value && password.value.length <= 12 && password.value.length != 0 && password.value.length > 3 ){
        
    }
    else if(password.value.length < 1){
        err.innerHTML = 'Enter password'
    }
    else if(password.value.length < 4){
        err.innerHTML = "Password length atleast 4"
    }
    else if(password.value.length >12){
        err.innerHTML = 'Password length minmun 12'
    }
    else if(password.value != C_password.value){
       err.innerHTML = "Confirm Password different From  password"
    }
    

}


// var form= document.getElementById('sheetdb-form');
//         fetch(form.action,{
//             method:'POST',
//             body: new FormData(form),
//         }).then(
//             response=>response.json()
//             ).then((html)=>{
//                 window.open('displaydate.html','_blank')
//             })






