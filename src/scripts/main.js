'use strict';

const thumbs = document.querySelector('#thumbs');
const image = document.querySelector('#largeImg');

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const link = ev.target.closest('a');
  const thumb = ev.target.closest('img');

  if (!link || !thumb) {
    return;
  }

  image.src = link.href;
});
