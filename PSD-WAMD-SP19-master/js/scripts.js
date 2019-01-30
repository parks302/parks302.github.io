const btn = document.getElementById("menu-button");
const nav = document.getElementById("main-nav");

btn.addEventListener('click', event => {
	event.preventDefault();
  	nav.classList.toggle("hidden");
  	btn.classList.toggle("close");
}) 