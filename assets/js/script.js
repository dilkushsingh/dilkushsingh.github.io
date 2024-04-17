
//Smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

//Navbar toggle
// $('ul.nav').addClass('show');

//Add animations to menu
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

//Download CV
document.getElementById("downloadButton").onclick = function() {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1W5qS7P2OoXBZdxu6KJX0jhnduEp6vGWD';
};l 

//Form Reset
//form reset
window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};

function onSubmit(token) {
    // Called when reCAPTCHA is successfully verified
    document.getElementById("form").submit(); // Submit the form
}

function validateForm() {
    // Check if reCAPTCHA is verified
    if (grecaptcha.getResponse() === "") {
        // reCAPTCHA not verified, display error message
        alert("Please complete the reCAPTCHA.");
        return false; // Prevent form submission
    }
    return true; // Proceed with form submission
}
