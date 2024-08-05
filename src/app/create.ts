import { createClient } from '@supabase/supabase-js'
import { environment } from '../environments/env.dev'

const supabaseUrl = environment.supabaseUrl
const supabaseKey = environment.supabaseKey
const supabase = createClient(supabaseUrl, supabaseKey)

async function create() {
  try {
    let { data: users, error } = await supabase
      .from('users')
      .select('name')

    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

function teste() {
  alert('!!!');
}

let btn: HTMLElement | null = document.getElementById('tes');

btn?.addEventListener('click', teste);

export default create;