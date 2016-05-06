/* Javascript actions for the Exercise: Select Exercise page */

document.getElementById("CompoundTitle").addEventListener("click", GoCompoundLink);
document.getElementById("CompoundTitle").addEventListener("mouseover", ActiveCompoundLink);
document.getElementById("CompoundTitle").addEventListener("mouseout", InactiveCompoundLink);

document.getElementById("IsolatedTitle").addEventListener("click", GoIsolatedLink);
document.getElementById("IsolatedTitle").addEventListener("mouseover", ActiveIsolatedLink);
document.getElementById("IsolatedTitle").addEventListener("mouseout", InactiveIsolatedLink);

document.getElementById("CompoundLink").addEventListener("click", GoCompoundLink);
document.getElementById("CompoundLink").addEventListener("mouseover", ActiveCompoundLink);
document.getElementById("CompoundLink").addEventListener("mouseout", InactiveCompoundLink);

document.getElementById("IsolatedLink").addEventListener("click", GoIsolatedLink);
document.getElementById("IsolatedLink").addEventListener("mouseover", ActiveIsolatedLink);
document.getElementById("IsolatedLink").addEventListener("mouseout", InactiveIsolatedLink);

function GoCompoundLink() { /* Links to Compound page */
window.open("https://preview.c9users.io/emeryk3/fitness_king/workspace/ExerciseCompound.html", "_self");
}

function ActiveCompoundLink() { /* Setting aesthetics for mouseover 'active' Compound link */
document.getElementById("CompoundTitle").style.borderColor = "#FFFFFF";
document.getElementById("CompoundTitle").style.backgroundColor = "#32ACCB";
document.getElementById("CompoundLink").style.borderColor = "#FFFFFF";
document.getElementById("CompoundLink").style.backgroundColor = "#32ACCB";
document.getElementById("CompoundLink").style.boxShadow = "0px 0px 5px 8px #32ACCB inset";
}

function InactiveCompoundLink() { /* Setting aesthetics for mouseout 'inactive' Compound link */
document.getElementById("CompoundTitle").style.borderColor = "#CCCCCC";
document.getElementById("CompoundTitle").style.backgroundColor = "#0098BF";
document.getElementById("CompoundTitle").style.borderColor = "#CCCCCC";
document.getElementById("CompoundTitle").style.backgroundColor = "#0098BF";
document.getElementById("CompoundTitle").style.boxShadow = "0px 0px 5px 8px #0098BF inset";
}

function GoIsolatedLink() { /* Links to Isolated page */
window.open("https://preview.c9users.io/emeryk3/fitness_king/workspace/ExerciseIsolated.html", "_self");
}

function ActiveIsolatedLink() { /* Setting aesthetics for mouseover 'active' Isolated link */
document.getElementById("IsolatedTitle").style.borderColor = "#FFFFFF";
document.getElementById("IsolatedTitle").style.backgroundColor = "#32ACCB";
document.getElementById("IsolatedLink").style.borderColor = "#FFFFFF";
document.getElementById("IsolatedLink").style.backgroundColor = "#32ACCB";
document.getElementById("IsolatedLink").style.boxShadow = "0px 0px 5px 8px #32ACCB inset";
}

function InactiveIsolatedLink() { /* Setting aesthetics for mouseout 'inactive' Isolated link */
document.getElementById("IsolatedTitle").style.borderColor = "#CCCCCC";
document.getElementById("IsolatedTitle").style.backgroundColor = "#0098BF";
document.getElementById("IsolatedLink").style.borderColor = "#CCCCCC";
document.getElementById("IsolatedLink").style.backgroundColor = "#0098BF";
document.getElementById("IsolatedLink").style.boxShadow = "0px 0px 5px 8px #0098BF inset";
}