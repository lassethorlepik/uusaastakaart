function videotap() {
	fullscreen();
	var myVideo = document.getElementById("video");
	if (myVideo.paused) {
		myVideo.play();
		document.getElementById("lumi").style.display = "none";
		document.getElementById("video").classList.add("hide");
	}
	else  {
		myVideo.pause();
		document.getElementById("video").classList.remove("hide");
	}
}
$(document).on('tap click', function(){videotap()});

function fullscreen() {

}

