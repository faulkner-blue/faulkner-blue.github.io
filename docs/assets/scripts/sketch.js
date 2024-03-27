let table = [208,45,100,
             197,21,100,
             174,8,100,
             240,0,94,
             96,47,85,
             107,46,60];
             //28, 47, 73]; brown


var pageW = 0;  // document.getElementById("body").scrollWidth;
var pageH = 0; //document.getElementById("body").scrollHeight * 1.25;
var MOBILE = 0;

function setup() {
    reset();
}

//THE JUICE
function reset() {
    pixelDensity(1);
   pageW = document.documentElement.clientWidth;//windowWidth;
   pageH = document.documentElement.clientHeight; //windowHeight;
    MOBILE = (pageW <= 600) && (pageH <= 860);
  var myCanvas = createCanvas(pageW,pageH); //document.getElementById("body").scrollWidth, document.getElementById("body").scrollHeight, WEBGL);
  myCanvas.parent("wallpaper");
  myCanvas.position(0,0);
  myCanvas.style('z-index','-1');
  myCanvas.elt.style.position = "fixed";  
    
  background(255);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 255);
    
  var shapeCount = 25;
  var mod = (random(2,shapeCount));
   
//drawingContext.filter = 'blur('15px)';
  for(let i = 0; i < shapeCount; i++){ 
    push();
      if(!MOBILE){
        drawingContext.filter = 'blur('+str(random(2,40))+'px)';
      }

    translate(random(0, pageW),random(0, pageH));
    rotate(random(0,360));
    let square = new shape(i,mod);    
    pop();
  }
    if(MOBILE){
        filter(BLUR, random(2,20));
    }
}


function windowResized() {
    if (!MOBILE){
        reset();
    }
}

class shape {
  constructor(id,mod) {
//    this.x = random(0, pageW);
//    this.y = random(0, pageH);
    this.w = random(pageW*.01, pageW/1.25);
    this.h = random(pageW*.01, pageH/1.5);
    
    id = id % (table.length / 3);  
    noStroke();
    fill(getColor(id,0), getColor(id,1), getColor(id,2), random(30,255)); //get color from table
    
    // basic logic to select between different shapes
    if(id%mod > 2){
      rect(0, 0, this.w, this.h);
    }
    else{
      ellipse(0,0,this.w,this.h);
    }
    
  }
}

function getColor(id, hsb) {
  if(hsb==0){   
    return(int(table[id * 3])); 
  }
  else if(hsb==1){ 
    return( int(table[id * 3 + 1]));
  }
  else{
    return( int(table[id * 3 + 2]));
  }

}
