let currency = () =>{
        var select = document.querySelectorAll('select')
        var select1 = document.getElementById('select1')
        var select2 = document.getElementById('select2')

        let html = ''

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`)
        .then(response => response.json())
        .then(data => {
                var arr1 = Object.keys(data)
                let arr1size = arr1.length
                let array1  = arr1.slice(1, arr1size)
                console.log(array1)
                

                var arr2 = Object.values(data)
                let arr2size = arr2.length
                let array2 = arr2.slice(1,arr2size)
                
                var arr3 = array1.map((a1,a2) => {
                        return html += `<option value="${a1}">${a1} <span>(${array2[a2]})</span></option>`
                })
                // console.log(html);
                
                
                var select = document.querySelectorAll('select')
                for(i=0;i<select.length;i++){
                        select[i].innerHTML = html
                }

                console.log(select[0].value);

                // fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr/usd.json')
                // .then(response => response.json())
                // .then(data => {
                //         console.log(data);
                //         let arr1 = Object.values(data)
                //         console.log(arr1[1]);
                // })
                // .catch(err => console.error(err));




        }).catch(err=> console.error(err));
        

        



}
currency()