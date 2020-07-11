function navBar() {
    let nav = document.getElementById("nav-bar");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}
