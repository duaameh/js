document.addEventListener('DOMContentLoaded', (event) => {
    const inputForm = document.getElementById('inputForm');
    const lastInputDiv = document.getElementById('lastInput');
    const storedInputsDiv = document.getElementById('storedInputs');

  
    let storedInputs = JSON.parse(localStorage.getItem('inputs')) || [];

   
    function displayAllInputs() {
        storedInputsDiv.innerHTML = '';
        storedInputs.forEach(input => {
            const p = document.createElement('p');
            p.textContent = `Name: ${input.name}, Email: ${input.email}, Phone: ${input.phone}`;
            storedInputsDiv.appendChild(p);
        });
    }

    displayAllInputs();

 
    if (storedInputs.length > 0) {
        const lastInput = storedInputs[storedInputs.length - 1];
        lastInputDiv.textContent = `Name: ${lastInput.name}, Email: ${lastInput.email}, Phone: ${lastInput.phone}`;
    }

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

     
        lastInputDiv.textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}`;

       
        const input = { name, email, phone };
        storedInputs.push(input);
        localStorage.setItem('inputs', JSON.stringify(storedInputs));

      
        displayAllInputs();

        
        inputForm.reset();
    });
});
