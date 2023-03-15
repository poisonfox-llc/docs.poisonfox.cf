const copyBtn = document.querySelectorAll("#copy-btn");

copyBtn.forEach((btn, index) => btn.addEventListener("click", () => {
  const text = codePre[index].textContent;
  navigator.clipboard.writeText(text)
    .then(() => console.log('Text copied to clipboard'))
    .catch((err) => console.error('Failed to copy text: ', err));
}));
