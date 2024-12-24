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
  const title = document.querySelector('#title-main');
  const img = document.querySelector('#img-main');
  const p1 = document.querySelector('#new_parag1');
  const p2 = document.querySelector('#new_parag2');
  const p3 = document.querySelector('#new_parag3');

  console.log(new$);
  title.textContent = new$?.data[0].title;
  img.setAttribute('src', new$?.data[0].image);
  p1.textContent = new$?.data[0].field1;
  p2.textContent = new$?.data[0].field2;
  p3.textContent = new$?.data[0].field3;
}

setTimeout(() => Supabase(), 500);
