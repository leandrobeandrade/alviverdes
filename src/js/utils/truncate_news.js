const title1 = document.querySelector('#title1');
const parag1 = document.querySelector('#parag1');
const title2 = document.querySelector('#title2');
const parag2 = document.querySelector('#parag2');
const title3 = document.querySelector('#title3');
const parag3 = document.querySelector('#parag3');
const title4 = document.querySelector('#title4');
const parag4 = document.querySelector('#parag4');
const title5 = document.querySelector('#title5');
const parag5 = document.querySelector('#parag5');
const title6 = document.querySelector('#title6');
const parag6 = document.querySelector('#parag6');

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
    if (screen.width === 412) {
      truncateWords(title1, 60);
      truncateWords(parag1, 140);
      truncateWords(title2, 60);
      truncateWords(parag2, 140);
      truncateWords(title3, 60);
      truncateWords(parag3, 140);
      truncateWords(title4, 60);
      truncateWords(parag4, 140);
      truncateWords(title5, 60);
      truncateWords(parag5, 140);
      truncateWords(title6, 60);
      truncateWords(parag6, 140);
    } else {
      truncateWords(title1, 35);
      truncateWords(parag1, 110);
      truncateWords(title2, 35);
      truncateWords(parag2, 110);
      truncateWords(title3, 35);
      truncateWords(parag3, 110);
      truncateWords(title4, 35);
      truncateWords(parag4, 110);
      truncateWords(title5, 35);
      truncateWords(parag5, 110);
      truncateWords(title6, 35);
      truncateWords(parag6, 110);
    }
  }, 1000);
});

function screenSizes() {
  const width = screen.width;
  const height = screen.height;
  
  console.log(`Resolução da tela: ${width} x ${height}`);
  return 
}
