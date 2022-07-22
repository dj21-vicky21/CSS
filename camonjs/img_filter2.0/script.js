function run(){
    function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for (var src in sources) {
          numImages++;
        }
        for (var src in sources) {
          images[src] = new Image();
          images[src].onload = function () {
            if (++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }
      function buildStage(images) {
        var stage = new Konva.Stage({
          container: 'container',
          width: window.innerWidth/2,
          height: window.innerHeight,
        });

        var layer = new Konva.Layer();

        var pic = new Konva.Image({
          image: images.pic,
          x: 0,
          y:0,
          width:window.innerWidth/2,
          height:window.innerHeight,
        //   draggable: true,
        });
      


        // Filter section start
        pic.cache();      
        layer.add(pic);
        stage.add(layer);
        
        pic.position({
          x: 0,
          y: 0,
        });
        pic.cache();
        pic.filters([Konva.Filters.Brighten,Konva.Filters.Contrast,Konva.Filters.Noise,Konva.Filters.Pixelate,Konva.Filters.HSL,Konva.Filters.HSV,Konva.Filters.Blur,Konva.Filters.Enhance]);
        layer.add(pic);
        stage.add(layer);
        
        var sliders = ['brightness','contrast','noise','pixelSize','hue','saturation','luminance','enhance','value'];
        sliders.forEach(function (attr) {
            var slider = document.getElementById(attr);
            function update() {
    
            pic[attr](parseFloat(slider.value));
            console.log(slider.value);
          }
          slider.oninput = update;
  
          update();

        
        });
    


        var blur = document.getElementById('blur');
        blur.oninput = function () {
          pic.blurRadius(blur.value);
        };


        // var kaleidoscope = document.getElementById('kaleidoscope');
        // lion.kaleidoscopePower(3);
        // kaleidoscope.oninput = function () {
        //   lion.kaleidoscopeAngle(kaleidoscope.value);
        // };


// Filter section end
// Remove Filter
        
      }

      var img 
      let upload_btn = document.getElementById('selectedFile')
      // display img
      upload_btn.addEventListener('change',(e)=>{
            const file = document.getElementById('selectedFile').files[0];
            const reader = new FileReader();
            if(file){
                filename = file.name;
                reader.readAsDataURL(file);
            }
            reader.addEventListener('load',()=>{
                img = new Image();
                img.src = reader.result;
                var sources = {
                  pic: img.src,
                };

                loadImages(sources, buildStage);
  
            });
      });    


}


