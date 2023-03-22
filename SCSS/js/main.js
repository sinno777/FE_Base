function truncateString(str, limited) {
  if (str.length > limited) return str.slice(0, limited) + "...";
  else return str;
}

function truncateCardTitle() {
  let cardList = document.getElementsByClassName("card-title");

  for (let card of cardList) {
    let text = card.innerHTML;
    let newText = truncateString(text, 35);
    card.innerHTML = newText;
  }
}

window.addEventListener("load", () => {
  truncateCardTitle();
});
