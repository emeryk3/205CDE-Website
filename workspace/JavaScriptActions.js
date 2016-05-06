// Drop-Down Menus

//Listing mouseover effect on each drop-down menu item (includes their 'drops')
//Home
document.getElementById("dropper1").addEventListener("mouseover", HomeMouseOver);
document.getElementById("drop1").addEventListener("mouseover", HomeMouseOver);
document.getElementById("drop2").addEventListener("mouseover", HomeMouseOver);
//Nutrition
document.getElementById("dropper2").addEventListener("mouseover", NutritionMouseOver);
document.getElementById("drop3").addEventListener("mouseover", NutritionMouseOver);
document.getElementById("drop4").addEventListener("mouseover", NutritionMouseOver);
document.getElementById("drop5").addEventListener("mouseover", NutritionMouseOver);
//Exercises
document.getElementById("dropper3").addEventListener("mouseover", ExercisesMouseOver);
document.getElementById("drop6").addEventListener("mouseover", ExercisesMouseOver);
document.getElementById("drop7").addEventListener("mouseover", ExercisesMouseOver);
document.getElementById("drop8").addEventListener("mouseover", ExercisesMouseOver);
//Legends
document.getElementById("dropper4").addEventListener("mouseover", LegendsMouseOver);
document.getElementById("drop9").addEventListener("mouseover", LegendsMouseOver);
document.getElementById("drop10").addEventListener("mouseover", LegendsMouseOver);
//Extra
document.getElementById("dropper5").addEventListener("mouseover", ExtraMouseOver);
document.getElementById("drop11").addEventListener("mouseover", ExtraMouseOver);
document.getElementById("drop12").addEventListener("mouseover", ExtraMouseOver);

//Listing cancelover effect on each drop-down menu item (includes their 'drops')
//Home - Dropper1
document.getElementById("contentcell1").addEventListener("mouseover", HomeCancelOver);
document.getElementById("contentcell3").addEventListener("mouseover", HomeCancelOver);
document.getElementById("dropper2").addEventListener("mouseover", HomeCancelOver);
document.getElementById("dropper3").addEventListener("mouseover", HomeCancelOver);
document.getElementById("dropper4").addEventListener("mouseover", HomeCancelOver);
document.getElementById("dropper5").addEventListener("mouseover", HomeCancelOver);
//Nutrition - Dropper2
document.getElementById("contentcell1").addEventListener("mouseover", NutritionCancelOver);
document.getElementById("contentcell3").addEventListener("mouseover", NutritionCancelOver);
document.getElementById("dropper1").addEventListener("mouseover", NutritionCancelOver);
document.getElementById("dropper3").addEventListener("mouseover", NutritionCancelOver);
document.getElementById("dropper4").addEventListener("mouseover", NutritionCancelOver);
document.getElementById("dropper5").addEventListener("mouseover", NutritionCancelOver);
//Exercises - Dropper3
document.getElementById("contentcell1").addEventListener("mouseover", ExercisesCancelOver);
document.getElementById("contentcell3").addEventListener("mouseover", ExercisesCancelOver);
document.getElementById("dropper1").addEventListener("mouseover", ExercisesCancelOver);
document.getElementById("dropper2").addEventListener("mouseover", ExercisesCancelOver);
document.getElementById("dropper4").addEventListener("mouseover", ExercisesCancelOver);
document.getElementById("dropper5").addEventListener("mouseover", ExercisesCancelOver);
//Legends - Dropper4
document.getElementById("contentcell1").addEventListener("mouseover", LegendsCancelOver);
document.getElementById("contentcell3").addEventListener("mouseover", LegendsCancelOver);
document.getElementById("dropper1").addEventListener("mouseover", LegendsCancelOver);
document.getElementById("dropper2").addEventListener("mouseover", LegendsCancelOver);
document.getElementById("dropper3").addEventListener("mouseover", LegendsCancelOver);
document.getElementById("dropper5").addEventListener("mouseover", LegendsCancelOver);
//Extra - Dropper5
document.getElementById("contentcell1").addEventListener("mouseover", ExtraCancelOver);
document.getElementById("contentcell3").addEventListener("mouseover", ExtraCancelOver);
document.getElementById("dropper1").addEventListener("mouseover", ExtraCancelOver);
document.getElementById("dropper2").addEventListener("mouseover", ExtraCancelOver);
document.getElementById("dropper3").addEventListener("mouseover", ExtraCancelOver);
document.getElementById("dropper4").addEventListener("mouseover", ExtraCancelOver);

