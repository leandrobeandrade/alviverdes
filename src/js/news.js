let params = new URLSearchParams(document.location.search.substring(1));

/**
 * Define o agent do supabase
 * agent inicializado no index.html
 */
function Supabase() {
  const agent = window?._supabase;

  getMainNew(agent);
  getJournalistMainNew(agent);
  otherNews(agent);
  getJournalists(agent);
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

/**
 * Busca as notícias no banco de dados
 * @param {Supabase} agent 
 */
async function otherNews(agent) {
  const { data: news, error } = await agent.from('news').select('*').range(1, 7).neq('id', params.get('new')).order('created_at', { ascending: true });

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

/**
 * Busca o jornalista no banco de dados
 * @param {Supabase} agent 
 * @param {string} id 
 * @returns o jornalista relacionado a notícia
 */
async function getJournalist(agent, id) {
  const { data: journalist, error } = await agent
    .from('journalists')
    .select('*').eq('id', id);

  console.log(journalist);

  if (error) alert('Erro ao buscar jornalista');
  else return journalist[0];
}

/**
 * Busca os jornalistas no banco de dados
 * @param {Supabase} agent 
 */
async function getJournalists(agent) {
  const { data: journalists, error } = await agent
    .from('news')
    .select(`
      id_journalist,
      journalists(name)
    `).range(1, 7).neq('id', params.get('new'));

  console.log(journalists);

  if (error) alert('Erro ao buscar jornalistas');
  else {
    const journalist_new1 = document.querySelector('#journalist_new1');
    const journalist_new2 = document.querySelector('#journalist_new2');
    const journalist_new3 = document.querySelector('#journalist_new3');
    const journalist_new4 = document.querySelector('#journalist_new4');
    const journalist_new5 = document.querySelector('#journalist_new5');
    const journalist_new6 = document.querySelector('#journalist_new6');

    journalist_new1.textContent = journalists[0]?.journalists?.name;
    journalist_new2.textContent = journalists[1]?.journalists?.name;
    journalist_new3.textContent = journalists[2]?.journalists?.name;
    journalist_new4.textContent = journalists[3]?.journalists?.name;
    journalist_new5.textContent = journalists[4]?.journalists?.name;
    journalist_new6.textContent = journalists[5]?.journalists?.name; 
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

function new1(news) {
  const title1 = document.querySelector('#title1');
  const img1 = document.querySelector('#img1');
  const parag1 = document.querySelector('#parag1');
  const date1 = document.querySelector('#date1');

  title1.textContent = news[0]?.title;
  img1.src = news[0]?.image;
  parag1.textContent = news[0]?.field1;
  date1.textContent = new Date(news[0]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  toNew(title1, news[0]?.id);
}

function new2(news) { 
  const title2 = document.querySelector('#title2');
  const img2 = document.querySelector('#img2');
  const parag2 = document.querySelector('#parag2');
  const date2 = document.querySelector('#date2');

  title2.textContent = news[1]?.title;
  img2.src = news[1]?.image;
  parag2.textContent = news[1]?.field1;
  date2.textContent = new Date(news[1]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  toNew(title2, news[1]?.id);
}

function new3(news) { 
  const title3 = document.querySelector('#title3');
  const img3 = document.querySelector('#img3');
  const parag3 = document.querySelector('#parag3');
  const date3 = document.querySelector('#date3');

  title3.textContent = news[2]?.title;
  img3.src = news[2]?.image;
  parag3.textContent = news[2]?.field1;
  date3.textContent = new Date(news[2]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  toNew(title3, news[2]?.id);
}

function new4(news) {
  const title4 = document.querySelector('#title4');
  const img4 = document.querySelector('#img4');
  const parag4 = document.querySelector('#parag4');
  const date4 = document.querySelector('#date4');

  title4.textContent = news[3]?.title;
  img4.src = news[3]?.image;
  parag4.textContent = news[3]?.field1;
  date4.textContent = new Date(news[3]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  toNew(title4, news[3]?.id);
}

function new5(news) {
  const title5 = document.querySelector('#title5');
  const img5 = document.querySelector('#img5');
  const parag5 = document.querySelector('#parag5');
  const date5 = document.querySelector('#date5');

  title5.textContent = news[4]?.title;
  img5.src = news[4]?.image;
  parag5.textContent = news[4]?.field1;
  date5.textContent = new Date(news[4]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  toNew(title5, news[4]?.id);
}

function new6(news) {
  const title6 = document.querySelector('#title6');
  const img6 = document.querySelector('#img6');
  const parag6 = document.querySelector('#parag6');
  const date6 = document.querySelector('#date6');

  title6.textContent = news[5]?.title;
  img6.src = news[5]?.image;
  parag6.textContent = news[5]?.field1;
  date6.textContent = new Date(news[5]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  toNew(title6, news[5]?.id);
}

/**
 * Redireciona a página para a notícia
 * @param {HTMLElement} html_elem elemento html que será clicado 
 * @param {string} id id da notícia
 */
function toNew(html_elem, id) {
  html_elem.addEventListener('click', () => {
    window.location.href = `news.html?new=${id}`;
  });
}

/**
 * Função para exibir o loader
 */
function loader() {
  document.querySelectorAll('.main-new')[0].hidden = false;
  document.querySelectorAll('.loading')[0].style.display = 'none';
}
