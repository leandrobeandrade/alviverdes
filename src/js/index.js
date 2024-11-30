const mainTitle = document.querySelector('#main-title');
const mainNew = document.querySelectorAll('.new')[0];
const sectionCardTitle = document.querySelectorAll('.card-title');
const sectionCardNew = document.querySelectorAll('.card-text');

function truncateWords(text, length) {
  const txt = text?.textContent?.slice(0, length);

  if (text !== null) text.textContent = `${txt}...`;
}

truncateWords(mainTitle, 125);
truncateWords(mainNew, 300);

// Loop pelos elementos onde o truncate são feitos em vários elementos html
function forToTruncate(elem_html, length) {
  for (let i = 0; i < elem_html.length; i++) {
    const elem = elem_html[i];
    
    truncateWords(elem, length);
  }
}

forToTruncate(sectionCardTitle, 61);
forToTruncate(sectionCardNew, 150);


// const { createClient } = supabase
// const supabaseUrl = 'https://hiqvrhtdkpjkqxkrasna.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcXZyaHRka3Bqa3F4a3Jhc25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5MTI1ODEsImV4cCI6MjAzNjQ4ODU4MX0.X2jU3i1X3ua_VAU64vjQdP6erxl3B_cf622Xrx4uVJI'
// const _supabase = C_C(supabaseUrl, supabaseKey)
// console.log('Supabase Instance: ', _supabase)