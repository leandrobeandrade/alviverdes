import { createClient } from '@supabase/supabase-js';
import { environment } from '../environments/env.dev';
const url: string = 'https://hiqvrhtdkpjkqxkrasna.supabase.co/storage/v1/object/sign/alviverdes-img/p7.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbHZpdmVyZGVzLWltZy9wNy5qcGciLCJpYXQiOjE3MjQ4MTA5OTEsImV4cCI6MTcyNTQxNTc5MX0.fdDwNvDakv3p8mJ00l7FFZB_1zDveiiIIgE01AMnZdY&t=2024-08-28T02%3A09%3A52.312Z';
// const minhaPromise = (url: string) => fetch(url).then((res) => res.json());

fetch(url).then((res) => res.blob()).then(d => console.log(d));


const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('img_02')?.setAttribute('src', url);

const t = supabase.storage.from('alviverdes-img').getPublicUrl(url);

console.log(t);
console.log(t.data);
console.log(t.data.publicUrl);

document.getElementById('img_01')?.setAttribute('src', t.data.publicUrl)
