Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


function showLoginForm(userType) {
    const loginFormContainer = document.getElementById('login-form-container');
    const studentForm = document.getElementById('student-form');
    const staffForm = document.getElementById('staff-form');

    loginFormContainer.style.display = 'flex';

    if (userType === 'student') {
        studentForm.style.display = 'block';
        staffForm.style.display = 'none';
    } else if (userType === 'staff') {
        staffForm.style.display = 'block';
        studentForm.style.display = 'none';
    }
}


function closeLoginForm() {
    const loginFormContainer = document.getElementById('login-form-container');
    loginFormContainer.style.display = 'none';
}