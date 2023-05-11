const cookieBar = document.querySelector(".cookie-bar");
const cookieOKBtn = document.querySelector(".cookie-bar button");

cookieOKBtn.addEventListener("click", () => {
	cookieBar.classList.add("hidden");
	
    const isCookieOK = cookieBar.classList.contains("hidden");
    
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = `cookieOK=${isCookieOK};expires=${expirationDate.toUTCString()};path=/`;
});

cookieOKBtn.addEventListener("touch", () => {
	cookieBar.classList.add("hidden");
	
    const isCookieOK = cookieBar.classList.contains("hidden");
    
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = `cookieOK=${isCookieOK};expires=${expirationDate.toUTCString()};path=/`;
});

const cookieOKCookie = document.cookie.split(";").find(cookie => cookie.trim().startsWith("cookieOK="));

if (cookieOKCookie) {
    const isCookieOK = cookieOKCookie.split("=")[1] === "true";
    
    if (isCookieOK) {
		cookieBar.classList.add("hidden");
    } else {
		cookieBar.classList.remove("hidden");
    }
}
