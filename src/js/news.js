let journalist = document.querySelector('#journalist');

// Define o agente Supabase
async function Supabase() {
  const agent = window?._supabase;

  getMainNew(agent)

  let users = await agent
  .from('journalists')
  .select('name')

  journalist.textContent = `Por: ${users?.data[0].name} em 26/07/2024 - 14:00`;
}

async function getMainNew(agent) {
  const new$ = await agent.from('news').select('*');
  const title = document.querySelector('#main-title');
  const img = document.querySelector('#img-main');
  const new_ = document.querySelector('#main-new');

  console.log(new$);
  title.textContent = new$?.data[0].title;
  img.setAttribute('src', new$?.data[0].image);
  new_.textContent = new$?.data[0].new;
}

setTimeout(() => Supabase(), 500);
