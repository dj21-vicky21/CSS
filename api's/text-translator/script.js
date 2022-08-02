function run(){
    var selecttag = document.querySelectorAll('select'),
    sourcetext = document.querySelector('.source-text'), 
    targettext = document.querySelector('.target-text'),
    copyicon = document.querySelectorAll('.fa-copy');




    
    selecttag[0].addEventListener('change',()=>{
        const url = `https://api.mymemory.translated.net/get?q=${sourcetext.value}&langpair=${selecttag[0].value}|${selecttag[1].value}`;
        if(sourcetext.value.length>0){
            fetch(url).then(res=>res.json()).then(data=>{
                targettext.value=data.responseData.translatedText
            })
        }
        
    });
    selecttag[1].addEventListener('change',()=>{
        const url = `https://api.mymemory.translated.net/get?q=${sourcetext.value}&langpair=${selecttag[0].value}|${selecttag[1].value}`;
        if(sourcetext.value.length>0){
            fetch(url).then(res=>res.json()).then(data=>{
               targettext.value=data.responseData.translatedText
            })
        }
        
    });
    sourcetext.addEventListener('keyup',()=>{
        const url = `https://api.mymemory.translated.net/get?q=${sourcetext.value}&langpair=${selecttag[0].value}|${selecttag[1].value}`;
        if(sourcetext.value.length>0){
            fetch(url).then(res=>res.json()).then(data=>{
                targettext.value = data.responseData.translatedText
            })
        }
    });
    // copy text
    copyicon[1].addEventListener('click',()=>{
        navigator.clipboard.writeText(targettext.value)
    });
    copyicon[0].addEventListener('click',()=>{
        navigator.clipboard.writeText(sourcetext.value)
    })
    if(sourcetext.value = ''){
        targettext.value = ""
    }

}