$(document).ready(function(){

    $('.butt1').click(function() {
    window.location = "about.html";});
    
    $(".centered").ready(function(){
    $(".profilePicture").delay(1000).animate({
        right: '400px',
        height: '300px',
        width: '300px'});}); 
    
    $(".aboutText").hide(0).delay(1200).fadeIn(1500);
    
    
    

});