// Tab switching
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// Random Number Generator
function generateRandomNumber() {
    const min = parseInt(document.getElementById("minRange").value);
    const max = parseInt(document.getElementById("maxRange").value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById("randomNumberResult").innerText = "Invalid range. Ensure Min < Max.";
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("randomNumberResult").innerText = `Generated Number: ${randomNumber}`;
}

// True/False Generator
function generateTrueOrFalse() {
    const result = Math.random() > 0.5 ? "True" : "False";
    document.getElementById("trueFalseResult").innerText = `Result: ${result}`;
}

// Random Option Picker
let options = [];

function addOption() {
    const optionInput = document.getElementById("optionInput");
    const option = optionInput.value.trim();
    if (option) {
        options.push(option);
        const optionList = document.getElementById("options");
        const li = document.createElement("li");
        li.innerText = option;
        optionList.appendChild(li);
        optionInput.value = '';
    }
}

function pickRandomOption() {
    if (options.length === 0) {
        document.getElementById("randomOptionResult").innerText = "No options available.";
        return;
    }
    const randomOption = options[Math.floor(Math.random() * options.length)];
    document.getElementById("randomOptionResult").innerText = `Picked Option: ${randomOption}`;
}
