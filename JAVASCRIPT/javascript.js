$(document).ready(function () {
    $("#button").click(function () {
        $("#span").fadeIn("slow");
    });
});
function fact() {
    let fact = document.getElementById("funfact")
    fact.style.display = "Block";
}
function show() {
    let show = document.getElementById("hide")
    show.style.display = "block";
}
$(document).ready(function() {
    
    // Click handler for submit button
        $('#submitbtn').click(function(event) {
            event.preventDefault();
            let isValid = true;
    
        // Name validation
        let name = $('#name').val();
        if (name === "") {
            $('#name-error').html('Name is required.');
            isValid = false;
        }
 
        // Email validation
        const email = $('#email').val();
        if (email === '') {
            $('#email-error').html('Please enter your email.');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $('#email-error').html('email format is required.');
            isValid = false;
        }
 
        // Phone validation
        const phone = $('#contact_number').val();
        if (phone === '') {
            $('#contact_number-error').html('Please enter your contact number.');
            isValid = false;
        } else if (!/^\+356\d{8}$/.test(phone)) {
            $('#email-error').html('contact number format like so: +356 #### ####.');
            isValid = false;
        }
 
        // Message validation
        const message = $('#message').val();
        if (message === '') {
            $('#message-error').html('Please enter your message.');
            isValid = false;
        } else if (message.length < 10) {
            $('#email-error').html('Minimum of 10 characters is required.');
            isValid = false;
        }
 
        // Form submission
        if (isValid) {
            alert('Thank you! Your message has been sent.');
            $('#contactForm')[0].reset();
        }
        // Show error helper
    function showError(fieldId, message) {
        $(`#${fieldId}`).addClass('has-error');
        $(`#${fieldId}-error`).text(message).css('color', 'red').show();
    }
    });
});