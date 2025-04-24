/**
 * Define o agent do supabase
 * agent inicializado no index.html
 */
const agent = window?._supabase;

// Filtra as notícias no banco de dados e exibe no modal
async function filterNews() {
  let { data: news, error } = await agent
  .from('news')
  .select()
  .like('title', `%${getValueFilter()}%`)

  if (error) {
    showModalNewsError();
  } if (news.length === 0) {
    showModalNewsNotFound();
  } else {
    showModalNews(news);
  }
}

// Pega o valor do filtro no input HTML
function getValueFilter() {
  const input = document.querySelector('#search').value;
  return input;
}

// Funcao que dispara os filtros 
document.querySelector('#send').addEventListener('click', (event) => {
  clearModal();
  
  if (getValueFilter() === '') {
    showModalEmptyField();
  } else {
    filterNews();
  }
  event.preventDefault();
})

/** 
 * Mostra o modal com as notícias filtradas
 * @param {Array} news - Array de objetos de notícias filtradas
 */
function showModalNews(news) {
  const modalContent = document.querySelector('#modalFilterBody');
  const pathname = window.location.pathname;

  news.forEach((item) => {
    const newsItem = document.createElement('div');

    if (pathname.includes('index.html') || pathname.includes('/')) {
      newsItem.innerHTML = `
        <ul>
          <li><a href="./src/pages/news.html?new=${item.id}">${item.title}</a></li>
          <hr></hr>
        </ul>
      `;
    }
    if (pathname.includes('news.html') || pathname.includes('games.html') || pathname.includes('players.html') || pathname.includes('data.html')) {
      newsItem.innerHTML = `
        <ul>
          <li><a href="./news.html?new=${item.id}">${item.title}</a></li>
          <hr></hr>
        </ul>
      `;
    }

    modalContent.appendChild(newsItem);
  });
}

// Mostra o modal com a mensagem de campo de busca vazio
function showModalEmptyField() {
  const modalContent = document.querySelector('#modalFilterBody');
  const newsItem = document.createElement('div');
  newsItem.innerHTML = `
    <p>Digite algo no campo de busca e tente novamente!</p>
  `;
  modalContent.appendChild(newsItem);
}

// Mostra o modal com a mensagem de erro ao buscar notícias
function showModalNewsError() {
  const modalContent = document.querySelector('#modalFilterBody');
  const newsItem = document.createElement('div');
  newsItem.innerHTML = `
    <p>Ocorreu algum erro ao buscar notícias!</p>
  `;
  modalContent.appendChild(newsItem);
}

// Mostra o modal com a mensagem de notícias não encontradas com os filtros passados
function showModalNewsNotFound() {
  const modalContent = document.querySelector('#modalFilterBody');
  const newsItem = document.createElement('div');
  newsItem.innerHTML = `
    <p>Notícia(s) não encontrada(s)!</p>
  `;
  modalContent.appendChild(newsItem);
}

// Limpa o modal ao abrir
function clearModal() {
  const modalContent = document.querySelector('#modalFilterBody');
  modalContent.innerHTML = '';
}