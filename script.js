// Login Form Handling
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginMessage').textContent = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid credentials. Please try again.';
        document.getElementById('loginMessage').style.color = 'red';
    }
});

// Contact Form Handling
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('contactMessage').textContent = 'Thank you for reaching out! We will get back to you soon.';
    document.getElementById('contactMessage').style.color = 'green';
});
