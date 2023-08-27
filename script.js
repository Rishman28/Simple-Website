// Open and close the navigation menu on mobile devices

function toggleMenu() {
  var nav = document.querySelector("nav");
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
  } else {
    nav.classList.add("open");
  }
}

// Scroll smoothly to sections when clicking on links in the navigation menu

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var targetId = link.getAttribute("href");
    var targetSection = document.querySelector(targetId);
    var targetPosition = targetSection.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

// Validate the contact form before submission

var contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var nameInput = document.querySelector("#name");
  var emailInput = document.querySelector("#email");
  var messageInput = document.querySelector("#message");
  var nameValue = nameInput.value.trim();
  var emailValue = emailInput.value.trim();
  var messageValue = messageInput.value.trim();

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    alert("Please fill in all fields.");
  } else {
    alert("Thank you for your message!");
    contactForm.reset();
  }
});
