/* =========================
   OPEN WEBSITE
========================= */

function enterWebsite() {

    const opening = document.querySelector(".opening");
    const main = document.querySelector(".main-content");

    opening.style.opacity = "0";

    setTimeout(() => {

        opening.style.display = "none";

        main.classList.add("active");

    }, 1200);
}


/* =========================
   BUNGA LILY
========================= */

const lilyContainer =
    document.querySelector(".lily-container");

const lilySymbols = [
    "🌸",
    "🌺",
    "✿",
    "❀",
    "❁"
];

for (let i = 0; i < 18; i++) {

    const lily = document.createElement("div");

    lily.classList.add("lily");

    lily.innerHTML =
        lilySymbols[
            Math.floor(Math.random() * lilySymbols.length)
        ];

    lily.style.left =
        Math.random() * 100 + "%";

    lily.style.animationDuration =
        (10 + Math.random() * 12) + "s";

    lily.style.animationDelay =
        (Math.random() * 10) + "s";

    lily.style.fontSize =
        (25 + Math.random() * 35) + "px";

    lilyContainer.appendChild(lily);
}


/* =========================
   PETAL JATUH
========================= */

const petals =
    document.querySelector(".petals");

for (let i = 0; i < 35; i++) {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    petal.style.animationDelay =
        Math.random() * 8 + "s";

    petal.style.opacity =
        0.3 + Math.random() * 0.7;

    petals.appendChild(petal);
}