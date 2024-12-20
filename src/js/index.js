/**
 * Define o agent do supabase
 * agent inicializado no index.html
 */
function Supabase() {
  const agent = window?._supabase;

  getMainNew(agent);
  getJournalist(agent);
}

/**
 * Busca as notícias no banco de dados
 * @param {*} agent 
 */
async function getMainNew(agent) {
  const { data: news, error } = await agent.from('news').select('*');
  const title = document.querySelector('#main-title');
  const date = document.querySelector('#date');
  const parag1 = document.querySelector('#parag1');
  // const parag2 = document.querySelector('#parag2');
  // const parag3 = document.querySelector('#parag3');
  // const img = document.querySelector('#img-main');

  console.log(news);
  date.textContent = new Date(news[0]?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  title.textContent = news[0]?.title;
  parag1.textContent = news[0]?.field1;
  // parag2.textContent = news[0]?.field2;
  // parag3.textContent = news[0]?.field3;
  // img.setAttribute('src', new$?.data[0].image);
}

/**
 * Faz a relação entre as tabelas news e journalists pra pegar o jornalista da notícia
 * @param {*} agent
 */
async function getJournalist(agent) {
  const journalist = document.querySelector('#journalist');
  const { data: journalist_, error_ } = await agent
  .from('news')
  .select(`
    id_journalist,
    journalists (
      name
    )
  `)

  journalist.textContent = journalist_[0]?.journalists?.name;
}

setTimeout(() => Supabase(), 500);

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
