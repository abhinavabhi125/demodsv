// Auto-rotate ads
let index = 0;
const ads = document.querySelectorAll('.ad');

function rotateAds() {
  ads.forEach(ad => ad.classList.remove('active'));
  index = (index + 1) % ads.length;
  ads[index].classList.add('active');
}
setInterval(rotateAds, 4000);

// Popup logic
const popup = document.getElementById("popup");
const btn = document.getElementById("popupBtn");
const span = document.querySelector(".close");

btn.onclick = () => popup.style.display = "block";
span.onclick = () => popup.style.display = "none";
window.onclick = (e) => {
  if (e.target == popup) popup.style.display = "none";
};
