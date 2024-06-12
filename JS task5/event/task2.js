// document.getElementById('passwordForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
//     const passwordError = document.getElementById('passwordError');
//     const confirmPasswordError = document.getElementById('confirmPasswordError');

    
//     passwordError.textContent = '';
//     confirmPasswordError.textContent = '';

    
//     if (password.length < 6) {
//         passwordError.textContent = 'Password is too short';
//     }

//     if (password !== confirmPassword) {
//         confirmPasswordError.textContent = 'Passwords do not match';
//     }

// });
function showMore() {
    document.getElementById('short-text').style.display = 'block';
    document.getElementById('full-text').style.display = 'block';
    document.getElementById('show-more-btn').style.display = 'none';
    document.getElementById('show-less-btn').style.display = 'inline';
}

function showLess() {
    document.getElementById('short-text').style.display = 'block';
    document.getElementById('full-text').style.display = 'none';
    document.getElementById('show-more-btn').style.display = 'inline';
    document.getElementById('show-less-btn').style.display = 'none';
}
