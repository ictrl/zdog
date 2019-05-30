let isSpinning = true;

let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    zoom: 4, //4x-zoom
    dragRotate: true,
    onDragStart : function(){
        isSpinning = false;
    }
});

//circle
new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    stroke: 5,
    color: '#636',
    fill: 0,
});

//square
new Zdog.Rect({
    addTo: illo,
    width: 20,
    height: 20,
    translate:{z: -10},
    stroke:3,
    color: '#E62',
    fill: true,
});

function animate(){
    if (isSpinning){
        illo.rotate.y += 0.03;
    }
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}


animate();
