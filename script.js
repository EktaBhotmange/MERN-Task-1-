const themeToggle = document.getElementById("themeToggle");


// Theme Toggle
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const isLightMode =
        document.body.classList.contains("light-mode");

    if (isLightMode) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }

});


// Remember Theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.textContent = "☀️";

}


// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nameInput =
        contactForm.querySelector('input[name="name"]');

    const name = nameInput.value.trim();

    if (name !== "") {

        alert("Thank you, " + name + "! Your message has been received.");

    }

    contactForm.reset();

});