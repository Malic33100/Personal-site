//assigning js variables to html elements
var AboutText = document.getElementById('about-text');
var myResume = document.getElementById('resume');
var myGithub = document.getElementById('github');
var myLinkedin = document.getElementById('linkedin');
var myContact = document.getElementById('contact');   

AboutText.textContent = "Hover over an icon to learn more!";

/* for(var i=0;i < pictures.length;i++){
    pictures[i].addEventListener('mouseover',chicken);
} */

// event listeners for each img, on img
myResume.addEventListener('mouseover',resume);
myGithub.addEventListener('mouseover',github);
myLinkedin.addEventListener('mouseover',linkedin);
myContact.addEventListener('mouseover',contactPage);

// event listeners for mouse moving off img
myResume.addEventListener('mouseout',ResetText);
myGithub.addEventListener('mouseout',ResetText);
myLinkedin.addEventListener('mouseout',ResetText);
myContact.addEventListener('mouseout',ResetText); 

// functions that change about text according to image hovered over
function resume() {
AboutText.textContent = "Take a look at my resume";
AboutText.style.opacity = 1;
};

function github() {
    AboutText.textContent = "1 Commit a day";
    AboutText.style.opacity = 1;
}

function linkedin() {
    AboutText.textContent = "See me in a dress shirt";
    AboutText.style.opacity = 1;
}

function contactPage() {
    AboutText.textContent = "Reach out to me!";
    AboutText.style.opacity = 1;
}

// function to reset the about box text after hover
function ResetText() {
    AboutText.textContent = "Hover over an icon to learn more!"
    AboutText.style.opacity = 1;
    AboutText.style.transition = "ease-in";
    AboutText.style.transitionDuration = 2;
}

// function to fill blank project slots

/* 
function Slot1(){
    var panel = document.getElementsByClassName("panel");

    if(panel.html = empty){
panel.div.html = Block text "Under construction";
    }
    else{
        panel.border.css = glowing/bright border;
    }
}
*/