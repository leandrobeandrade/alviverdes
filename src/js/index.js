let journalist = document.querySelector('#journalist');

// Define o agente Supabase
async function Supabase() {
  const agent = window?._supabase;

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

setTimeout(() => Supabase(), 500);
