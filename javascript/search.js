const results = [
	{
		name: "G#",
		url: "",
		id: "gsharp",
		description: "G# is an object-oriented programming language that helps build applications for a wide variety of platforms, ranging from desktop computers to smartphones and tablets. G# is a modern alternative to traditional languages ​​such as C++ and Java, offering a more concise and easier to read syntax."
	},
	{
		name: "Gougle",
		url: "gougle",
		id: "gougle",
		description: "Gougle is a french technologic products company, and it own G#."
	},
	{
		name: "G# History",
		url: "history",
		id: "history",
		description: "G# was created by Karl LÉOGNANY and ChatGPT the 26/02/2023 with one question : \"How to create a programming language ?\". G# was created with a chat enter Karl LÉOGNANY and ChatGPT, the GSDev."
	}
];

const tableDiv = document.querySelector(".results-table")
const query = new URLSearchParams(location.search).get("q");
const qSpan = document.querySelectorAll(".query");
const qInput = document.querySelector("header ul li form input");
const qResInfos = document.querySelector(".results-infos");

qInput.blur();

if(query == "" || query == null || query == undefined) {
	history.go(-1);
}

document.title = `"${query}" - G# Docs Search`;

qSpan.forEach(span => span.textContent = query);
qInput.value = query;

const searchQuery = (q) => {
	const oDate = Date.now();
	
	let matchesNum = 0;
	
	qInput.blur();
	
	const newResults = [];
	for(let i = 0; i < results.length; i++) {
		res = results[i];
		if(res.name.toLowerCase().includes(q.toLowerCase()) || res.description.toLowerCase().includes(q.toLowerCase()) || res.url.toLowerCase().includes(q.toLowerCase())) {
			newResults.push(results[i]);
			tableDiv.innerHTML = "";
		}
		
		const regexp = new RegExp(query, 'gi');
		const matches = (res.name + res.url + res.description).match(regexp) || [];
		matchesNum += matches.length;
	}
	
	for(let i = 0; i < newResults.length; i++) {
		const elem = document.createElement("div");
		newResults[i].description = newResults[i].description.replace(new RegExp('(' + query + ')', 'gi'), '<span class="bg-query">$1</span>');
		newUrl = `${newResults[i].url.replace(new RegExp('(' + query + ')', 'gi'), '<span class="bg-query">$1</span>')}`;
		if(newResults[i].url != "") {
			newUrl = "/" + newUrl;
		}
		newResults[i].name = newResults[i].name.replace(new RegExp('(' + query + ')', 'gi'), '<span class="bg-query">$1</span>');
		elem.innerHTML = `<h3 id="${newResults[i].id}">${newResults[i].name}</h3>
		<a href="https://docs.poisonfox.cf/gsharp/${newResults[i].url}">https://docs.poisonfox.cf/gsharp${newUrl}</a>
		<p>${newResults[i].description}</p>`;
		elem.classList.add("results");
		elem.classList.add(`r-${i + 1}`);
		tableDiv.appendChild(elem);
	}
	
	if(query === "*" || query === "all") {
		newResults.splice(0, newResults.length);
		
		for(let i = 0; i < results.length; i++) {
			newResults.push(results[i]);
		}
		
		tableDiv.innerHTML = "";
		
		for(let i = 0; i < newResults.length; i++) {
			const elem = document.createElement("div");
			elem.innerHTML = `<h3 id="${newResults[i].name.toLowerCase()}">${newResults[i].name}</h3>
			<a href="https://docs.poisonfox.cf/gsharp/${newResults[i].url}">https://docs.poisonfox.cf/gsharp/${newResults[i].url}</a>
			<p>${newResults[i].description}</p>`;
			elem.classList.add("results");
			elem.classList.add(`r-${i + 1}`);
			tableDiv.appendChild(elem);
		}
	}
	
	const resTime = Date.now() - oDate;

	qResInfos.textContent = `${newResults.length} results and ${matchesNum} matches in ${resTime}s.`;
}

searchQuery(query);