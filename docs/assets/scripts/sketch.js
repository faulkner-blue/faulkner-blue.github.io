let table = [208,45,100,
             197,21,100,
             174,8,100,
             240,0,94,
             96,47,85,
             107,46,60];

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("wallpaper");
  myCanvas.position(0,0);
  myCanvas.style('z-index','-1');
    
  background(255);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 255);
  
  var shapeCount = 20;
  var mod = (random(2,shapeCount));
  
  for(let i = 0; i < shapeCount; i++){ 
    let square = new shape(i,mod);
    
    rotate(random(0,360));
    filter(BLUR, random(5,30));
  }
}


class shape {
  constructor(id,mod) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.w = random(5, windowWidth/2.);
    this.h = random(5, windowHeight/2.);
        
    noStroke();
    fill(getColor(id,0), getColor(id,1), getColor(id,2)); //get color from table
    
    // basic logic to select between different shapes
    if(id%mod > 2){
      rect(this.x, this.y, this.w, this.h);
    }
    else{
      ellipse(this.x,this.y,this.w,this.h);
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
