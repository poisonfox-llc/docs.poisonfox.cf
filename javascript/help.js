window.addEventListener("keydown", (e) => {
	if(e.keyCode == 72 && e.altKey == true && e.ctrlKey == true) {
		window.open("./help.html", '_blank').focus();
	}
});