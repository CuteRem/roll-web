// Change theme
function changeTheme() {
    const theme = document.getElementById("theme").value;
    document.body.setAttribute("data-theme", theme);
}

// Generate a random number
function generateNumber() {
    const min = parseInt(document.getElementById("min").value) || 0;
    const max = parseInt(document.getElementById("max").value) || 100;
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("number-result").innerText = `Result: ${result}`;
}

// Generate True/False
function generateTrueFalse() {
    const result = Math.random() < 0.5 ? "True" : "False";
    document.getElementById("true-false-result").innerText = `Result: ${result}`;
}

// Add options
const options = [];
function addOption() {
    const optionInput = document.getElementById("option-input").value.trim();
    if (optionInput) {
        options.push(optionInput);
        updateOptions();
        document.getElementById("option-input").value = "";
    }
}

function clearOptions() {
    options.length = 0;
    updateOptions();
}

function selectRandomOption() {
    if (options.length > 0) {
        const randomIndex = Math.floor(Math.random() * options.length);
        document.getElementById("option-result").innerText = `Result: ${options[randomIndex]}`;
    } else {
        document.getElementById("option-result").innerText = "No options available!";
    }
}

function updateOptions() {
    const container = document.getElementById("options-container");
    container.innerHTML = options.map((option, index) => `<p>${index + 1}. ${option}</p>`).join("");
}
