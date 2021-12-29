document.getElementById("video").classList.add("hide");
function clickplay() {
	document.getElementById("lumi").style.display = "none";
	var myVideo = document.getElementById("video");
	document.getElementById('video').play();
	document.getElementById("video").classList.remove("hide");
	document.getElementById("pilt").classList.add("hide");
}