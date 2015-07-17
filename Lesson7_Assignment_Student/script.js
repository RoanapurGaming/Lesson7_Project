/**
* Created with LIS2360_Lesson7_jQuery.
Program Name: Recipe Display Application
* Author: Roanapur
* Date: 2015-07-17
* Filename: script.js
* Time: 05:53 PM
* To change this template use Tools | Templates.
*/
function display(event){
    $(event.currentTarget).next().fadeIn("slow");
}//end of display()

/*
$("h3").click(display);
*/

function display2(event) {
   $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
}

/*
$("h3").click(display2);
*/

$("h3").hover(display2);

$("h3").hover(function(){
       $(this).css("background-color", "yellow");
       }, function(){
       $(this).css("background-color", "pink");
});