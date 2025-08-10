
// JavaScript for the sticky header and scroll to top button
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

topBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};




