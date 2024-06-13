const storeRegistrationData = (event) => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('regPassword').value;
  
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
  
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Registration successful!');
  };
  
  const authUser = (event) => {
    event.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    const storedUserData = JSON.parse(localStorage.getItem('user'));
  
    if (
      storedUserData.email === loginEmail &&
      storedUserData.password === loginPassword
    ) {
      alert('Login successful!');
      displayUserData(storedUserData);
    } else {
      alert('Invalid email or password.');
    }
  };
  
  const displayUserData = (userData) => {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = `
      <div class="card">
        <h3>User Data</h3>
        <p>First Name: ${userData.firstName}</p>
        <p>Last Name: ${userData.lastName}</p>
        <p>Email: ${userData.email}</p>
      </div>
    `;
  };