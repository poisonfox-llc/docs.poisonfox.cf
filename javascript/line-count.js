function countLines(target) {
	return (target.textContent.match(new RegExp("\n", "g")) || []).length + 1;
}

const insertLineCount = (pre, index) => {
	const lineCount = countLines(pre);
	const lineCountContainer = document.createElement("div");
	lineCountContainer.classList.add("line-count-container");
	pre.parentNode.parentNode.insertBefore(lineCountContainer, code[index]);
	
	pre.innerHTML = "<a id=\"line-count\"></a>" + pre.innerHTML;
	pre.innerHTML = pre.innerHTML.replaceAll("\n", "\n<a id=\"line-count\"></a>");
	
	const allLineCount = document.querySelectorAll("#line-count");

	for(let i = 0; i < lineCount; i++) {
		allLineCount[i].dataset.count = i + 1;
	}
}

const code = document.querySelectorAll(".code code");
const codePre = document.querySelectorAll(".code pre");
const codeDivBlock = document.querySelectorAll(".code");

codePre.forEach((pre, index) => insertLineCount(pre, index));