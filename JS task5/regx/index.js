const form = document.getElementById('registration-form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const firstNameError = document.getElementById('first-name-error');
    const lastNameError = document.getElementById('last-name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      let isValid = true;

      if (!/^[a-zA-Z]$/.test(firstName)) {
        firstNameError.textContent = 'First name must only contain letters';
        isValid = false;
      } else {
        firstNameError.textContent = '';
      }

      if (!/^[a-zA-Z]+$/.test(lastName)) {
        lastNameError.textContent = 'Last name must only contain letters';
        isValid = false;
      } else {
        lastNameError.textContent = '';
      }

      // Validate email
      if (!/^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(email)) { // . / ما بزبط لازم 
        emailError.textContent = 'Invalid email address';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      // Validate password
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.\d)[a-zA-Z\d]{8,}$/.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one digit';
        isValid = false;
      } else {
        passwordError.textContent = '';
      }

      if (isValid) {
        // Form is valid, submit it
        form.submit();
      }
    });