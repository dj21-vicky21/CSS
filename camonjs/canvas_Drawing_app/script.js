function run(){
    

    var width = window.innerWidth;
        var height = window.innerHeight/1.43;
        var layer = new Konva.Layer();
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height,
      });    
      
    square.addEventListener('click',()=>{
        var sq1 = new Konva.Rect({
          x: 20,
          y: 20,
          width: 100,
          height: 100,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 4,
          draggable:true
        });
        // add the shape to the layer
        layer.add(sq1);
        stage.add(layer)
    })
    rectangle.addEventListener('click',()=>{
        var width = window.innerWidth;
        var height = window.innerHeight/1.43;
        var layer = new Konva.Layer();
  
        var rect1 = new Konva.Rect({
          x: 20,
          y: 20,
          width: 100,
          height: 50,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 4,
          draggable:true
        });
        // add the shape to the layer
        layer.add(rect1);
        stage.add(layer)
    })
    circle.addEventListener('click',()=>{
        var circle = new Konva.Circle({
            x: 100,
            y: 100,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable:true
          });
    
          // add the shape to the layer
          layer.add(circle);
    
          // add the layer to the stage
          stage.add(layer);
    })
    star.addEventListener('click',()=>{
        var star = new Konva.Star({
            x: stage.width() / 2,
            y: stage.height() / 2,
            numPoints: 6,
            innerRadius: 40,
            outerRadius: 70,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4,
            draggable:true
          });
    
          // add the shape to the layer
          layer.add(star);
    
          // add the layer to the stage
          stage.add(layer);
    })
    polygon.addEventListener('click',()=>{
        var hexagon = new Konva.RegularPolygon({
            x: 100,
            y: 150,
            sides: 6,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable:true
          });
    
          layer.add(hexagon);
    
          // add the layer to the stage
          stage.add(layer);
    

    
    })

}