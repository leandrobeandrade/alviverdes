/**
 * Define o agent do supabase
 * agent inicializado no index.html
 */
function Supabase() {
  const agent = window?._supabase;

  getAllNews(agent);
  getJournalist(agent);
}

setTimeout(() => Supabase(), 700);

/**
 * Busca a quantidade total de notícias para fazer o range com as últimas 7 notícias
 * @param {Supabase} agent
 * count: quantidade total de notícias
 * head: retorna apenas a quantidade de notícias
 */
async function getCountTotalNews(agent) {
  const { data, count } = await agent.from('news').select('*', { count: 'exact', head: true });
  return count;
}

/**
 * Busca as notícias no banco de dados
 * @param {Supabase} agent
 * range: retorna as notícias de acordo com o range, inicia com zero
 */
async function getAllNews(agent) {
  const count = await getCountTotalNews(agent);
  const { data: news, error } = await agent.from('news').select('*').range(count - 7, count).order('created_at', { ascending: true });

  if (error) {
    showToaster();
  } else {
    mainNew(news);
    new1(news);
    new2(news);
    new3(news);
    new4(news);
    new5(news);
    new6(news);
  }
}

/**
 * Faz a relação entre as tabelas news e journalists pra pegar o jornalista da notícia
 * @param {Supabase} agent
 */
async function getJournalist(agent) {
  const count = await getCountTotalNews(agent);
  const { data: journalist_, error_ } = await agent
    .from('news')
    .select(`
      id_journalist,
      journalists(name)
    `).range(count - 7, count).order('created_at', { ascending: true });

  console.log(journalist_);

  const main_journalist = document.querySelector('#main_journalist');
  const journalist_new1 = document.querySelector('#journalist_new1');
  const journalist_new2 = document.querySelector('#journalist_new2');
  const journalist_new3 = document.querySelector('#journalist_new3');
  const journalist_new4 = document.querySelector('#journalist_new4');
  const journalist_new5 = document.querySelector('#journalist_new5');
  const journalist_new6 = document.querySelector('#journalist_new6');
  const journalist_new4_small = document.querySelector('#journalist_new4_small');
  const journalist_new5_small = document.querySelector('#journalist_new5_small');
  const journalist_new6_small = document.querySelector('#journalist_new6_small');

  if (error_) {
    alert('Erro ao buscar jornalistas');
  } else {
    main_journalist.textContent = journalist_[6]?.journalists?.name;
    journalist_new1.textContent = journalist_[5]?.journalists?.name;
    journalist_new2.textContent = journalist_[4]?.journalists?.name;
    journalist_new3.textContent = journalist_[3]?.journalists?.name;
    journalist_new4.textContent = journalist_[2]?.journalists?.name;
    journalist_new5.textContent = journalist_[1]?.journalists?.name;
    journalist_new6.textContent = journalist_[0]?.journalists?.name;
    journalist_new4_small.textContent = journalist_[2]?.journalists?.name;
    journalist_new5_small.textContent = journalist_[1]?.journalists?.name;
    journalist_new6_small.textContent = journalist_[0]?.journalists?.name;
  }
}

/** 
 * Exibe a notícia principal
 */
