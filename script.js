

function populateBothDisplay(text) {
    runningDisplay.innerText += text;
    previousDisplay.innerHTML += text;
};

function populatePrevDisplay(text) {
    previousDisplay.innerHTML += text;
    runningDisplay.innerHTML = "";
};

const input = document.querySelector(".input");
const numberBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const previousDisplay = document.querySelector(".previous")
const runningDisplay = document.querySelector(".running");

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        let text = button.innerText;
        populateBothDisplay(text);
    })
})

clearBtn.addEventListener("click", () => {
    runningDisplay.textContent = "";
    previousDisplay.textContent = "";
})

deleteBtn.addEventListener("click", () => {
    runningDisplay.innerText = runningDisplay.innerText.slice(0,-1); // removing last char of string
})

equalBtn.addEventListener("click", () => {
    let b = runningDisplay.innerText;
    runningDisplay.textContent = "";
    //
});

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        let operator = button.innerText;
        populatePrevDisplay(operator);
        // let a = runningDisplay.innerText;
        // previousDisplay.innerText += a + " " + operator;
        // runningDisplay.textContent = "";
    });
})