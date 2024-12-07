let journalist = document.querySelector('#journalist');

// Define o agente Supabase
async function Supabase() {
  const agent = window?._supabase;

  getMainNew(agent)

  let users = await agent
  .from('journalists')
  .select('name')

  journalist.textContent = `Por: ${users?.data[0].name} em 26/07/2024 - 14:00`;

  let images = await agent
  .from('storage.objects')

  console.log(images);

  const bucket = await agent
  .storage
  .getBucket('alviverdes-img')

  console.log(bucket);
  


  let t = await agent.storage.from('alviverdes-img').getPublicUrl('news/p7.jpg');
  
  document.getElementById('img-main').setAttribute('src', t.data.publicUrl)
  console.log(t);
  console.log(t.data.publicUrl);
  
}

async function getMainNew(agent) {
  const title = document.querySelector('#main-title');
  const title$ = await agent.from('news').select('title');

  title.textContent = title$?.data[0].title;
}

setTimeout(() => Supabase(), 500);
