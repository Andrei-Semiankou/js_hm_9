const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
let themeSwitch = document.querySelector(".theme-switch__toggle");
themeSwitch.addEventListener("change", changeTheme);
let bodyTheme = document.querySelector("body");

function changeTheme() {
  if (themeSwitch.checked) {
    bodyTheme.classList.add(Theme.DARK);
    bodyTheme.classList.remove(Theme.LIGHT);
    localStorage.setItem("Theme", Theme.DARK);
  } else {
    bodyTheme.classList.add(Theme.LIGHT);
    bodyTheme.classList.remove(Theme.DARK);
    localStorage.setItem("Theme", Theme.LIGHT);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const themeValue = localStorage.getItem("Theme");
  if (!themeValue) { // if themeValue = null then we set up new item to localstorage and add 'Light-theme' class
    localStorage.setItem("Theme", Theme.LIGHT);
    bodyTheme.classList.add(Theme.LIGHT);
  } else if (themeValue === Theme.DARK) {
    themeSwitch.checked = true;
    bodyTheme.classList.add(Theme.DARK);
  } else {
    bodyTheme.classList.add(Theme.LIGHT);
  }
});
