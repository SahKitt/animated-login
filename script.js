document.addEventListener('DOMContentLoaded', function () {
    const signupLink = document.querySelector('.signup-link');
    const signinLink = document.querySelector('.signin-link');
    const signinForm = document.querySelector('.signin');
    const signupForm = document.querySelector('.signup');
  
    signupLink.addEventListener('click', function (event) {
      event.preventDefault();
      signinForm.style.display = 'none';
      signupForm.style.display = 'block';
    });
  
    signinLink.addEventListener('click', function (event) {
      event.preventDefault();
      signupForm.style.display = 'none';
      signinForm.style.display = 'block';
    });
  });