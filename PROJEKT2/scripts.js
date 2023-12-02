const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
    // console.log("bylo kliknuto")
    if (hamburgerIcon.classList[1] === "fa-bars"){
        hamburgerIcon.classList.add ("fa-circle-xmark")
        hamburgerIcon.classList.remove ("fa-bars")
        menuList.style.display = "block"
    } else if (hamburgerIcon.classList [1] === "fa-circle-xmark"){
        hamburgerIcon.classList.add ("fa-bars")
        hamburgerIcon.classList.remove ("fa-circle-xmark")
        menuList.style.display = "none"
    }
})