const typing = (element, sentence) => {
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector(element).textContent += character;
    }, 100 * ++index);
  });
};

typing("#typing", "Welcome to my Portfolio.");

function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById("js-hamburger");
  var blackBg = document.getElementById("js-black-bg");

  hamburger.addEventListener("click", function () {
    body.classList.toggle("nav-open");
  });
  blackBg.addEventListener("click", function () {
    body.classList.remove("nav-open");
  });
}
toggleNav();
