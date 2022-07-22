function run(){
    var width = window.innerWidth;
    var height = window.innerHeight/1.3
    var layer = new Konva.Layer();


    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height,
      });    


    var tempLayer = new Konva.Layer();
    stage.add(tempLayer);




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
            layer.add(sq1);
        sq1.on('dragend',()=>{
          var tr = new Konva.Transformer({
            centeredScaling: true,
            rotationSnaps: [0, 90, 180, 270],
            
        
          });
          sq1.on('click',()=>{
            tr.resizeEnabled(false),
            tr.rotateEnabled(false),
            tr.borderEnabled(false)
            
          })
          layer.add(tr);
          tr.nodes([sq1]);
        })
        stage.add(layer)
    })



    rectangle.addEventListener('click',()=>{
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
        rect1.on('dragend',()=>{
          var tr = new Konva.Transformer({
            centeredScaling: true,
            rotationSnaps: [0, 90, 180, 270],
            
        
          });
          rect1.on('click',()=>{
            tr.resizeEnabled(false),
            tr.rotateEnabled(false),
            tr.borderEnabled(false)
            
          })
          layer.add(tr);
          tr.nodes([rect1]);
        })
        stage.add(layer)
    })



    triangle.addEventListener('click',()=>{
      var triangle = new Konva.RegularPolygon({
        x: 100,
        y: 100,
        sides: 3,
        radius: 80,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable:true
      });
      layer.add(triangle);
      triangle.on('dragend',()=>{
        var tr = new Konva.Transformer({
          centeredScaling: true,
          rotationSnaps: [0, 90, 180, 270],
          
      
        });
        triangle.on('click',()=>{
          tr.resizeEnabled(false),
          tr.rotateEnabled(false)
          tr.borderEnabled(false)
          
        })
        layer.add(tr);
        tr.nodes([triangle]);
      })
      stage.add(layer);
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
          circle.on('dragend',()=>{
            var tr = new Konva.Transformer({
              centeredScaling: true,
              rotationSnaps: [0, 90, 180, 270],
              
          
            });
            circle.on('click',()=>{
              tr.resizeEnabled(false),
              tr.rotateEnabled(false),
              tr.borderEnabled(false)
              
            })
            layer.add(tr);
            tr.nodes([circle]);
          })
          stage.add(layer);
    })



    ring.addEventListener('click',()=>{
      var ring = new Konva.Ring({
        x: 100,
        y: 100,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4,
        draggable:true
      });

      // add the shape to the layer
      layer.add(ring);
      ring.on('dragend',()=>{
        var tr = new Konva.Transformer({
          centeredScaling: true,
          rotationSnaps: [0, 90, 180, 270],
          
      
        });
        ring.on('click',()=>{
          tr.resizeEnabled(false),
          tr.rotateEnabled(false),
          tr.borderEnabled(false)
          
        })
        layer.add(tr);
        tr.nodes([ring]);
      })
      stage.add(layer);
    })



    star.addEventListener('click',()=>{
        var star = new Konva.Star({
            x: 100,
            y: 100,
            numPoints: 5,
            innerRadius: 40,
            outerRadius: 70,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4,
            draggable:true
          });
    
          // add the shape to the layer
          layer.add(star);
          star.on('dragend',()=>{
            var tr = new Konva.Transformer({
              centeredScaling: true,
              rotationSnaps: [0, 90, 180, 270],
              
          
            });
            star.on('click',()=>{
              tr.resizeEnabled(false),
              tr.rotateEnabled(false),
              tr.borderEnabled(false)
              
            })
            layer.add(tr);
            tr.nodes([star]);
          })
          stage.add(layer);
    })



    polygon.addEventListener('click',()=>{
        var hexagon = new Konva.RegularPolygon({
            x: 100,
            y: 100,
            sides: 6,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable:true
          });
    
          layer.add(hexagon);
          hexagon.on('dragend',()=>{
            var tr = new Konva.Transformer({
              centeredScaling: true,
              rotationSnaps: [0, 90, 180, 270],
              
          
            });
            hexagon.on('click',()=>{
              tr.resizeEnabled(false),
              tr.rotateEnabled(false)
              tr.borderEnabled(false)
              
            })
            layer.add(tr);
            tr.nodes([hexagon]);
          })
          stage.add(layer);
    

    
    })



    stage.on('dragstart', function (e) {
      e.target.moveTo(tempLayer);
    });
    var previousShape;
    stage.on('dragmove', function (evt) {
      var pos = stage.getPointerPosition();
      var shape = layer.getIntersection(pos);
      if (previousShape && shape) {
        if (previousShape !== shape) {
          // leave from old targer
          previousShape.fire(
            'dragleave',
            {
              type: 'dragleave',
              target: previousShape,
              evt: evt.evt,
            },
            true
          );

          // enter new targer
          shape.fire(
            'dragenter',
            {
              type: 'dragenter',
              target: shape,
              evt: evt.evt,
            },
            true
          );
          previousShape = shape;
        } else {
          previousShape.fire(
            'dragover',
            {
              type: 'dragover',
              target: previousShape,
              evt: evt.evt,
            },
            true
          );
        }
      } else if (!previousShape && shape) {
        previousShape = shape;
        shape.fire(
          'dragenter',
          {
            type: 'dragenter',
            target: shape,
            evt: evt.evt,
          },
          true
        );
      } else if (previousShape && !shape) {
        previousShape.fire(
          'dragleave',
          {
            type: 'dragleave',
            target: previousShape,
            evt: evt.evt,
          },
          true
        );
        previousShape = undefined;
      }
    });
    stage.on('dragend', function (e) {
      var pos = stage.getPointerPosition();
      var shape = layer.getIntersection(pos);
      if (shape) {
        previousShape.fire(
          'drop',
          {
            type: 'drop',
            target: previousShape,
            evt: e.evt,
          },
          true
        );
      }
      previousShape = undefined;
      e.target.moveTo(layer);
    });
    function fitStageIntoParentContainer() {
      var container = document.querySelector('#container');

      var containerWidth = container.offsetWidth;

      var scale = containerWidth / width;

      stage.width(width * scale);
      stage.height(height * scale);
      stage.scale({ x: scale, y: scale });
    }





    fitStageIntoParentContainer();
    window.addEventListener('resize', fitStageIntoParentContainer);

}