//Defining the MouseOver functions and the animation styles;
//Home
function HomeMouseOver() {
document.getElementById("dropper1").style.backgroundColor = "lightgray";
document.getElementById("dropper1").style.animationName = "roundin";
document.getElementById("dropper1").style.animationDuration = "0.1s";
document.getElementById("dropper1").style.animationFillMode = "forwards";
document.getElementById("drop1").style.display = "block";
document.getElementById("drop1").style.animationName = "fadein";
document.getElementById("drop1").style.animationDuration = "0.1s";
document.getElementById("drop1").style.animationFillMode = "forwards";
document.getElementById("drop2").style.display = "block";
document.getElementById("drop2").style.animationName = "fadein";
document.getElementById("drop2").style.animationDuration = "0.1s";
document.getElementById("drop2").style.animationFillMode = "forwards";
}

//Nutrition
function NutritionMouseOver() {
document.getElementById("dropper2").style.backgroundColor = "lightgray";
document.getElementById("dropper2").style.animationName = "roundin";
document.getElementById("dropper2").style.animationDuration = "0.1s";
document.getElementById("dropper2").style.animationFillMode = "forwards";
document.getElementById("drop3").style.display = "block";
document.getElementById("drop3").style.animationName = "fadein";
document.getElementById("drop3").style.animationDuration = "0.1s";
document.getElementById("drop3").style.animationFillMode = "forwards";
document.getElementById("drop4").style.display = "block";
document.getElementById("drop4").style.animationName = "fadein";
document.getElementById("drop4").style.animationDuration = "0.1s";
document.getElementById("drop4").style.animationFillMode = "forwards";
document.getElementById("drop5").style.display = "block";
document.getElementById("drop5").style.animationName = "fadein";
document.getElementById("drop5").style.animationDuration = "0.1s";
document.getElementById("drop5").style.animationFillMode = "forwards";
}

//Exercises
function ExercisesMouseOver() {
document.getElementById("dropper3").style.backgroundColor = "lightgray";
document.getElementById("dropper3").style.animationName = "roundin";
document.getElementById("dropper3").style.animationDuration = "0.1s";
document.getElementById("dropper3").style.animationFillMode = "forwards";
document.getElementById("drop6").style.display = "block";
document.getElementById("drop6").style.animationName = "fadein";
document.getElementById("drop6").style.animationDuration = "0.1s";
document.getElementById("drop6").style.animationFillMode = "forwards";
document.getElementById("drop7").style.display = "block";
document.getElementById("drop7").style.animationName = "fadein";
document.getElementById("drop7").style.animationDuration = "0.1s";
document.getElementById("drop8").style.animationFillMode = "forwards";
document.getElementById("drop8").style.display = "block";
document.getElementById("drop8").style.animationName = "fadein";
document.getElementById("drop8").style.animationDuration = "0.1s";
document.getElementById("drop8").style.animationFillMode = "forwards";
}

//Locate
function LegendsMouseOver() {
document.getElementById("dropper4").style.backgroundColor = "lightgray";
document.getElementById("dropper4").style.animationName = "roundin";
document.getElementById("dropper4").style.animationDuration = "0.1s";
document.getElementById("dropper4").style.animationFillMode = "forwards";
document.getElementById("drop9").style.display = "block";
document.getElementById("drop9").style.animationName = "fadein";
document.getElementById("drop9").style.animationDuration = "0.1s";
document.getElementById("drop9").style.animationFillMode = "forwards";
document.getElementById("drop10").style.display = "block";
document.getElementById("drop10").style.animationName = "fadein";
document.getElementById("drop10").style.animationDuration = "0.1s";
document.getElementById("drop10").style.animationFillMode = "forwards";
}

//Extra
function ExtraMouseOver() {
document.getElementById("dropper5").style.backgroundColor = "lightgray";
document.getElementById("dropper5").style.animationName = "roundin";
document.getElementById("dropper5").style.animationDuration = "0.1s";
document.getElementById("dropper5").style.animationFillMode = "forwards";
document.getElementById("drop11").style.display = "block";
document.getElementById("drop11").style.animationName = "fadein";
document.getElementById("drop11").style.animationDuration = "0.1s";
document.getElementById("drop11").style.animationFillMode = "forwards";
document.getElementById("drop12").style.display = "block";
document.getElementById("drop12").style.animationName = "fadein";
document.getElementById("drop12").style.animationDuration = "0.1s";
document.getElementById("drop12").style.animationFillMode = "forwards";
}

