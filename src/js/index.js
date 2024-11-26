/* import { createClient } from '@supabase/supabase-js';
import { environment } from '../environments/env.dev';
import create from './create';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getUsers() {
  console.log('funfou');
  
  let { data: users, error } = await supabase
    .from('users')
    .select('name, role')

  if (error) {
    console.error('Erro ao buscar usuários:', error);
  } else {
    console.log('Nome dos usuários >>>>');
    console.log(users);
  }
}

getUsers(); */

let btn = document.getElementById('btn');

// btn?.addEventListener('click', create);

let textTruncate = document.querySelector('#main-title');

function truncateTitle(text) {
  const txt = text?.textContent?.slice(0, 125);

  if (text !== null) text.textContent = `${txt} ...`;
}

truncateTitle(textTruncate);
