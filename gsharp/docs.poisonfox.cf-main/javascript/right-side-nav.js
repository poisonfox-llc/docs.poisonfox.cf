let currentID = location.hash;
const allNavLink = document.querySelectorAll(".right-side-nav a");

allNavLink.forEach(navLink => {
	if(navLink.href.includes(currentID) && currentID != "") {
		allNavLink.forEach(rightNavLink => rightNavLink.classList.remove("active"));
		navLink.classList.add("active");
	}
	navLink.addEventListener("click", (e) => {
		allNavLink.forEach(navLinks => navLinks.classList.remove("active"));
		e.target.classList.add("active");
	});
});