const allCode = document.querySelectorAll(".code code pre");

const regex = /("(?:\\.|[^\\"])*")|(`(?:\\.|[^\\`])*`)|(\/\/.*)|(\/\*[\s\S]*?\*\/)|('[^']*')|\b(function|const|let|var|if|else|switch|case|break|default|for|while|do|return|new|typeof|instanceof|try|catch|finally|throw)\b|\b\w+\b/gm;

allCode.forEach(code => {
	let match;
	while ((match = regex.exec(code.textContent)) !== null) {
		if (match[1] !== undefined) {
			newMatch = `<span class="string">${match[1]}</span>`;
			code.innerHTML = code.innerHTML.replace(match[1], newMatch);
		} else if (match[2] !== undefined) {
			newMatch = `<span class="string">${match[2]}</span>`;
			code.innerHTML = code.innerHTML.replace(match[2], newMatch);
		} else if (match[3] !== undefined) {
			newMatch = `<span class="comment">${match[3]}</span>`;
			code.innerHTML = code.innerHTML.replace(match[3], newMatch);
		} else if (match[4] !== undefined) {
			newMatch = `<span class="comment">${match[4]}</span>`;
			code.innerHTML = code.innerHTML.replace(match[4], newMatch);
		} else if (match[5] !== undefined) {
			newMatch = `<span class="string">${match[5]}</span>`;
			code.innerHTML = code.innerHTML.replace(match[5], newMatch);
		} else if (match[6] !== undefined) {
			newMatch = `<span class="keyword">${match[6]}</span>`;
			code.innerHTML = code.innerHTML.replace(match[6], newMatch);
		} else {
			newMatch = `<span class="fun-name">${match[0]}</span>`;
			code.innerHTML = code.innerHTML.replace(match[0], newMatch);
		}
	}
});