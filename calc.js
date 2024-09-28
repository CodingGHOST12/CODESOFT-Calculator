/* BASSIC CALCULATOR JS */
let lastCharacterIsOperator = false;

function clearDisplay() {
    document.getElementById("display").value = "";
    lastCharacterIsOperator = false;
}

function appendCharacter(char) {
    const display = document.getElementById("display").value;
    const operators = ['+', '-', '*', '/'];


    if (operators.includes(char)) {
        if (lastCharacterIsOperator || display === "") {
            return;
        }
        lastCharacterIsOperator = true;
    } else {
        lastCharacterIsOperator = false;
    }

    document.getElementById("display").value += char;
}

function deleteLast() {
    let display = document.getElementById("display").value;
    const operators = ['+', '-', '*', '/'];

    if (display.length > 0) {
        const lastChar = display.charAt(display.length - 1);
        if (operators.includes(lastChar)) {
            lastCharacterIsOperator = false;
        }
        document.getElementById("display").value = display.slice(0, -1);
    }
}

function calculate() {
    const display = document.getElementById("display").value;


    if (['+', '-', '*', '/'].includes(display.charAt(display.length - 1))) {
        return;
    }

    try {
        let result = eval(display);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }

    lastCharacterIsOperator = false;
}
