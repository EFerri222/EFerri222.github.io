/*This boolean is true when Rick is the background image
You have to remove Rick when changing the background color or else you won't be able to see the change since his image is opaque
Cage's image has transparency, so the colors can change behind him. You don't have to remove him to see the background colors changing*/
var rickBool = false;

document.getElementById("button1").addEventListener("click", growFunction);

function growFunction() {
    var x = parseInt(document.getElementById("box").style.width);
    x += 150;
    document.getElementById("box").style.width = x + "px";

    var y = parseInt(document.getElementById("box").style.height);
    y += 150;
    document.getElementById("box").style.height = y + "px";
}

document.getElementById("button2").addEventListener("click", shrinkFunction);

function shrinkFunction() {
    var x = parseInt(document.getElementById("box").style.width);
    x -= 150;
    document.getElementById("box").style.width = x + "px";

    var y = parseInt(document.getElementById("box").style.height);
    y -= 150;
    document.getElementById("box").style.height = y + "px";
}

document.getElementById("button3").addEventListener("click", redFunction);

function redFunction() {
    document.getElementById("box").style.backgroundColor = "red";
    //If Rick is the background image...
    if (rickBool) {
        //Remove him
        document.getElementById("box").style.backgroundImage = "";
    }
}

document.getElementById("button4").addEventListener("click", greenFunction);

function greenFunction() {
    document.getElementById("box").style.backgroundColor = "green";
    if (rickBool) {
        document.getElementById("box").style.backgroundImage = "";
    }
}

document.getElementById("button5").addEventListener("click", blueFunction);

function blueFunction() {
    document.getElementById("box").style.backgroundColor = "blue";
    if (rickBool) {
        document.getElementById("box").style.backgroundImage = "";
    }
}

document.getElementById("button6").addEventListener("click", rickFunction);

function rickFunction() {
    document.getElementById("box").style.backgroundImage = "url('https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/rickrollheader.png?itok=f_UDp9E2&resize=1100x1100')";
    document.getElementById("box").style.backgroundSize = "cover";
    //Rick is the background image, so rickBool is set to true
    rickBool = true;
}

document.getElementById("button7").addEventListener("click", cageFunction);

function cageFunction() {
    document.getElementById("box").style.backgroundImage = "url('https://mbtskoudsalg.com/images/nicolas-cage-png-8.png')";
    document.getElementById("box").style.backgroundSize = "cover";
    //Cage is the background image, so rickBool is set to false
    rickBool = false;
}

document.getElementById("button8").addEventListener("click", fadeFunction);

var isFaded = false;
function fadeFunction() {
    if (isFaded) {
        document.getElementById("box").style.opacity = "1";
        isFaded = false;
    } else {
        document.getElementById("box").style.opacity = ".5";
        isFaded = true;
    }
}

document.getElementById("button9").addEventListener("click", resetFunction);

function resetFunction() {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.backgroundImage = "";
}