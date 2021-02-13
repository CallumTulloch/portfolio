window.onload = function() {
    const spinner = document.getElementById('loading_display');
    spinner.classList.add('loaded');
  }

let loading = document.querySelector(".loading_title");
let letters = loading.textContent.split("");
loading.textContent = "";
letters.forEach((letter, i) => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${i / 5}s`;
  loading.append(span);
});
