const screen = document.querySelector("#screen");
const keys = document.querySelector(".calculator-keys");
let inputValue = "";

keys.addEventListener("click", event => {
    const {target} = event;
    const {value} = target;

    if(!target.matches("button")) return;

    switch (value) {
        case "=":
            try {
                inputValue = eval(inputValue).toString();
            }catch{
                inputValue = "Error";
            }
            break;
        case "all-clear":
            inputValue = "";
            break;
        default :
            inputValue += value;
            break;
    }

    screen.value = inputValue;
})