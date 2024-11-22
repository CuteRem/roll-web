function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").innerText = `Random Number: ${randomNumber}`;
}

function generateTrueOrFalse() {
    const result = Math.random() > 0.5 ? "True" : "False";
    document.getElementById("trueFalseResult").innerText = result;
}
