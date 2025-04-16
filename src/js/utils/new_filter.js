/**
 * Define o agent do supabase
 * agent inicializado no index.html
 */
function supabase_filter() {
  const agent = window?._supabase;

  filter(agent);
}

setTimeout(() => supabase_filter(), 1000);

async function filter() {    
  let { data: news, error } = await agent
  .from('news')
  .select("*")

  // Filters
  .eq('title', 'Maurício acredita em título do Palmeiras e rasga elogios ao Cruzeiro, antigo clube do meia')

  if (error) {
    alert('Erro ao buscar notícias!');
    console.error(error);
  } else {
    console.log(news);
  }
  

}