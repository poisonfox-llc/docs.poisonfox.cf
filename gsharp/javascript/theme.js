const body = document.querySelector("body");
const leftSideNav = document.querySelector(".left-side-nav");
const header = document.querySelector("header");
const themeBtn = document.querySelector(".theme-btn");

let darkThemeCookie = null;

if (document.cookie.split(";").find(cookie => cookie.trim().startsWith("darkTheme="))) {
	darkThemeCookie = (document.cookie.split(";").find(cookie => cookie.trim().startsWith("darkTheme=")).split("=")[1] === "true");
} else {
	darkThemeCookie = null;
}

themeBtn.addEventListener("click", () => {
	body.classList.toggle("dark");
	leftSideNav.classList.toggle("dark");
	header.classList.toggle("dark");
	
	const isDarkTheme = body.classList.contains("dark");
	
	const expirationDate = new Date();
	expirationDate.setTime(expirationDate.getTime() + (30 * 24 * 60 * 60 * 1000));
	document.cookie = `darkTheme=${isDarkTheme};expires=${expirationDate.toUTCString()};path=/`;
	if (document.cookie.split(";").find(cookie => cookie.trim().startsWith("darkTheme="))) {
		darkThemeCookie = (document.cookie.split(";").find(cookie => cookie.trim().startsWith("darkTheme=")).split("=")[1] === "true");
	} else {
		darkThemeCookie = null;
	}
});

themeBtn.addEventListener("touch", () => {
	body.classList.toggle("dark");
	leftSideNav.classList.toggle("dark");
	header.classList.toggle("dark");
	
	const isDarkTheme = body.classList.contains("dark");
	
	const expirationDate = new Date();
	expirationDate.setTime(expirationDate.getTime() + (30 * 24 * 60 * 60 * 1000));
	document.cookie = `darkTheme=${isDarkTheme};expires=${expirationDate.toUTCString()};path=/`;
	if (document.cookie.split(";").find(cookie => cookie.trim().startsWith("darkTheme="))) {
		darkThemeCookie = (document.cookie.split(";").find(cookie => cookie.trim().startsWith("darkTheme=")).split("=")[1] === "true");
	} else {
		darkThemeCookie = null;
	}
});

window.addEventListener("keydown", (e) => {
	if(e.keyCode == 84 && e.ctrlKey == true && e.altKey == true) {
		body.classList.toggle("dark");
		leftSideNav.classList.toggle("dark");
		header.classList.toggle("dark");
		
		const isDarkTheme = body.classList.contains("dark");
		
		const expirationDate = new Date();
		expirationDate.setTime(expirationDate.getTime() + (30 * 24 * 60 * 60 * 1000));
		document.cookie = `darkTheme=${isDarkTheme};expires=${expirationDate.toUTCString()};path=/`;
		if (document.cookie.split(";").find(cookie => cookie.trim().startsWith("darkTheme="))) {
			darkThemeCookie = (document.cookie.split(";").find(cookie => cookie.trim().startsWith("darkTheme=")).split("=")[1] === "true");
		} else {
			darkThemeCookie = null;
		}
	}
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (e) => {
	const isDarkTheme = e.matches;
	
	if (isDarkTheme && typeof(darkThemeCookie) != "boolean") {
		body.classList.add("dark");
		leftSideNav.classList.add("dark");
		header.classList.add("dark");
	} else if (darkThemeCookie) {
		body.classList.add("dark");
		leftSideNav.classList.add("dark");
		header.classList.add("dark");
	} else {
		body.classList.remove("dark");
		leftSideNav.classList.remove("dark");
		header.classList.remove("dark");
	}
});

window.addEventListener("load", (e) => {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	const isDarkTheme = mediaQuery.matches;
	
	if (isDarkTheme && typeof(darkThemeCookie) != "boolean") {
		body.classList.add("dark");
		leftSideNav.classList.add("dark");
		header.classList.add("dark");
	} else if (darkThemeCookie) {
		body.classList.add("dark");
		leftSideNav.classList.add("dark");
		header.classList.add("dark");
	} else {
		body.classList.remove("dark");
		leftSideNav.classList.remove("dark");
		header.classList.remove("dark");
	}
});

if (darkThemeCookie) {
	const isDarkTheme = darkThemeCookie.split("=")[1] === "true";
	
	if (isDarkTheme) {
		body.classList.add("dark");
		leftSideNav.classList.add("dark");
		header.classList.add("dark");
	} else {
		body.classList.remove("dark");
		leftSideNav.classList.remove("dark");
		header.classList.remove("dark");
	}
}
