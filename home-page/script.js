/* $(document).ready(function() {

    $('.img').on('mouseover', function () {
        $(img).addClass('done');
        console.log("huh");
    });
    
});   */
var pictures = document.getElementsByClassName('.img');
for(var i=0;i < pictures.length;i++){
    pictures[i].addEventListener('mouseover',chicken);
}

var myPig = document.getElementById('about-text');
// pictures.addEventListener('mouseover',chicken());

function chicken() {
//var pictures = document.getElementsByClassName(".img");
for(var i= 0;i < pictures.length;i++){
myPig.textContent = "gotcha bitch";
}
};
    