//Defining the CancelOver functions and the animation styles;
//Home
function HomeCancelOver() {
if(document.getElementById("dropper1").style.backgroundColor == "lightgray"){
document.getElementById("dropper1").style.animationName = "roundout";
document.getElementById("dropper1").style.animationDuration = "0.1s";
document.getElementById("dropper1").style.animationFillMode = "forwards";
document.getElementById("drop1").style.display = "block";
document.getElementById("drop1").style.animationName = "fadeout";
document.getElementById("drop1").style.animationDuration = "0.1s";
document.getElementById("drop1").style.animationFillMode = "forwards";
document.getElementById("drop2").style.display = "block";
document.getElementById("drop2").style.animationName = "fadeout";
document.getElementById("drop2").style.animationDuration = "0.1s";
document.getElementById("drop2").style.animationFillMode = "forwards";
document.getElementById("dropper1").style.backgroundColor = "#DDDDDD";
setTimeout(100);
} else {
}}

//Nutrition
function NutritionCancelOver() {
if(document.getElementById("dropper2").style.backgroundColor == "lightgray"){
document.getElementById("dropper2").style.animationName = "roundout";
document.getElementById("dropper2").style.animationDuration = "0.1s";
document.getElementById("dropper2").style.animationFillMode = "forwards";
document.getElementById("drop3").style.display = "block";
document.getElementById("drop3").style.animationName = "fadeout";
document.getElementById("drop3").style.animationDuration = "0.1s";
document.getElementById("drop3").style.animationFillMode = "forwards";
document.getElementById("drop4").style.display = "block";
document.getElementById("drop4").style.animationName = "fadeout";
document.getElementById("drop4").style.animationDuration = "0.1s";
document.getElementById("drop4").style.animationFillMode = "forwards";
document.getElementById("drop5").style.display = "block";
document.getElementById("drop5").style.animationName = "fadeout";
document.getElementById("drop5").style.animationDuration = "0.1s";
document.getElementById("drop5").style.animationFillMode = "forwards";
document.getElementById("dropper2").style.backgroundColor = "#DDDDDD";
setTimeout(100);
} else {
}}

//Exercises
function ExercisesCancelOver() {
if(document.getElementById("dropper3").style.backgroundColor == "lightgray"){
document.getElementById("dropper3").style.animationName = "roundout";
document.getElementById("dropper3").style.animationDuration = "0.1s";
document.getElementById("dropper3").style.animationFillMode = "forwards";
document.getElementById("drop6").style.display = "block";
document.getElementById("drop6").style.animationName = "fadeout";
document.getElementById("drop6").style.animationDuration = "0.1s";
document.getElementById("drop6").style.animationFillMode = "forwards";
document.getElementById("drop7").style.display = "block";
document.getElementById("drop7").style.animationName = "fadeout";
document.getElementById("drop7").style.animationDuration = "0.1s";
document.getElementById("drop7").style.animationFillMode = "forwards";
document.getElementById("drop8").style.display = "block";
document.getElementById("drop8").style.animationName = "fadeout";
document.getElementById("drop8").style.animationDuration = "0.1s";
document.getElementById("drop8").style.animationFillMode = "forwards";
document.getElementById("dropper3").style.backgroundColor = "#DDDDDD";
setTimeout(100);
} else {
}}

//Legends
function LegendsCancelOver() {
if(document.getElementById("dropper4").style.backgroundColor == "lightgray"){
document.getElementById("dropper4").style.animationName = "roundout";
document.getElementById("dropper4").style.animationDuration = "0.1s";
document.getElementById("dropper4").style.animationFillMode = "forwards";
document.getElementById("drop9").style.display = "block";
document.getElementById("drop9").style.animationName = "fadeout";
document.getElementById("drop9").style.animationDuration = "0.1s";
document.getElementById("drop9").style.animationFillMode = "forwards";
document.getElementById("drop10").style.display = "block";
document.getElementById("drop10").style.animationName = "fadeout";
document.getElementById("drop10").style.animationDuration = "0.1s";
document.getElementById("drop10").style.animationFillMode = "forwards";
document.getElementById("dropper4").style.backgroundColor = "#DDDDDD";
setTimeout(100);
} else {
}}

//Extra
function ExtraCancelOver() {
if(document.getElementById("dropper5").style.backgroundColor == "lightgray"){
document.getElementById("dropper5").style.animationName = "roundout";
document.getElementById("dropper5").style.animationDuration = "0.1s";
document.getElementById("dropper5").style.animationFillMode = "forwards";
document.getElementById("drop11").style.display = "block";
document.getElementById("drop11").style.animationName = "fadeout";
document.getElementById("drop11").style.animationDuration = "0.1s";
document.getElementById("drop11").style.animationFillMode = "forwards";
document.getElementById("drop12").style.display = "block";
document.getElementById("drop12").style.animationName = "fadeout";
document.getElementById("drop12").style.animationDuration = "0.1s";
document.getElementById("drop12").style.animationFillMode = "forwards";
document.getElementById("dropper5").style.backgroundColor = "#DDDDDD";
setTimeout(100);
} else {
}}

