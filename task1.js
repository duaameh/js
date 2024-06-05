document.getElementById('calForm')
.addEventListener('submit', function(event) {
    event.preventDefault();


   
    let operation = document.getElementById('operation').value;
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let result;
   
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid operation";
    }

    
    console.log(`Operation: ${operation}, Numbers: ${num1} and ${num2}, Result: ${result}`);
});


