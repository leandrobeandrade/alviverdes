let agent;
let toast;
/**
 * Define o agent do supabase e toast
 * ambos inicializados no posts.html
*/
setTimeout(() => {
  const agent_ = window?._supabase;
  const toast_ = window?._toast;

  agent = agent_;
  toast = toast_;
}, 700);

// Cria a notícia no banco de dados
async function postNews() {
  const title_ = document.getElementById('title').value;
  const field1_ = document.getElementById('field1').value;
  const field2_ = document.getElementById('field2').value;
  const field3_ = document.getElementById('field3').value;
  const file = document.getElementById('file-img').files[0];
  const fileString = 'https://hiqvrhtdkpjkqxkrasna.supabase.co/storage/v1/object/public/alviverdes-img/news/' + file.name;
  const invalid = document.getElementsByClassName('invalid');

  for (let i = 0; i < invalid.length; i++) {
    const element = invalid[i];
    element.style.display = 'none';
  }

  if (!title_) invalid[0].style.display = 'inline-block';
  if (!field1_) invalid[1].style.display = 'inline-block';
  if (!field2_) invalid[2].style.display = 'inline-block';
  if (!field3_) invalid[3].style.display = 'inline-block';
  else {
    const { data, error } = await agent
      .from('news')
      .insert([
        { title: title_, image: fileString, field1: field1_, field2: field2_, field3: field3_, id_journalist: 1 },
      ])
      .select()
  
    if (error) showToasterError();
    else {
      showToasterSuccess();
      uploadFile(file);
      console.log(data);
    }
  }
}

// Faz o upload da imagem para o banco de dados
async function uploadFile(file) {
  const { data, error } = await agent.storage.from('alviverdes-img').upload(`news/${file.name}`, file);

  if (error) showToasterError();
}

// Envia a notícia para o banco de dados ao clicar no botão
document.getElementById('post').addEventListener('click', () => postNews());

// Reseta os campos do formulário
document.getElementById('reset').addEventListener('click', () => window.location.reload());

// Exibe um toaster de sucesso na criação da notícia
function showToasterSuccess() {
  toast({
    text: 'Notícia criada com sucesso!',
    duration: 5000,
    gravity: 'top',
    position: 'right',
    style: { background: 'linear-gradient(to right, #45A43B, #1C4B17)', color: '#ffffff', marginTop: '10vh' }
  }).showToast();
}

// Exibe um toaster de erro na criação da notícia
function showToasterError() {
  toast({
    text: 'Erro ao criar notícia! Houve algum erro inesperado.',
    duration: 5000,
    gravity: 'top',
    position: 'right',
    style: { background: 'red', color: '#ffffff', marginTop: '10vh' }
  }).showToast();
}