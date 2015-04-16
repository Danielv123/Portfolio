function pageWidth() {

var width = document.body.clientWidth;

if (width < 400) {
	var pwidth = 200;
}
if (width > 400) {
	var pwidth = 400;
}
if (width > 600) {
	var pwidth = 600;
}
if (width > 800) {
	var pwidth = 800;
}
if (width > 1000) {
	var pwidth = 1000;
}

var pwidth2 = pwidth + "px";

document.getElementById("output").innerHTML = (pwidth2);
document.getElementById("page").style.width = (pwidth2);
}