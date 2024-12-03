let journalist = document.querySelector('#journalist');

// Define o agente Supabase
async function Supabase() {
  let users = await window?._supabase
  .from('journalists')
  .select('name')

  journalist.textContent = `Por: ${users?.data[0].name} em 26/07/2024 - 14:00`;
}

setTimeout(() => Supabase(), 500);
