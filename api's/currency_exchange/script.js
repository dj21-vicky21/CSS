let currency = () =>{
        var select = document.querySelectorAll('select')
        let html = ''

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`)
        .then(response => response.json())
        .then(data => {
                var arr1 = Object.keys(data)
                let arr1size = arr1.length
                let array1  = arr1.slice(1, arr1size)
                // console.log(array1)
                

                var arr2 = Object.values(data)
                let arr2size = arr2.length
                let array2 = arr2.slice(1,arr2size)
                
                
                var arr3 = array1.map((a1,a2) => {
                        return html += `<option value="${a1}">${a1.toUpperCase()} <span>(${array2[a2]})</span></option>`
                })
                // console.log(html);
                
                
                var select = document.querySelectorAll('select')
                for(i=0;i<select.length;i++){
                        select[i].innerHTML = html
                }
                var select = document.querySelectorAll('select')
                select[0].addEventListener('change',()=>{
                        let input = document.querySelectorAll('input')
                        let select0 = select[0].value
                        let select1 = select[1].value
                        console.log(select[0].value);
                        console.log(select[1].value);
                        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${select0}/${select1}.json`)
                        .then(response => response.json())
                        .then(data =>{
                                var data2 = Object.values(data)
                                rate = data2[1]
                                input[1].value = input[0].value*rate
                                input[0].value = input[1].value/rate
                                input[0].addEventListener('keyup',()=>{
                                        input[1].value = input[0].value*rate
                                });
                                input[1].addEventListener('keyup',()=>{
                                        input[0].value = input[1].value/rate
                                });
                        })
                        .catch(err => console.error(err));
                });
                select[1].addEventListener('change',()=>{
                        let input = document.querySelectorAll('input')
                        let select0 = select[0].value
                        let select1 = select[1].value
                       
                        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${select0}/${select1}.json`)
                        .then(response => response.json())
                        .then(data =>{
                                var data2 = Object.values(data)
                                rate = data2[1]
                                input[1].value = input[0].value*rate
                                input[0].value = input[1].value/rate
                                input[0].addEventListener('keyup',()=>{
                                        input[1].value = input[0].value*rate
                                });
                                input[1].addEventListener('keyup',()=>{
                                        input[0].value = input[1].value/rate
                                });
                                
                        })
                        .catch(err => console.error(err));
                });

                




        }).catch(err=> console.error(err));
        

        



}
currency()