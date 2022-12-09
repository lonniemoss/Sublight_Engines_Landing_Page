// The Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navOptions = document.querySelector(".nav-options");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navOptions.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navOptions.classList.remove("active");
}))

function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}


