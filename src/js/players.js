// import { createClient } from '@supabase/supabase-js';
// import { environment } from '../environments/env.dev';

// const supabaseUrl = environment.supabaseUrl;
// const supabaseKey = environment.supabaseKey;
// const supabase = createClient(supabaseUrl, supabaseKey);

const url = 'https://hiqvrhtdkpjkqxkrasna.supabase.co/storage/v1/object/sign/alviverdes-img/p7.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbHZpdmVyZGVzLWltZy9wNy5qcGciLCJpYXQiOjE3MjQ4MTA5OTEsImV4cCI6MTcyNTQxNTc5MX0.fdDwNvDakv3p8mJ00l7FFZB_1zDveiiIIgE01AMnZdY&t=2024-08-28T02%3A09%3A52.312Z';

document.getElementById('img_02')?.setAttribute('src', url);

// const { data } = supabase.storage.from('alviverdes-img').getPublicUrl(url);

// console.log(data.publicUrl);

// document.getElementById('img_01')?.setAttribute('src', data.publicUrl)


// fetch(url).then((res) => res.blob()).then(d => console.log(d));
// const minhaPromise = (url: string) => fetch(url).then((res) => res.json());
