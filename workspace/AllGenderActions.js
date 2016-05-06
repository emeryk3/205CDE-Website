/* Javascript actions for the Nutrition: Select Gender page */

document.getElementById("MaleTitle").addEventListener("click", GoMaleLink);
document.getElementById("MaleTitle").addEventListener("mouseover", ActiveMaleLink);
document.getElementById("MaleTitle").addEventListener("mouseout", InactiveMaleLink);

document.getElementById("FemaleTitle").addEventListener("click", GoFemaleLink);
document.getElementById("FemaleTitle").addEventListener("mouseover", ActiveFemaleLink);
document.getElementById("FemaleTitle").addEventListener("mouseout", InactiveFemaleLink);

document.getElementById("MaleLink").addEventListener("click", GoMaleLink);
document.getElementById("MaleLink").addEventListener("mouseover", ActiveMaleLink);
document.getElementById("MaleLink").addEventListener("mouseout", InactiveMaleLink);

document.getElementById("FemaleLink").addEventListener("click", GoFemaleLink);
document.getElementById("FemaleLink").addEventListener("mouseover", ActiveFemaleLink);
document.getElementById("FemaleLink").addEventListener("mouseout", InactiveFemaleLink);

function GoMaleLink() { /* Links to Male Page */
window.open("https://preview.c9users.io/emeryk3/fitness_king/workspace/GenderMale.html", "_self");
}

function ActiveMaleLink() { /* Setting aesthetics for mouseover 'active' Male link */
document.getElementById("MaleTitle").style.borderColor = "#FFFFFF";
document.getElementById("MaleTitle").style.backgroundColor = "#32ACCB";
document.getElementById("MaleLink").style.borderColor = "#FFFFFF";
document.getElementById("MaleLink").style.backgroundColor = "#32ACCB";
document.getElementById("MaleLink").style.boxShadow = "0px 0px 5px 8px #32ACCB inset";
}

function InactiveMaleLink() { /* Setting aesthetics for mouseout 'inactive' Male link */
document.getElementById("MaleTitle").style.borderColor = "#CCCCCC";
document.getElementById("MaleTitle").style.backgroundColor = "#0098BF";
document.getElementById("MaleTitle").style.borderColor = "#CCCCCC";
document.getElementById("MaleTitle").style.backgroundColor = "#0098BF";
document.getElementById("MaleTitle").style.boxShadow = "0px 0px 5px 8px #0098BF inset";
}

function GoFemaleLink() { /* Links to Female Page */
window.open("https://preview.c9users.io/emeryk3/fitness_king/workspace/GenderFemale.html", "_self");
}

function ActiveFemaleLink() { /* Setting aesthetics for mouseover 'active' Female link */
document.getElementById("FemaleTitle").style.borderColor = "#FFFFFF";
document.getElementById("FemaleTitle").style.backgroundColor = "#32ACCB";
document.getElementById("FemaleLink").style.borderColor = "#FFFFFF";
document.getElementById("FemaleLink").style.backgroundColor = "#32ACCB";
document.getElementById("FemaleLink").style.boxShadow = "0px 0px 5px 8px #32ACCB inset";
}

function InactiveFemaleLink() { /* Setting aesthetics for mouseout 'inactive' Female link */
document.getElementById("FemaleTitle").style.borderColor = "#CCCCCC";
document.getElementById("FemaleTitle").style.backgroundColor = "#0098BF";
document.getElementById("FemaleLink").style.borderColor = "#CCCCCC";
document.getElementById("FemaleLink").style.backgroundColor = "#0098BF";
document.getElementById("FemaleLink").style.boxShadow = "0px 0px 5px 8px #0098BF inset";
}