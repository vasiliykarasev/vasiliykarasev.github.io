// Originally from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
function togglebib(paperid) {
  let bib = document.getElementById(paperid);
  if (!bib) {
    return;
  }
  if (bib.style.display == 'none') {
    bib.style.display = 'block';
  } else {
    bib.style.display = 'none';
  }
}
