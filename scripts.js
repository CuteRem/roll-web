function generateRandomNumber() {
    const min = parseInt(document.getElementById("minRange").value);
    const max = parseInt(document.getElementById("maxRange").value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById("randomNumberResult").innerText = "Please enter a valid range (Min < Max).";
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("randomNumberResult").innerText = `Random Number: ${randomNumber}`;
}

function generateTrueOrFalse() {
    const result = Math.random() > 0.5 ? "True" : "False";
    document.getElementById("trueFalseResult").innerText = result;
}
