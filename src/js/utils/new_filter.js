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
    alert('Erro ao buscar notícias!');
    console.error(error);
  } if (news.length === 0) {
    alert('Nenhuma notícia encontrada!');
    console.log('Nenhuma notícia encontrada!');
  } else {
    showNews(news);
    console.log(news);
  }
}

// Pega o valor do filtro no input HTML
function getValueFilter() {
  const input = document.querySelector('#search').value;
  return input;
}

// Funcao que dispara os filtros 
document.querySelector('#send').addEventListener('click', (event) => {
  if (getValueFilter() === '') {
    alert('Digite algo no campo de busca!');
  } else {
    filterNews();
  }
  event.preventDefault();
})

/** 
 * Funcao que mostra o modal com as noticias filtradas
 * @param {Array} news - Array de objetos de notícias filtradas
 */
function showNews(news) {
  const modalContent = document.querySelector('#modalFilterBody');
  modalContent.innerHTML = ''; // Limpa o conteúdo anterior

  news.forEach((item) => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
      <ul>
        <li>${item.title}</li>
      </ul>
    `;
    modalContent.appendChild(newsItem);
  });
}