const navbarMain = document.createElement("div");
navbarMain.classList = "navbar";
const firstChild = document.body.firstChild;
document.body.insertBefore(navbarMain, firstChild);

// main navbar

const navbarLeft = document.createElement("div");
navbarLeft.classList = "left";

const navbarLeftText = document.createElement("p");
navbarLeftText.textContent = "Colors+";
navbarLeftText.classList = "leftText"
navbarLeftText.style.userSelect = "none";

navbarMain.appendChild(navbarLeft);
navbarLeft.appendChild(navbarLeftText);

// left of the navbar

const navbarRight = document.createElement("div");
navbarRight.classList = "right";

const navbarButton1 = document.createElement("div");
navbarButton1.classList = "button";
navbarButton1.textContent = "Home";
const navbarButton1R = document.createElement("a");
navbarButton1R.href = "/ColorsPlus/";

const navbarButton2 = document.createElement("div");
navbarButton2.classList = "button";
navbarButton2.textContent = "Colors";
const navbarButton2R = document.createElement("a");
navbarButton2R.href = "/ColorsPlus/list";

const navbarButton3 = document.createElement("div");
navbarButton3.classList = "button";
navbarButton3.textContent = "Install";
const navbarButton3R = document.createElement("a");
navbarButton3R.href = "/ColorsPlus/install";

navbarMain.appendChild(navbarRight);
navbarRight.appendChild(navbarButton1R);
navbarButton1R.appendChild(navbarButton1);
navbarRight.appendChild(navbarButton2R);
navbarButton2R.appendChild(navbarButton2);
navbarRight.appendChild(navbarButton3R);
navbarButton3R.appendChild(navbarButton3);

// right of the navbar
