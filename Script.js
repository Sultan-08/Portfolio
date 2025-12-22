    (function(){
    emailjs.init("H29KANJPsu_fbFmsk"); // Replace with your EmailJS Public Key
    })();

    document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = document.getElementById("contact-form");

    emailjs.sendForm(
        "service_5wzc8z4",   // Replace with EmailJS Service ID
        "template_1d8uovq",  // Replace with EmailJS Template ID
        this
    ).then(function() {
        document.getElementById("status").innerHTML = "Message sent successfully!";
        form.reset();
    }, function(error) {
        document.getElementById("status").innerHTML = "Failed to send message.";
    });
    });
