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
    if (output1.innerHTML == ''){
        output1.innerHTML = ' Please Enter Number Only'
    }

}

function number2_3(){
    start = 1
    end   = 100
    count = 0
    let divisor2 = document.getElementById('number2')
    let divisor3 = document.getElementById('number3')
    let output2  = document.getElementById('span2')
    let count2  = document.getElementById('count2')
    output2.innerHTML = ""
    while (start < end){
        if (start%divisor2.value == 0 && start%divisor3.value == 0) {
            output2.innerHTML += " "+start
            count +=1
        }
        start += 1
    }
    count2.innerHTML = 'count: '+count
    if (output2.innerHTML == ''){
        output2.innerHTML = ' Please Enter Number Only'
    }
    
}

function number4_5(){
    start = 1
    end   = 100
    count = 0
    let divisor4 = document.getElementById('number4')
    let divisor5 = document.getElementById('number5')
    let output3  = document.getElementById('span3')
    let count3  = document.getElementById('count3')
    output3.innerHTML = " "
    while (start < end){
        if (start%divisor4.value == 0 || start%divisor5.value == 0) {
            output3.innerHTML += " "+start
            count +=1
        }
        start += 1
    } 
    count3.innerHTML = 'count: '+count
    if (output3.innerHTML == ''){
        output3.innerHTML = ' Please Enter Number Only'
    }
}
