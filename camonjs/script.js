function demo(){
    const canvas =document.getElementById('canvas');
    if(canvas.getContext){
        const ctx = canvas.getContext('2d')

    let img = new Image();
    let filename = '';

    // buttons
    const upload_btn = document.getElementById('upload_file') 
    const remove_btn = document.getElementById('remove_filter') 

    // file Upload
    upload_btn.addEventListener('change',(e)=>{
        const file = document.getElementById('upload_file').files[0];
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

        },false);
        // display img end
    });

    // filters Start
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('filter-btn')){
        if(e.target.classList.contains('increase_Brightness')){
            Caman("#canvas",img,function(){
                this.brightness(10).render()
            });
        }
        else if(e.target.classList.contains('decrease_Brightness')){
            Caman("#canvas",img,function(){
                this.brightness(-10).render()
            });
        }
        else if(e.target.classList.contains('increase_contrast')){
            Caman("#canvas",img,function(){
                this.contrast(10).render()
            });
        }
        else if(e.target.classList.contains('decrease_contrast')){
            Caman("#canvas",img,function(){
                this.contrast(-10).render()
            });
        }
        else if(e.target.classList.contains('increase_saturation')){
            Caman("#canvas",img,function(){
                this.saturation(10).render()
            });
        }
        else if(e.target.classList.contains('decrease_saturation')){
            Caman("#canvas",img,function(){
                this.saturation(-10).render()
            });
        }
        else if(e.target.classList.contains('vintage')){
            Caman("#canvas",img,function(){
                this.vintage().render()
            });
        }
        else if(e.target.classList.contains('lomo')){
            Caman("#canvas",img,function(){
                this.lomo().render()
            });
        }
        else if(e.target.classList.contains('clarity')){
            Caman("#canvas",img,function(){
                this.clarity().render()
            });
        }
        else if(e.target.classList.contains('sincity')){
            Caman("#canvas",img,function(){
                this.sinCity().render()
            });
        }

        




    }
})


document.getElementById('click',event=>{
    caman("#canvas",img,function(){
        this.revert()
    });
})
    // filters End
    }


}