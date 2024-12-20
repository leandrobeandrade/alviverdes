const mainTitle = document.querySelector('#main-title');
const mainParag = document.querySelector('#parag1');
const sectionCardTitle = document.querySelectorAll('.card-title');
// const sectionCardNew = document.querySelectorAll('.card-text');

// Função de truncar os textos conforme o tamanho
function truncateWords(text, length) {
  const txt = text?.textContent?.slice(0, length);

  if (text !== null) text.textContent = `${txt}...`;
}

setTimeout(() => {
  truncateWords(mainTitle, 65);
  truncateWords(mainParag, 260);
}, 700);

// Loop pelos elementos onde o truncate são feitos em vários elementos html
function forToTruncate(elem_html, length) {
  for (let i = 0; i < elem_html.length; i++) {
    const elem = elem_html[i];
    
    truncateWords(elem, length);
  }
}

forToTruncate(sectionCardTitle, 61);
// forToTruncate(sectionCardNew, 180);