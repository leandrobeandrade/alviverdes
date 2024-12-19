let journalist = document.querySelector('#journalist');
let date = document.querySelector('#date');

// Define o agente Supabase
async function Supabase() {
  const agent = window?._supabase;

  getMainNew(agent)

  let users = await agent
  .from('journalists')
  .select('name')

  journalist.textContent = `Por: ${users?.data[0].name}`;
  date.textContent = new Date().toLocaleDateString();
}

async function getMainNew(agent) {
  // const new$ = await agent.from('news').select('*');
  // const title = document.querySelector('#main-title');
  // const img = document.querySelector('#img-main');
  // const new_ = document.querySelector('#main-new');

  // console.log(new$);
  // title.textContent = new$?.data[0].title;
  // img.setAttribute('src', new$?.data[0].image);
  // new_.textContent = new$?.data[0].new;
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
