const searchInput = document.querySelector("header ul li form input");

searchInput.addEventListener("invalid", (e) => {
	e.preventDefault();
});

window.addEventListener("keydown", (e) => {
	if(e.keyCode == 70 && e.altKey == true && e.ctrlKey == true) {
		searchInput.focus();
	}
});
