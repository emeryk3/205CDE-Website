//Compound Exercises javascript
//Assigning images and cell colour
//When the user clicks on the cell(image) it then previews that as 'Main'

document.getElementById("image1").addEventListener("click", ChangeToImageMain);
document.getElementById("image2").addEventListener("click", ChangeToImageA);
document.getElementById("image3").addEventListener("click", ChangeToImageB);
document.getElementById("image4").addEventListener("click", ChangeToImageC);
document.getElementById("image5").addEventListener("click", ChangeToImageD);
document.getElementById("image6").addEventListener("click", ChangeToImageE);
document.getElementById("image7").addEventListener("click", ChangeToImageF);
document.getElementById("image8").addEventListener("click", ChangeToImageG);

function ChangeToImageMain() {
document.getElementById("previewimage").src = "images/CompoundExercises/Bench Press.jpg";
document.getElementById("imagecell1").style.backgroundColor = "white"; /*Image Main*/
document.getElementById("imagecell2").style.backgroundColor = "#003F64";
document.getElementById("imagecell3").style.backgroundColor = "#003F64";
document.getElementById("imagecell4").style.backgroundColor = "#003F64";
document.getElementById("imagecell5").style.backgroundColor = "#003F64";
document.getElementById("imagecell6").style.backgroundColor = "#003F64";
document.getElementById("imagecell7").style.backgroundColor = "#003F64";
document.getElementById("imagecell8").style.backgroundColor = "#003F64";
}

function ChangeToImageA() {
document.getElementById("previewimage").src = "images/CompoundExercises/Squats.jpg";
document.getElementById("imagecell1").style.backgroundColor = "#003F64";
document.getElementById("imagecell2").style.backgroundColor = "white"; /*Image A*/
document.getElementById("imagecell3").style.backgroundColor = "#003F64";
document.getElementById("imagecell4").style.backgroundColor = "#003F64";
document.getElementById("imagecell5").style.backgroundColor = "#003F64";
document.getElementById("imagecell6").style.backgroundColor = "#003F64";
document.getElementById("imagecell7").style.backgroundColor = "#003F64";
document.getElementById("imagecell8").style.backgroundColor = "#003F64";
}

function ChangeToImageB() {
document.getElementById("previewimage").src = "images/CompoundExercises/Front-Squats.jpg";
document.getElementById("imagecell1").style.backgroundColor = "#003F64";
document.getElementById("imagecell2").style.backgroundColor = "#003F64";
document.getElementById("imagecell3").style.backgroundColor = "white"; /*Image B*/
document.getElementById("imagecell4").style.backgroundColor = "#003F64";
document.getElementById("imagecell5").style.backgroundColor = "#003F64";
document.getElementById("imagecell6").style.backgroundColor = "#003F64";
document.getElementById("imagecell7").style.backgroundColor = "#003F64";
document.getElementById("imagecell8").style.backgroundColor = "#003F64";
}

function ChangeToImageC() {
document.getElementById("previewimage").src = "images/CompoundExercises/Lunges.jpg";
document.getElementById("imagecell1").style.backgroundColor = "#003F64";
document.getElementById("imagecell2").style.backgroundColor = "#003F64";
document.getElementById("imagecell3").style.backgroundColor = "#003F64";
document.getElementById("imagecell4").style.backgroundColor = "white"; /*Image C*/
document.getElementById("imagecell5").style.backgroundColor = "#003F64";
document.getElementById("imagecell6").style.backgroundColor = "#003F64";
document.getElementById("imagecell7").style.backgroundColor = "#003F64";
document.getElementById("imagecell8").style.backgroundColor = "#003F64";
}

function ChangeToImageD() {
document.getElementById("previewimage").src = "images/CompoundExercises/Push-Ups.jpg";
document.getElementById("imagecell1").style.backgroundColor = "#003F64";
document.getElementById("imagecell2").style.backgroundColor = "#003F64";
document.getElementById("imagecell3").style.backgroundColor = "#003F64";
document.getElementById("imagecell4").style.backgroundColor = "#003F64";
document.getElementById("imagecell5").style.backgroundColor = "white"; /*Image D*/
document.getElementById("imagecell6").style.backgroundColor = "#003F64";
document.getElementById("imagecell7").style.backgroundColor = "#003F64";
document.getElementById("imagecell8").style.backgroundColor = "#003F64";
}

function ChangeToImageE() {
document.getElementById("previewimage").src = "images/CompoundExercises/Chin-up.jpg";
document.getElementById("imagecell1").style.backgroundColor = "#003F64";
document.getElementById("imagecell2").style.backgroundColor = "#003F64";
document.getElementById("imagecell3").style.backgroundColor = "#003F64";
document.getElementById("imagecell4").style.backgroundColor = "#003F64";
document.getElementById("imagecell5").style.backgroundColor = "#003F64";
document.getElementById("imagecell6").style.backgroundColor = "white"; /*Image E*/
document.getElementById("imagecell7").style.backgroundColor = "#003F64";
document.getElementById("imagecell8").style.backgroundColor = "#003F64";
}

function ChangeToImageF() {
document.getElementById("previewimage").src = "images/CompoundExercises/T-Bar Rows.jpg";
document.getElementById("imagecell1").style.backgroundColor = "#003F64";
document.getElementById("imagecell2").style.backgroundColor = "#003F64";
document.getElementById("imagecell3").style.backgroundColor = "#003F64";
document.getElementById("imagecell4").style.backgroundColor = "#003F64";
document.getElementById("imagecell5").style.backgroundColor = "#003F64";
document.getElementById("imagecell6").style.backgroundColor = "#003F64";
document.getElementById("imagecell7").style.backgroundColor = "white"; /*Image F*/
document.getElementById("imagecell8").style.backgroundColor = "#003F64";
}

function ChangeToImageG() {
document.getElementById("previewimage").src = "images/CompoundExercises/Deadlifts.jpg";
document.getElementById("imagecell1").style.backgroundColor = "#003F64";
document.getElementById("imagecell2").style.backgroundColor = "#003F64";
document.getElementById("imagecell3").style.backgroundColor = "#003F64";
document.getElementById("imagecell4").style.backgroundColor = "#003F64";
document.getElementById("imagecell5").style.backgroundColor = "#003F64";
document.getElementById("imagecell6").style.backgroundColor = "#003F64";
document.getElementById("imagecell7").style.backgroundColor = "#003F64";
document.getElementById("imagecell8").style.backgroundColor = "white"; /*Image G*/
}