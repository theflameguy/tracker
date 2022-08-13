let gap=50;
let l =20;

xoff=1
yoff=2

let px=[]
let py=[]


function setup() {
  // put setup code here
  createCanvas(window.innerWidth,window.innerHeight);  //full scr
  // createCanvas(700, 700);  //test scr
  for(var i=0;i<width;i+=gap){
    for(var j=0;j<height;j+=gap){
      px.push(i);
      py.push(j);
    }
  }
  colorMode(HSB, 100);
  noFill();
  console.log(py.length)

}

function draw() {
  // put drawing code here
  // record the canvas(start)
  //if(frameCount===1)
  //capturer.start()
  background(20,0,0);
  mousex=mouseX//noise(xoff)*width
  mousey=mouseY//noise(yoff)*height
  for(var i=0;i<px.length;i++){
      // var th = (atan((mouseY-py[i])/(mouseX-px[i])))
	  
      var costh= (mousex-px[i])/dist(mousex,mousey,px[i],py[i])
      var sinth= (mousey-py[i])/dist(mousex,mousey,px[i],py[i])
      stroke(map(i,0,px.length,0,100),50,100)
      line(px[i],py[i],px[i]+l*costh,py[i]+l*sinth)
      // stroke(0,0,50);
      //ellipse(px[i],py[i],2*l,2*l);
  }
  xoff+=0.01
  yoff+=0.02

  // record the canvas(end)
  //var sec=15
  //if(frameCount< 60*sec){
    //capturer.capture(canvas)
  //}
  //else if(frameCount ===60*sec ){
    //capturer.save();
    //capturer.stop();
  //}

}

