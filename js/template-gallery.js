const current = document.querySelector('#current');
const img = document.querySelectorAll('.imgs img');
const imgs = document.querySelector('.imgs');

img[0].style.opacity = 0.6;

imgs.addEventListener('click', imgClick);

function imgClick(e){
  if(e.target.src != null){
    img.forEach(img => (img.style.opacity = 1));
    current.src = e.target.src;
    e.target.style.opacity = 0.6;
    current.classList.add('fade');
    setTimeout(() => current.classList.remove('fade'), 500);
  }

}
