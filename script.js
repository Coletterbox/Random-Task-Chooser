function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// All the functionality of this page is copied from a different project I did a couple of days earlier, so some variable names etc. might seem irrelevant.
const reasonsArray = [
    // "Learn more of the language that you're currently learning!",
    // "Learn more of the other language that you're currently learning!",
    // "Practise your main musical instrument!",
    "Read!",
    "Tidy!",
    "Practice some drawing!",
    // "Do some coding!",
    // "Do some arts and/or crafts!",
    // "Do some exercise!"
    "Do 30 minutes of Ring Fit!",
    "Learn some Japanese!",
    "Practice some JavaScript!",
    "Work on text-based Python game!",
    "Go for a walk!",
    "Do some writing!",
    "Do some editing!",
    "Go shopping!",
    "Play some games :D"
];

// alternative Colette colours
// const coloursArray = [
//     "#33a8c7",
//     "#52e3e1",
//     "#a0e426",
//     "#fdf148",
//     "#ffab00",
//     "#f77976",
//     "#f050ae",
//     "#d883ff",
//     "#9336fd"
// ]

//Colette colours
// const coloursArray = [
//     "#362343",
//     "#27061a",
//     "#501010",
//     "#3e010c",
//     // "#703301",
//     // "#735203",
//     // "#404727",
//     "#26391F",
//     "#193d3f",
//     "#1a2d46",
//     "#003d5a",
//     "#061f25",
//     // "#223538",
//     "#264D53",
//     "#0a4346",
//     // "#2d4f31",
//     "#1E3C22",
//     "#272640",
//     "#312244",
//     "#3e1f47",
//     "#4d194d",
//     "#290025",
//     "#780c56"
// ]

//Kayleigh colours
const coloursArray = [
    "#362343",
    "#27061a",
    "#501010",
    "#3e010c",
    // "#703301",
    // "#735203",
    // "#404727",
    "#26391F",
    "#193d3f",
    "#1a2d46",
    "#003d5a",
    "#061f25",
    // "#223538",
    "#264D53",
    "#0a4346",
    // "#2d4f31",
    "#1E3C22",
    "#272640",
    "#312244",
    "#3e1f47",
    "#4d194d",
    "#290025",
    "#780c56"
]

let lastReason;
let currentReason;

function displayText() {
    lastReason = currentReason;
    currentReason = randomArrayItem(reasonsArray);
    if (currentReason === lastReason) {
        displayText();
    } else {
        document.getElementById("reason").textContent = currentReason;
    }
}

let lastColour;
let currentColour;

function changeBackground() {
    lastColour = currentColour;
    currentColour = randomArrayItem(coloursArray);
    if (currentColour === lastColour) {
        changeBackground();
    } else {
        document.body.style.backgroundColor = currentColour;
    }
}

function runFunctions() {
    randomArrayItem(reasonsArray);
    displayText();
    changeBackground();
}

window.onload = runFunctions();
document.getElementById("refresh").addEventListener("click", runFunctions);