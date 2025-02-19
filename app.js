import { languages } from "./scripts/constants.js";
import { features } from "./scripts/constants.js";

const languageGroup = document.querySelector(".language-group__elem");
const showList = document.querySelector(".show-list");
const list = document.querySelector(".show-list__list");

const html = languages.map((item) => {
  return ` <li class="show-list__item">${item}</li>`;
});
list.innerHTML = html.join("");
const findClickPlace = (e) => {
  e.preventDefault();
  if (e.target === languageGroup) {
    showList.classList.add("show-list-active");
  } else {
    showList.classList.remove("show-list-active");
  }
};
window.addEventListener("click", findClickPlace);

const signInBtn = document.querySelector("#signInBtn");
signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location = "pages/signIn.html";
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  height: 445,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  scrollbar: {
    el: ".scrollbar",
  },
});

const listItem = document.querySelector(".features-container__items");
const rowTitle = document.querySelector(".row-title");
const rowImage = document.querySelector(".row-image");
const about = document.querySelector(".body-slide__about");

features.map((item) => {
  const newItemList = document.createElement("li");
  newItemList.classList.add("features-container__item");
  newItemList.textContent = item.title;
  listItem.insertAdjacentElement("afterbegin", newItemList);

  const listClick = (e) => {
    if (e.target === newItemList) {
      newItemList.classList.add("active-item");
      rowTitle.textContent = item.title;
      rowImage.src = item.image;
      about.textContent = item.text;
    } else {
      newItemList.classList.remove("active-item");
    }
  };
  listItem.addEventListener("click", listClick);
});

const nav = document.querySelector(".nav-mobile");
const navList = document.querySelector(".nav__list");
nav.addEventListener("click", () => {
  navList.classList.toggle("list-active");
  console.log("click");
});
