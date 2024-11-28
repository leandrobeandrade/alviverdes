let mainTitle = document.querySelector('#main-title');
let mainNew = document.querySelectorAll('.new')[0];
let sectionCardTitle = document.querySelectorAll('.card-title');
let sectionCardNew = document.querySelectorAll('.card-text');

function truncateWords(text, length) {
  const txt = text?.textContent?.slice(0, length);

  if (text !== null) text.textContent = `${txt}...`;
}

truncateWords(mainTitle, 125);
truncateWords(mainNew, 300);

// Loop pelos elementos onde o truncate são feitos em vários elementos html
function forToTruncate(elem_html, length) {
  for (let i = 0; i < elem_html.length; i++) {
    const elem = elem_html[i];
    
    truncateWords(elem, length);
  }
}

forToTruncate(sectionCardTitle, 61);
forToTruncate(sectionCardNew, 150);