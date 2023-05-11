const searchInput = document.querySelector("header ul li form input");
const formElems = [...searchInput.parentNode.elements];

searchInput.addEventListener("input", () => {
	formElems.forEach(elem => {
		if(searchInput.textContent == "") {
			elem.disable = true;
		} else {
			elem.disable = false;
		}
	});
});

window.addEventListener("keydown", (e) => {
	if(e.keyCode == 70 && e.altKey == true && e.ctrlKey == true) {
		searchInput.focus();
	}
});