
//for signup modal
const signup = document.querySelector(".signup");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");

// function which shows the modal by changing the style of signupModal to "block"
const showSignupModal = () => {
  signupModal.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeSignupModal = () => {
  signupModal.style.display = "none";
};

// Call the showSignupModal function when signup button is clicked
signup.addEventListener("click", () => {
  showSignupModal();
});

// Call the closeSignupModal function when close button on the modal is clicked
closeButton.addEventListener("click", () => {
  closeSignupModal();
});

// Call the closeSignupModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeSignupModal();
  }
});


const login = document.querySelector(".login");
const loginModal = document.querySelector(".login-modal-wrapper");
const closeLoginButton = document.querySelector(".closeLoginmodal");


// function which shows the modal by changing the style of loginModal to "block"
const showLoginModal = () => {
    loginModal.style.display = "block";
  };
  
  // function which hides the modal by changing the style of loginModal to "none"
  const closeLoginModal = () => {
    loginModal.style.display = "none";
  };
  
  // Call the showloginModal function when login button is clicked
  login.addEventListener("click", () => {
    showLoginModal();
  });
  
  // Call the closeloginModal function when close button on the modal is clicked
  closeLoginButton.addEventListener("click", () => {
    closeLoginModal();
  });
  
  // Call the closeloginModal function when anywhere outside of the modal is clicked
  window.addEventListener("click", () => {
    if (event.target === modal) {
      closeLoginModal();
    }
  });
