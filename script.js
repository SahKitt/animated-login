document.addEventListener('DOMContentLoaded', function () {
    const signupLink = document.querySelector('.signup-link');///fetch class signup-link
    const signinLink = document.querySelector('.signin-link');///fetch class signin-link
    const signinForm = document.querySelector('.signin');////fetch class signin
    const signupForm = document.querySelector('.signup');///fetch class signup
  

    // ////event listener when user clicks signup
    signupLink.addEventListener('click', function (event) {
      event.preventDefault();
      signinForm.style.display = 'none';///signin is hidden 
      signupForm.style.display = 'block';///signup is displayed
    });
  
    ////// event listener when user clicks signin
    signinLink.addEventListener('click', function (event) {
      event.preventDefault();
      signupForm.style.display = 'none';///signup is hidden
      signinForm.style.display = 'block';///signin is displayed
    });
  });