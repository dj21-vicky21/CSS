let player1 = '<i class="fa-solid fa-x"></i>',
player2 = '<i class="fa-solid fa-o"></i>',
div = document.querySelector('div'),
span = div.querySelectorAll('span'),
i = document.querySelectorAll('i'),
lines = document.querySelector('.lines')
p = document.querySelectorAll('p'),
listplayer1 = document.querySelector('.list-player1'),
listplayer2 = document.querySelector('.list-player2'),
player1_score = document.querySelector('.player1-score'),
player2_score = document.querySelector('.player2-score'),
player1_point = 0,
player2_point = 0;

let count = 0
 
// reset
function reset(){
    for(let i = 0;i<9;i++){
        span[i].innerHTML = ''
        span[i].classList = ''
    }
    for(let i = 0;i< 8;i++){
        p[i].style.display = 'none'
    }
    listplayer1.style.borderBottom = `2px solid #cf2f74`
    listplayer2.style.borderBottom = `0`
    
    lines.style.zIndex = '-10' 
}

// sleep 
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
//  alert player1 when win the round
function play1(){
    alert('PLAYER-1  WIN THIS ROUND')
}
//  alert player2 when win the round
function play2(){
    alert('PLAYER-2 WIN THIS ROUND')
}

// main function start

function player(shape){
    if(count<9){
        if(!shape.classList.contains('placed')){
            if(count%2==0){
                shape.innerHTML = `<i class="fa-solid fa-x"></i>`
                shape.setAttribute('class','first placed')
                count++
                listplayer1.style.borderBottom = `0`
                listplayer2.style.borderBottom = `2px solid #284387`

            }
            else{
                shape.innerHTML = `<i class="fa-solid fa-o"></i>`
                shape.setAttribute('class','second placed')
                listplayer2.style.borderBottom = `0`
                listplayer1.style.borderBottom = `2px solid #cf2f74`
                count++
            }
        }
    }
    
}


for(let i =0;i<9;i++){
    span[i].addEventListener('click',()=>{
        // player-1
        // row
        if(span[0].innerHTML == player1 && span[1].innerHTML == player1  && span[2].innerHTML == player1){
            count = 0
            lines.style.zIndex  ='10'
            p[3].style.display = 'block';
            play1()
            player1_point++ 
            wait(500)
            reset()
            console.log(player1_point);
            
        }
        else if(span[3].innerHTML == player1 && span[4].innerHTML == player1  && span[5].innerHTML == player1){
            count = 0
            lines.style.zIndex  ='10'
            p[4].style.display = 'block';
            play1()
            player1_point++
            wait(500)
            reset()  
        }
        else if(span[6].innerHTML == player1 && span[7].innerHTML == player1  && span[8].innerHTML == player1){
            count = 0
            lines.style.zIndex  ='10'
            p[5].style.display = 'block';
            play1()
            player1_point++
            wait(500)
            reset()  
        }
        // col
        else if(span[0].innerHTML == player1 && span[3].innerHTML == player1  && span[6].innerHTML == player1){
            count = 0
            lines.style.zIndex  ='10'
            p[0].style.display = 'block';
            play1()
            player1_point++  
            wait(500)
            reset()
        }
        else if(span[1].innerHTML == player1 && span[4].innerHTML == player1  && span[7].innerHTML == player1){
            count = 0
            lines.style.zIndex  ='10'
            p[1].style.display = 'block';
            play1()
            player1_point++ 
            wait(500)
            reset() 
        }
        else if(span[2].innerHTML == player1 && span[5].innerHTML == player1  && span[8].innerHTML == player1){
            count = 0
            lines.style.zIndex  ='10'
            p[2].style.display = 'block';
            play1()
            player1_point++  
            wait(500)
            reset()
        }
        // cross
        else if(span[0].innerHTML == player1 && span[4].innerHTML == player1  && span[8].innerHTML == player1){
            count = 0
            lines.style.zIndex  ='10'
            p[6].style.display = 'block';
            play1()
            player1_point++ 
            wait(500)
            reset() 
        }
        else if(span[2].innerHTML == player1 && span[4].innerHTML == player1  && span[6].innerHTML == player1){
            count = 0
            lines.style.zIndex  ='10'
            p[7].style.display = 'block';
            play1()
            player1_point++ 
            wait(500)
            reset() 
        }


        // player2
        // row
        else if(span[0].innerHTML == player2 && span[1].innerHTML == player2  && span[2].innerHTML == player2){
            count = 0
            lines.style.zIndex  ='10'
            p[3].style.display = 'block';
            play2()
            player2_point++ 
            wait(500)
            reset() 
        }
        else if(span[3].innerHTML == player2 && span[4].innerHTML == player2  && span[5].innerHTML == player2){
            count = 0
            lines.style.zIndex  ='10'
            p[4].style.display = 'block';
            play2()
            player2_point++ 
            wait(500)
            reset()  
        }
        else if(span[6].innerHTML == player2 && span[7].innerHTML == player2  && span[8].innerHTML == player2){
            count = 0
            lines.style.zIndex  ='10'
            p[5].style.display = 'block';
            play2()
            player2_point++ 
            wait(500)
            reset()  
        }
        // col
        else if(span[0].innerHTML == player2 && span[3].innerHTML == player2  && span[6].innerHTML == player2){
            count = 0
            lines.style.zIndex  ='10'
            p[0].style.display = 'block';
            play2()
            player2_point++ 
            wait(500)
            reset()  
        }
        else if(span[1].innerHTML == player2 && span[4].innerHTML == player2  && span[7].innerHTML == player2){
            count = 0
            lines.style.zIndex  ='10'
            p[1].style.display = 'block';
            play2()
            player2_point++  
            wait(500)
            reset() 
        }
        else if(span[2].innerHTML == player2 && span[5].innerHTML == player2  && span[8].innerHTML == player2){
            count = 0
            lines.style.zIndex  ='10'
            p[2].style.display = 'block';
            play2()
            player2_point++ 
            wait(500)
            reset()  
        }
        // cross
        else if(span[0].innerHTML == player2 && span[4].innerHTML == player2  && span[8].innerHTML == player2){
            count = 0
            lines.style.zIndex  ='10'
            p[6].style.display = 'block';
            play2()
            player2_point++ 
            wait(500)
            reset()  
        }
        else if(span[2].innerHTML == player2 && span[4].innerHTML == player2  && span[6].innerHTML == player2){
            count = 0
            lines.style.zIndex  ='10'
            p[7].style.display = 'block';
            play2()
            player2_point++  
            wait(500)
            reset() 
        }
        if(count>8){
            count = 0
            alert('GAME OVER!,BOTH OF YOU FAILED THIS ROUND')
            reset();
        }

        player1_score.innerText = player1_point
        player2_score.innerText = player2_point

    })
}
