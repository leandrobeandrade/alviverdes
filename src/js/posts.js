/**
 * Define o agent do supabase
 * agent inicializado no index.html
 */
function Supabase() {
  const agent = window?._supabase;

  console.log(agent);

}

setTimeout(() => Supabase(), 700);

/**
 * Cria a notícia no banco de dados
 * @param {Supabase} agent
 */
async function postNews(agent) {
  const { data, error } = await agent
    .from('news')
    .insert([
      { title: title_, field1: field1_, field2: field2_, field3: field3_, journalist: journalist_ },
    ])
    .select()

  if (error) console.log(error);
  else console.log(data);
}