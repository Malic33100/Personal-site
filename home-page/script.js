//var pictures = document.getElementsByClassName('.img');
var myPig = document.getElementById('about-text');
var myA = document.getElementById('resume');
var myB = document.getElementById('github');
var myC = document.getElementById('linkedin');
var myD = document.getElementById('personal-projects');   

/* for(var i=0;i < pictures.length;i++){
    pictures[i].addEventListener('mouseover',chicken);
} */

//myPig.addEventListener('mouseover',chicken);
myA.addEventListener('mouseover',chicken);
myB.addEventListener('mouseover',chicken);
myC.addEventListener('mouseover',chicken);
myD.addEventListener('mouseover',chicken);
myA.addEventListener('mouseout',steak);
myB.addEventListener('mouseout',steak);
myC.addEventListener('mouseout',steak);
myD.addEventListener('mouseout',steak); 
// pictures.addEventListener('mouseover',chicken());

function chicken() {
myPig.textContent = "youre nosy arent you";
};

function steak() {
    myPig.textContent = "Software engineer extraordinaire";
}

    

