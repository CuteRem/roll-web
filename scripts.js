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

function generateTrueOrFalse() {
    const result = Math.random() > 0.5 ? "True" : "False";
    document.getElementById("trueFalseResult").innerText = `Result: ${result}`;
}
