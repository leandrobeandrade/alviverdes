let textTruncate = document.querySelector('#main-card');

function truncate() {
  const txt = textTruncate?.textContent?.slice(0, 400);

  if (textTruncate !== null) textTruncate.textContent = `${txt} ...`;
}

truncate();