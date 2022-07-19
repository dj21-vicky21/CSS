function run(){
    

    // brightness.oninput = function() {
    //     console.log(this.value);
    // }
    // program-starts
    // required
    const canvas =document.getElementById('canvas');
    if(canvas.getContext){
        const ctx = canvas.getContext('2d')
        let img = new Image();
        let filename = '';
        const upload_btn = document.getElementById('selectedFile') 

        upload_btn.addEventListener('change',(e)=>{
            const file = document.getElementById('selectedFile').files[0];
            const reader = new FileReader();
            if(file){
                filename = file.name;
                reader.readAsDataURL(file);
            }
            // display img start
            reader.addEventListener('load',()=>{
                img = new Image();
                img.src = reader.result;
                img.onload = function(){
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img,0,0,img.width,img.height)
                }
    
            });
            // display img end
        });

        var brightness = document.getElementById('brightness-value')
        var contrast = document.getElementById('contrast-value')
        var contrast = document.getElementById('contrast-value')
        brightness.oninput = function(){
                console.log(this.value);
                if(this.value > 0){
                    Caman("#canvas",img,function(){
                        this.brightness(1).render()
                    });
                }
                else if(this.value < 0){
                    Caman("#canvas",img,function(){
                        this.brightness(-1).render()
                    });
                }
                
            }
        // contrast.oninput = function(){
        //         console.log(this.value);
        //     }
        
       
        
            
    
    
    }
    
}