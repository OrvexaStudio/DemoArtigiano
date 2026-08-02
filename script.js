document.addEventListener("DOMContentLoaded", () => {


// NAVBAR EFFECT

const nav = document.querySelector("nav");


window.addEventListener("scroll", () => {


if(window.scrollY > 80){

nav.style.background = "rgba(20,15,10,0.85)";
nav.style.backdropFilter = "blur(10px)";
nav.style.transition = "0.4s";


}else{

nav.style.background = "transparent";

}


});






// SCROLL REVEAL

const sections = document.querySelectorAll(
".about, .services, .cards article, .projects, .contact"
);



sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(50px)";
section.style.transition = "1s ease";

});




const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";


observer.unobserve(entry.target);


}


});


},{
threshold:0.15
});



sections.forEach(section => {

observer.observe(section);

});








// SMOOTH SCROLL


document.querySelectorAll('a[href^="#"]').forEach(link => {


link.addEventListener("click", function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});








// BUTTON HOVER EFFECT


const buttons =
document.querySelectorAll(
".btn, .hero a, .contact button"
);



buttons.forEach(button => {


button.addEventListener("mouseenter", ()=>{

button.style.transform="translateY(-3px)";
button.style.transition="0.3s";

});



button.addEventListener("mouseleave", ()=>{

button.style.transform="translateY(0)";

});


});



});
