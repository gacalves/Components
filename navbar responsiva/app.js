const navSlide = () => {
    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((navLink, i) => {
            navLink.style.animation = navLink.style.animation ? "" :
                `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s`;
            burger.classList.toggle("toggle");
        });
    });

}

navSlide();