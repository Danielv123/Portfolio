function pageWidth() {

var width = document.body.clientWidth;

if (width < 400) {
	var pwidth = 300;
}
if (width > 600) {
	var pwidth = 600;
}
if (width > 900) {
	var pwidth = 900;
}
if (width > 1200) {
	var pwidth = 1200;
}

var pwidth2 = pwidth + "px";

document.getElementById("output").innerHTML = (pwidth2);
document.getElementById("page").style.width = (pwidth2);
}