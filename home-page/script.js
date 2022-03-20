//assigning js variables to html elements
var myPig = document.getElementById('about-text');
var myResume = document.getElementById('resume');
var myGithub = document.getElementById('github');
var myLinkedin = document.getElementById('linkedin');
var myPersonal = document.getElementById('personal-projects');   

/* for(var i=0;i < pictures.length;i++){
    pictures[i].addEventListener('mouseover',chicken);
} */

// event listeners for each img, on img
myResume.addEventListener('mouseover',resume);
myGithub.addEventListener('mouseover',github);
myLinkedin.addEventListener('mouseover',linkedin);
myPersonal.addEventListener('mouseover',personalProjects);

// event listeners for mouse moving off img
myResume.addEventListener('mouseout',steak);
myGithub.addEventListener('mouseout',steak);
myLinkedin.addEventListener('mouseout',steak);
myPersonal.addEventListener('mouseout',steak); 

// functions that change about text according to image hovered over
function resume() {
myPig.textContent = "Take a look at my resume";
};

function github() {
    myPig.textContent = "1 Commit a day is the best way";
}

function linkedin() {
    myPig.textContent = "See me in a dress shirt";
}

function personalProjects() {
    myPig.textContent = "Coding projects and things";
}

// function to reset the about box text after hover
function steak() {
    myPig.textContent = "Software engineer extraordinaire";
}

    

