const mainTitle = document.querySelector('#main-title');
const mainNew = document.querySelectorAll('.new')[0];
const sectionCardTitle = document.querySelectorAll('.card-title');
const sectionCardNew = document.querySelectorAll('.card-text');

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

const journalist = document.querySelector('#journalist');

// Define o agente Supabase
async function Supabase() {
  let users = await window?._supabase
  .from('journalists')
  .select('name')

  journalist.innerHTML = users?.data[0];
}

setTimeout(() => Supabase(), 500);
