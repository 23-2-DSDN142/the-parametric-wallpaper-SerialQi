//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
//background
var rectangleX = 0; //horizontal rect start point
var rectangleY = 200; //horizontal rect end point 
var rectangleZ = 20; // rectangle reound edges 
//flower
var flowerSize = 40; //petal size and flower centre size  
var flowerSize1 = 120;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("white"); //deep pink background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if(mouseX < 10){
 //rect horizontal 
 noStroke()
 fill(179, 127, 175) 
 rect(rectangleX,25,rectangleY ,30,rectangleZ); // a rect with no outline 

 fill(111, 123, 171) 
 rect(rectangleX,85,rectangleY ,30,rectangleZ); // a rect with no outline 

 fill(179, 127, 175) 
 rect(rectangleX,145,rectangleY ,30,rectangleZ); // a rect with no outline 
 
 
  // verticle 
 noStroke()
 fill(247, 220, 246) //pink
 rect(25,rectangleX,30,rectangleY,rectangleZ);

 fill(127, 119, 189) 
 rect(85,rectangleX,30,rectangleY,rectangleZ);

 fill(139, 101, 173)
 rect(145,rectangleX,30,rectangleY,rectangleZ);
 
    }
    else{
      noStroke()
      fill(252,234,188)//yellow
      rect(0,0,55,45);//1
      rect(145,0,55,45);//2
      rect(55,45,90,45);
      rect(0,90,55,65);//1
      rect(145,90,55,65);
      rect(55,155,90,45);
    }
 
 
  //rect horizontal 
 noStroke()
 fill(179, 127, 175) 
 rect(rectangleX,25,rectangleY ,30,rectangleZ); // a rect with no outline 

 fill(111, 123, 171) 
 rect(rectangleX,85,rectangleY ,30,rectangleZ); // a rect with no outline 

 fill(179, 127, 175) 
 rect(rectangleX,145,rectangleY ,30,rectangleZ); // a rect with no outline 
 
 
  // verticle 
 noStroke()
 fill(139, 101, 173) 
 rect(25,rectangleX,30,rectangleY,rectangleZ);

 fill(127, 119, 189) 
 rect(85,rectangleX,30,rectangleY,rectangleZ);

 fill(139, 101, 173)
 rect(145,rectangleX,30,rectangleY,rectangleZ);
 
 // flower 
 noStroke()
 fill("white")
 ellipse(100,100,flowerSize,flowerSize1) //verticle
 ellipse(100,100,flowerSize1,flowerSize) //horizontal 

 noStroke()
 fill(222, 192, 73)//bright yellow
 circle(100,100,flowerSize); //flower centre
   
}
  