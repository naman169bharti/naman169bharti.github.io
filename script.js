//to add cross button in the list
var myNodelist = document.querySelectorAll("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//deleting todo
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//add todo
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


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

  var list = document.querySelector('ul');
  list.addEventListener('click', function(element) {
    if (element.target.tagName === 'LI') {
      element.target.classList.toggle('checked');
    }
  });