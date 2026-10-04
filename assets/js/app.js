"use strict";

/*
 * =========================================================
 * Theme
 * =========================================================
 */

const html = document.documentElement;

const themeToggle = document.getElementById(
    "themeToggle"
);

const themeIcon = document.getElementById(
    "themeIcon"
);


/*
 * ---------------------------------------------------------
 * SVG icons
 * ---------------------------------------------------------
 */

const moonIcon = `
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
`;


const sunIcon = `
    <circle cx="12" cy="12" r="4" />

    <path
        stroke-linecap="round"
        d="M12 2v2
        M12 20v2
        M4.93 4.93l1.42 1.42
        M17.65 17.65l1.42 1.42
        M2 12h2
        M20 12h2
        M4.93 19.07l1.42-1.42
        M17.65 6.35l1.42-1.42"
    />
`;


/*
 * =========================================================
 * Theme functions
 * =========================================================
 */

function updateThemeIcon(isDark) {
    themeIcon.innerHTML = isDark ?
        sunIcon :
        moonIcon;
}


function setTheme(theme) {

    const isDark = theme === "dark";

    html.classList.toggle(
        "dark",
        isDark
    );

    updateThemeIcon(isDark);
}


/*
 * =========================================================
 * Initial theme
 * =========================================================
 */

const savedTheme =
    localStorage.getItem("theme");

const systemPrefersDark =
    window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;


if (savedTheme) {

    setTheme(savedTheme);

} else {

    setTheme(
        systemPrefersDark ?
        "dark" :
        "light"
    );
}


/*
 * =========================================================
 * Theme toggle
 * =========================================================
 */

themeToggle.addEventListener(
    "click",
    () => {

        const isDark =
            html.classList.contains("dark");

        const newTheme =
            isDark ?
            "light" :
            "dark";

        localStorage.setItem(
            "theme",
            newTheme
        );

        setTheme(newTheme);
    }
);


/*
 * =========================================================
 * Footer year
 * =========================================================
 */

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();
