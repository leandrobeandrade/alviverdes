/**
 * Define o agent do supabase
 * agent inicializado no index.html
 */
function Supabase() {
  const agent = window?._supabase;

  getAllNews(agent);
  getJournalist(agent);
  loader();
}

setTimeout(() => Supabase(), 700);

/**
 * Busca as notícias no banco de dados
 * @param {Supabase} agent
 */
async function getAllNews(agent) {
  const { data: news, error } = await agent.from('news').select('*').range(1, 7).order('created_at', { ascending: true });

  console.log(news);

  if (error) {
    alert('Erro ao buscar notícias');
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
  const { data: journalist_, error_ } = await agent
    .from('news')
    .select(`
      id_journalist,
      journalists(name)
    `).range(1, 7).order('created_at', { ascending: true });

  console.log(journalist_);

  const main_journalist = document.querySelector('#main_journalist');
  const journalist_new4 = document.querySelector('#journalist_new4');
  const journalist_new5 = document.querySelector('#journalist_new5');
  const journalist_new6 = document.querySelector('#journalist_new6');

  if (error_) {
    alert('Erro ao buscar jornalistas');
  } else {
    main_journalist.textContent = journalist_[6]?.journalists?.name;
    journalist_new4.textContent = journalist_[2]?.journalists?.name;
    journalist_new5.textContent = journalist_[3]?.journalists?.name;
    journalist_new6.textContent = journalist_[4]?.journalists?.name;
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

  date.textContent = new Date(new4[2]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new4[2]?.title;
  parag.textContent = new4[2]?.field1;
  img.setAttribute('src', new4[2]?.image);

  toNew(title, new4[2]?.id);
}

function new5(new5) {
  const title = document.querySelector('#title5');
  const img = document.querySelector('#img5');
  const parag = document.querySelector('#parag5');
  const date = document.querySelector('#date5');

  date.textContent = new Date(new5[1]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new5[1]?.title;
  parag.textContent = new5[1]?.field1;
  img.setAttribute('src', new5[1]?.image);

  toNew(title, new5[1]?.id);
}

function new6(new6) {
  const title = document.querySelector('#title6');
  const img = document.querySelector('#img6');
  const parag = document.querySelector('#parag6');
  const date = document.querySelector('#date6');

  date.textContent = new Date(new6[0]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = new6[0]?.title;
  parag.textContent = new6[0]?.field1;
  img.setAttribute('src', new6[0]?.image);

  toNew(title, new6[0]?.id);
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
 * Exibe o loader
 */
function loader() {
  document.querySelectorAll('.row_news')[0].hidden = false;
  document.querySelectorAll('.loading')[0].style.display = 'none';
}
