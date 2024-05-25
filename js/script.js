// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

    // This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
// Function to validate form fields: email, phone, and name
// Function to validate form fields: email, phone, and name
function validateForm() {
    var userName = document.getElementById("name-1388").value; // Get value from input field with ID 'userName'
    var userEmail = document.getElementById("email-1388").value; // Get value from input field with ID 'userEmail'
    var userPhone = document.getElementById("phone-1388").value; // Get value from input field with ID 'userPhone'
    
    // Regular expression patterns for validating email and phone
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/; // Adjust regex as needed for phone format, assuming 10 digits without spaces or hyphens
    
    // Validate name (ensure it's not empty)
    if (userName.trim() === "") {
        alert("Please enter your name.");
        return false;
    }
    
    // Validate email
    if (!emailPattern.test(userEmail)) {
        alert("Please enter a correct email.");
        window.location.href = "index.html";
       return false;
    }
    
    // Validate phone (simple validation assuming only digits are entered)
    if (!phonePattern.test(userPhone)) {
        alert("Please enter a 10-digit phone number.");
        return false;
        
    }
    
    alert("Successfully sent!");
    return true;
    
}
