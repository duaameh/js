const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthDate = document.getElementById('birthDate').value;
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const mobileNumber = document.getElementById('mobileNumber').value;

  let isValid = true;

  
  if (!/^[a-zA-Z]+$/.test(firstName) ||!/^[a-zA-Z]+$/.test(lastName)) {
    document.getElementById('firstNameError').textContent = 'First name and last name must only contain letters';
    isValid = false;
  } else {
    document.getElementById('firstNameError').textContent = '';
  }

 
  const birthDateRegex = /^\d{2}-\d{2}-\d{4}$/;
  if (!birthDateRegex.test(birthDate)) {
    document.getElementById('birthDateError').textContent = 'Invalid birth date format (YYYY-MM-DD)';
    isValid = false;
  } else {
    document.getElementById('birthDateError').textContent = '';
  }

  // Check email structure
  const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    isValid = false;
  } else if (email!== confirmEmail) {
    document.getElementById('emailError').textContent = 'Emails do not match';
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*()_+=-{};:"<>,./?]).{8,32}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById('passwordError').textContent = 'Password must start with a capital letter, have at least two numbers, one special character, and be between 8 and 32 characters long';
    isValid = false;
  } else if (password!== confirmPassword) {
    document.getElementById('passwordError').textContent = 'Passwords do not match';
    isValid = false;
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  const mobileNumberRegex = /^\d{10}$/;
  if (!mobileNumberRegex.test(mobileNumber)) {
    document.getElementById('mobileNumberError').textContent = 'Mobile number must be 10 digits long';
    isValid = false;
  } else {
    document.getElementById('mobileNumberError').textContent = '';
  }

  if (isValid) {
    console.log('Form is valid!');
  }






});