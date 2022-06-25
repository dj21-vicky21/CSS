function number1(){
    start = 1
    end   = 100
    count = 0
    let divisor1 = document.getElementById('number1')
    let output1 = document.getElementById('span1')
    let count1  = document.getElementById('count1')
    output1.innerHTML = ""
    while (start < end){
        if (start%divisor1.value == 0){
            output1.innerHTML += " "+start
            count +=1
        }
        start += 1
    }
    count1.innerHTML = 'count: '+count
    if (output1.innerHTML == '' ||  divisor1 > 100 ){
        output1.innerHTML = 'Input must be a Number and  Number < 100'
    }

}

function number2_3(){
    
    let divisor2 = document.getElementById('number2')
    let divisor3 = document.getElementById('number3')
    let output2  = document.getElementById('span2')
    let count2  = document.getElementById('count2')
    
    if (output2.innerHTML != '' ||  divisor2.value < 100 && divisor3.value < 100 ){
        start = 1
        end   = 100
        count = 0
        output2.innerHTML = ""
        while (start < end){
            if (start%divisor2.value == 0 && start%divisor3.value == 0) {
                output2.innerHTML += " "+start
                count +=1
            }
            start += 1
        }
        count2.innerHTML = 'count: '+count
    }
    else{
        output2.innerHTML = 'Input must be a Number and  Number < 100'
        count.innerText = 'Count: 0'

    }    
    
}

function number4_5(){
    let divisor4 = document.getElementById('number4')
    let divisor5 = document.getElementById('number5')
    let output3  = document.getElementById('span3')
    let count3  = document.getElementById('count3')
    if (output3.innerHTML != '' ||  divisor4.value  < 100  && divisor5.value < 100 ){
        start = 1
        end   = 100
        count = 0
        output3.innerHTML = " "
        while (start < end){
            if (start%divisor4.value == 0 || start%divisor5.value == 0) {
                output3.innerHTML += " "+start
                count +=1
            }
            start += 1
        } 
        count3.innerHTML = 'count: '+count
    }
    else{
        output3.innerHTML = 'Input must be a Number and  Number < 100'
        count3.innerText = 'count: 0' 

    }
}
