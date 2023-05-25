/* Declare variables below to save the different sections (divs) of your story*/
let paragraph=document.querySelector("p");
let image=document.querySelector("img"); 
let b1s=document.querySelector(".buttons1");
let sleep1=document.querySelector(".option-sleep1");
let sleep2=document.querySelector(".option-sleep2");
let watch=document.querySelector(".option-watch");

let close=document.querySelector(".option-close");
let stay=document.querySelector(".option-stay1");
let stay2=document.querySelector(".option-stay2");
let opening=document.querySelector(".story-opening");
let option1=document.querySelector(".option-one-screen");
let option2=document.querySelector(".option-two-screen");
let option1end=document.querySelector(".option-one-end");
let option2end=document.querySelector(".option-two-end");
let title=document.querySelector(".title");



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
sleep1.onclick=function(){
    option1.style.display="block";
    opening.style.display="none";
    title.style.display="none";
    b1s.style.display="none";
};


stay.onclick=function(){
   option2.style.display="block";
    opening.style.display="none";
    title.style.display="none";
    b1s.style.display="none";
    sleep2.style.display="block";
  };


close.onclick=function(){

};
stay2.onclick=function () {
	option2.style.display="none";
    option2end.style.display="block";
   };
sleep2.onclick=function () {
	option1.style.display="none";
    option1end.style.display="block";
   };
watch.onclick=function () {
	option1.style.display="none";
    option2end.style.display="block";
  
   };
close.onclick=function() {
 	option2.style.display="none";
    option1end.style.display="block";
};

title.onclick=function() {
title.innerHTML= "Click on the buttons not me!";
};


    






