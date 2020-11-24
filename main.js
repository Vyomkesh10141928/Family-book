var names = ["Father", "Mother", "Sister", "Brother"];
var images = ["download.png", "download.jfif","download.gif","download(1).jfif", "boy.jfif" ]
var i=0;
function nextslide(){
    document.getElementById("p1").innerHTML= reasons[i];
   document.getElementById("img2").src=images[i];
  i++;
  
   
}


