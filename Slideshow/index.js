var myImages =["https://www.lottabull.com/males/Lincoln/lincoln1.jpg", "https://s.abcnews.com/images/Blotter/GTY-english-bulldog-rc-170926_12x5_992.jpg","https://www.insidedogsworld.com/wp-content/uploads/2016/04/cute-english-bulldog-puppies-1024x819.jpg","https://furrybabiesinc.com/wp-content/uploads/2018/06/bulldog.jpg","http://secure.terrificpets.com/images/uploads/17342121522494_1.jpg"];


var captionImages =["Look","How","Freaking","Adorable","They Are"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next




