//assigning js variables to html elements
var myPig = document.getElementById('about-text');
var myResume = document.getElementById('resume');
var myGithub = document.getElementById('github');
var myLinkedin = document.getElementById('linkedin');
var myContact = document.getElementById('contact');   

/* for(var i=0;i < pictures.length;i++){
    pictures[i].addEventListener('mouseover',chicken);
} */

// event listeners for each img, on img
myResume.addEventListener('mouseover',resume);
myGithub.addEventListener('mouseover',github);
myLinkedin.addEventListener('mouseover',linkedin);
myContact.addEventListener('mouseover',contact);

// event listeners for mouse moving off img
myResume.addEventListener('mouseout',steak);
myGithub.addEventListener('mouseout',steak);
myLinkedin.addEventListener('mouseout',steak);
myContact.addEventListener('mouseout',steak); 

// functions that change about text according to image hovered over
function resume() {
myPig.textContent = "Take a look at my resume";
myPig.style.opacity = 1;
};

function github() {
    myPig.textContent = "1 Commit a day is the best way";
    myPig.style.opacity = 1;
}

function linkedin() {
    myPig.textContent = "See me in a dress shirt";
    myPig.style.opacity = 1;
}

function contactPage() {
    myPig.textContent = "Reach out ot me!";
    myPig.style.opacity = 1;
}

// function to reset the about box text after hover
function steak() {
    myPig.textContent = "Welcome to my website!"
    myPig.style.opacity = 1;
    myPig.style.transition = ease;
    myPig.style.transitionDuration = 2;
}

//function to scroll page on button click

function ScrollIntoViewDown (){
    var target = document.getElementById("body2");

    scrollTo(target);
}

// function to fill blank project slots

function Slot1(){
    var panel = document.getElementsByClassName("panel");

    if(panel.html = empty){
panel.div.html = Block text "Under construction";
    }
    else{
        panel.border.css = glowing/bright border;
    }
}