function mainNew(new_main) {
  const title = document.querySelector('#main-title');
  const date = document.querySelector('#main-date');
  const img = document.querySelector('#main-img');
  const parag = document.querySelector('#main-parag');

  date.textContent = new Date(new_main[6]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new_main[6]?.title;
  parag.textContent = new_main[6]?.field1;
  img.setAttribute('src', new_main[6]?.image);

  toNew(title, new_main[6]?.id);
}

/**
 * Exibe as notícias laterais
 */
function new1(new1) {
  const title = document.querySelector('#title1');
  const img = document.querySelector('#img1');
  const parag = document.querySelector('#parag1');
  const date = document.querySelector('#date1');

  date.textContent = new Date(new1[5]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new1[5]?.title;
  parag.textContent = new1[5]?.field1;
  img.setAttribute('src', new1[5]?.image);

  toNew(title, new1[5]?.id);
}

function new2(new2) {
  const title = document.querySelector('#title2');
  const img = document.querySelector('#img2');
  const parag = document.querySelector('#parag2');
  const date = document.querySelector('#date2');

  date.textContent = new Date(new2[4]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new2[4]?.title;
  parag.textContent = new2[4]?.field1;
  img.setAttribute('src', new2[4]?.image);

  toNew(title, new2[4]?.id);
}

function new3(new3) {
  const title = document.querySelector('#title3');
  const img = document.querySelector('#img3');
  const parag = document.querySelector('#parag3');
  const date = document.querySelector('#date3');

  date.textContent = new Date(new3[3]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new3[3]?.title;
  parag.textContent = new3[3]?.field1;
  img.setAttribute('src', new3[3]?.image);

  toNew(title, new3[3]?.id);
}

/** 
 * Exibe as notícias abaixo
 */
function new4(new4) {
  const title = document.querySelector('#title4');
  const img = document.querySelector('#img4');
  const parag = document.querySelector('#parag4');
  const date = document.querySelector('#date4');
  const title_small = document.querySelector('#title4_small');
  const img_small = document.querySelector('#img4_small');
  const parag_small = document.querySelector('#parag4_small');
  const date_small = document.querySelector('#date4_small');

  date.textContent = new Date(new4[2]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new4[2]?.title;
  parag.textContent = new4[2]?.field1;
  img.setAttribute('src', new4[2]?.image);

  date_small.textContent = new Date(new4[2]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title_small.textContent = new4[2]?.title;
  parag_small.textContent = new4[2]?.field1;
  img_small.setAttribute('src', new4[2]?.image);

  toNew(title, new4[2]?.id);
  toNew(title_small, new4[2]?.id);
}

function new5(new5) {
  const title = document.querySelector('#title5');
  const img = document.querySelector('#img5');
  const parag = document.querySelector('#parag5');
  const date = document.querySelector('#date5');
  const title_small = document.querySelector('#title5_small');
  const img_small = document.querySelector('#img5_small');
  const parag_small = document.querySelector('#parag5_small');
  const date_small = document.querySelector('#date5_small');

  date.textContent = new Date(new5[1]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new5[1]?.title;
  parag.textContent = new5[1]?.field1;
  img.setAttribute('src', new5[1]?.image);

  date_small.textContent = new Date(new5[1]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title_small.textContent = new5[1]?.title;
  parag_small.textContent = new5[1]?.field1;
  img_small.setAttribute('src', new5[1]?.image);

  toNew(title, new5[1]?.id);
  toNew(title_small, new5[1]?.id);
}

function new6(new6) {
  const title = document.querySelector('#title6');
  const img = document.querySelector('#img6');
  const parag = document.querySelector('#parag6');
  const date = document.querySelector('#date6');
  const title_small = document.querySelector('#title6_small');
  const img_small = document.querySelector('#img6_small');
  const parag_small = document.querySelector('#parag6_small');
  const date_small = document.querySelector('#date6_small');

  date.textContent = new Date(new6[0]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new6[0]?.title;
  parag.textContent = new6[0]?.field1;
  img.setAttribute('src', new6[0]?.image);

  date_small.textContent = new Date(new6[0]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title_small.textContent = new6[0]?.title;
  parag_small.textContent = new6[0]?.field1;
  img_small.setAttribute('src', new6[0]?.image);

  toNew(title, new6[0]?.id);
  toNew(title_small, new6[0]?.id);
}

/**
 * Redireciona para a página da notícia
 * @param {HTMLElement} html_elem elemento html que será clicado 
 * @param {string} id id da notícia
 */
function toNew(html_elem, id) {
  html_elem.addEventListener('click', () => {
    window.location.href = `./src/pages/news.html?new=${id}`;
  });
}

/**
 * Exibe o loader até que a página esteja completamente carregada
 */
function loader() {
  document.querySelectorAll('.row_news')[0].hidden = false;
  document.querySelectorAll('.loading')[0].style.display = 'none';
}

window.addEventListener('load', (event) => loader());

/**
 * Exibe um toaster de erro e desabilita a página
 */
function showToaster() {
  const toast = window?._toast;

  toast({
    text: 'Erro ao buscar notícias! Tente novamente mais tarde.',
    duration: -1,
    position: 'center',
    style: { background: 'linear-gradient(to right, #45A43B, #1C4B17)', color: '#ffffff', marginTop: '50vh' }
  }).showToast();

  document.querySelector('main').style.opacity = 0.1;
  document.querySelector('section').style.opacity = 0.1;
  document.querySelectorAll('section')[1].style.opacity = 0.1;
  document.querySelectorAll('section')[2].style.opacity = 0.1;
  document.body.style.pointerEvents = 'none';
  document.body.style.overflow = 'hidden';
  document.querySelector('header').style.pointerEvents = 'auto';
  document.querySelector('footer').style.pointerEvents = 'auto';
}