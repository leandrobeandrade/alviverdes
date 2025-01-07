let params = new URLSearchParams(document.location.search.substring(1));

/**
 * Define o agent do supabase
 * agent inicializado no index.html
 */
function Supabase() {
  const agent = window?._supabase;

  getMainNew(agent);
  getJournalistMainNew(agent);
  loader();
}

setTimeout(() => Supabase(), 700);

/**
 * Busca as notícias no banco de dados
 * @param {Supabase} agent
 */
async function getMainNew(agent) {
  let { data: new_, error } = await agent
  .from('news')
  .select('*').eq('id', params.get('new'));
  
  console.log(new_);
  
  if (error) alert('Erro ao buscar notícia');
  else mainNew(new_);
}

/**
 * Faz a relação entre as tabelas news e journalists pra pegar o jornalista da notícia principal
 * @param {Supabase} agent
 */
async function getJournalistMainNew(agent) {
  const { data: journalist, error } = await agent
    .from('news')
    .select(`
      id_journalist,
      journalists(name)
    `).eq('id', params.get('new'));

  console.log(journalist);

  const main_journalist = document.querySelector('#main_journalist');

  if (error) alert('Erro ao buscar jornalista');
  else main_journalist.textContent = journalist[0]?.journalists?.name;
}

async function AllNews(agent) {
  const { data: news, error } = await agent.from('news').select('*').range(1, 7).order('created_at', { ascending: true });

  console.log(news);

  if (error) {
    alert('Erro ao buscar notícias');
  } else {
    new1(news);
    new2(news);
    new3(news);
    new4(news);
    new5(news);
    new6(news);
  }
}

function mainNew(new_) {
  const main_title = document.querySelector('#title-main');
  const main_image = document.querySelector('#main-img');
  const main_date = document.querySelector('#main-date');
  const parag1 = document.querySelector('#new_parag1');
  const parag2 = document.querySelector('#new_parag2');
  const parag3 = document.querySelector('#new_parag3');

  main_title.textContent = new_[0]?.title;
  main_image.src = new_[0]?.image;
  main_date.textContent = new Date(new_[0]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  parag1.textContent = new_[0]?.field1;
  parag2.textContent = new_[0]?.field2;
  parag3.textContent = new_[0]?.field3;
}

/**
 * Função para exibir o loader
 */
function loader() {
  document.querySelectorAll('.main-new')[0].hidden = false;
  document.querySelectorAll('.loading')[0].style.display = 'none';
}
