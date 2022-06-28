let con = document.getElementById('display');

function cal(num){
    if(num === 'del') 
        con.innerHTML = con.innerHTML.slice(0,-1);
    else if(num === 'c')
        con.innerHTML = "";
    else if(num === 'equal')
        con.innerHTML = eval(con.innerHTML);
    else if(num === '**')
        con.innerHTML = eval(con.innerHTML*con.innerHTML)
    else if(num === '!')
        con.innerHTML = factorial(con.innerHTML); 
    else
    con.innerHTML += num;
}


function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}


