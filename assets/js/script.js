const header = document.querySelector(".header"),
    sections = document.querySelectorAll("section[id]"),
    skillsContainer = document.querySelector(".skills__items"),
    eduContainer = document.querySelector("#edu.timeline__items"),
    expContainer = document.querySelector("#exp.timeline__items"),
    services = document.querySelectorAll(".service"),
    formInputs = document.querySelectorAll(".form__input"),
    scrollUpBtn = document.querySelector(".scroll-up"),
    colorThemeBtn = document.querySelector(".color-theme"),
    mobileLinksContainer = document.querySelector(".header__links-mobile"),
    mobileLinks = document.querySelectorAll(".header__link-mobile a"),
    contactForm = document.getElementById("contact-form"),
    statusBox = document.querySelector(".form__status-box p");

/* ============== Header ============== */

/* ============== Skills Section ============== */
// Skills & Tools
let skills = [
    {
        skillTitle: "Title",
        skillText: "Text",
        icon: "ri-code-s-slash-fill",
        tools: [{ toolName: "Tool name", toolValue: 90 }],
    },
];

function skillComponent({ skillTitle, skillText, icon, tools }) {
    return ``;
}

function renderSkills() {}
// Education & Experience
let educations = [
    {
        type: "education",
        title: "Title",
        position: "Position",
        date: {
            startDate: "Oct 10, 2014",
            endDate: "2018",
        },
        desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam",
    },
    {
        type: "experience",
        title: "Title",
        position: "Position",
        date: {
            startDate: "Mar 10, 2018",
            endDate: "2021",
        },
        desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam",
    },
];

function timelineComponent({ title, position, date, desc }) {
    return ``;
}

function renderEducations() {}

/* ============== Services Section ============== */

/* ============== Testimonials Section ============== */

/* ============== Contact Section ============== */

/* ============== Active Scroll ============== */

/* ============== ScrollUp Button ============== */

/* ============== Dark / Light Theme ============== */

/* ============== Send Email By EmailJS ============== */

/* ============== scrollRevealJS ============== */

window.addEventListener("scroll", () => {});

window.addEventListener("load", () => {});
