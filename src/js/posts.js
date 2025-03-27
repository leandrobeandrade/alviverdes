/**
 * Define o agent do supabase
 * agent inicializado no posts.html
 */
let agent_;
setTimeout(() => {
  const agent = window?._supabase;
  agent_= agent;
  
}, 700);

/**
 * Cria a notícia no banco de dados
 * @param {Supabase} agent
 */
async function postNews() {
  const title_ = document.getElementById('title').value;
  const field1_ = document.getElementById('field1').value;
  const field2_ = document.getElementById('field2').value;
  const field3_ = document.getElementById('field3').value;
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
    const { data, error } = await agent_
      .from('news')
      .insert([
        { title: title_, field1: field1_, field2: field2_, field3: field3_, id_journalist: 1 },
      ])
      .select()
  
    if (error) console.log(error);
    else console.log(data);
  }
}

/**
 * Envia a notícia para o banco de dados ao clicar no botão
 */
document.getElementById('post').addEventListener('click', () => postNews());

/**
 * Reseta os campos do formulário
 */
document.getElementById('reset').addEventListener('click', () => window.location.reload());