function toggleNavBar() {
  return document
    .querySelector(".navbar__link-toggle")
    .addEventListener("click", function () {
      const navs = document.querySelectorAll(".navbar__items");
      navs.forEach((nav) => nav.classList.toggle("navbar__toggleShow"));
    });
}

function SubmitFormData() {
  return document
    .getElementById("form")
    .addEventListener("submit", function (event) {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      console.log({ name, email, message });
      event.preventDefault();
    });
}

function main() {
  document.addEventListener("DOMContentLoaded", function () {
    toggleNavBar();
    submitFormData();
  });
}

main();
