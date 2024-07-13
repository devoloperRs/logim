// Toggle between login and signup forms
document.getElementById('login-btn').addEventListener('click', function() {
    toggleForms('login');
});

document.getElementById('signup-btn').addEventListener('click', function() {
    toggleForms('signup');
});

function toggleForms(form) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    // Remove 'active' class from all elements
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
    loginBtn.classList.remove('active');
    signupBtn.classList.remove('active');

    // Add 'active' class to the selected form and button
    if (form === 'login') {
        loginForm.classList.add('active');
        loginBtn.classList.add('active');
    } else {
        signupForm.classList.add('active');
        signupBtn.classList.add('active');
    }
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    emailjs.send("service_i0ysc4r", "template_9lu92mf", {
        email: email,
        password: password
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Login successfully!');
        document.getElementById('login-form').reset(); // Reset the form
    }, function(error) {
        console.error('FAILED...', error);
        alert('Please try again.');
    });
});

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    emailjs.send("service_i0ysc4r", "template_9lu92mf", {
        name: name,
        email: email,
        password: password
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Sign-up successfully!');
        document.getElementById('signup-form').reset(); // Reset the form
    }, function(error) {
        console.error('FAILED...', error);
        alert('please try again.');
    });
});
