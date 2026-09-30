const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();
});