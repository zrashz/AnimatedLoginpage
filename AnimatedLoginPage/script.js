document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    const resetForm = document.getElementById('reset-form');
    const resetEmailInput = document.getElementById('reset-email');
    const resetEmailError = document.getElementById('reset-email-error');
    const resetBtn = document.getElementById('reset-btn');
    const backToLoginBtn = document.getElementById('back-to-login-btn');
    const forgotPasswordLink = document.getElementById('forgot-password-link');

    loginBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        let valid = true;

        if (!email) {
            emailError.textContent = 'Email is required';
            valid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = 'Enter a valid email';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        if (!password) {
            passwordError.textContent = 'Password is required';
            valid = false;
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            valid = false;
        } else {
            passwordError.textContent = '';
        }

        if (valid) {
            fakeAuthentication(email, password);
        }
    });

    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-form').classList.add('hidden');
        resetForm.classList.remove('hidden');
    });

    backToLoginBtn.addEventListener('click', () => {
        resetForm.classList.add('hidden');
        document.getElementById('login-form').classList.remove('hidden');
    });

    resetBtn.addEventListener('click', () => {
        const email = resetEmailInput.value.trim();
        if (!email) {
            resetEmailError.textContent = 'Email is required';
        } else if (!validateEmail(email)) {
            resetEmailError.textContent = 'Enter a valid email';
        } else {
            resetEmailError.textContent = '';
            alert('Reset password link has been sent to your email');
            resetForm.classList.add('hidden');
            document.getElementById('login-form').classList.remove('hidden');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function fakeAuthentication(email, password) {
        // Simulate an authentication delay
        setTimeout(() => {
            alert('Logged in successfully!');
            // Redirect or perform other actions
        }, 1000);
    }
});
