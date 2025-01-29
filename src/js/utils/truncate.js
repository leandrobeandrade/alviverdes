const mainTitle = document.querySelector('#main-title');
const mainParag = document.querySelector('#main-parag');
const title1 = document.querySelector('#title1');
const parag1 = document.querySelector('#parag1');
const title2 = document.querySelector('#title2');
const parag2 = document.querySelector('#parag2');
const title3 = document.querySelector('#title3');
const parag3 = document.querySelector('#parag3');
const parag4 = document.querySelector('#parag4');
const parag5 = document.querySelector('#parag5');
const parag6 = document.querySelector('#parag6');

// const sectionCardTitle = document.querySelectorAll('.card-title');
// const sectionCardNew = document.querySelectorAll('.card-text');

/**
 * Função de truncar os textos conforme o tamanho passado
 * @param {HTMLElement} text Elemento html que contém o texto
 * @param {Number} length Tamanho do texto que será truncado
 */
function truncateWords(text, length) {
  const txt = text?.textContent?.slice(0, length);

  if (text !== null) text.textContent = `${txt}...`;
}

/**
 * Loop pelos elementos onde o truncate são feitos em vários elementos html (classes e não id)
 * @param {HTMLElement} elem_html Elemento html que contém o texto 
 * @param {Number} length Tamanho do texto que será truncado
 */
function forToTruncateWords(elem_html, length) {
  for (let i = 0; i < elem_html.length; i++) {
    const elem = elem_html[i];
    
    truncateWords(elem, length);
  }
}

window.addEventListener('load', (event) => {
  setTimeout(() => {
    truncateWords(mainTitle, 65);
    truncateWords(mainParag, 260);
    truncateWords(title1, 55);
    truncateWords(parag1, 75);
    truncateWords(title2, 55);
    truncateWords(parag2, 75);
    truncateWords(title3, 55);
    truncateWords(parag3, 75);
    truncateWords(parag4, 75);
    truncateWords(parag5, 75);
    truncateWords(parag6, 75);
    // forToTruncateWords(sectionCardTitle, 31);
    // forToTruncate(sectionCardNew, 180);
  }, 1000);
});


/////////////////////////////////////////

// STORAGE
/* let images = await agent
.from('storage.objects')

console.log(images);

const bucket = await agent
.storage
.getBucket('alviverdes-img')

console.log(bucket);
let t = await agent.storage.from('alviverdes-img').getPublicUrl('news/p7.jpg');

document.getElementById('img-main').setAttribute('src', t.data.publicUrl)
console.log(t);
console.log(t.data.publicUrl); */