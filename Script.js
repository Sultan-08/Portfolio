    (function(){
    emailjs.init("H29KANJPsu_fbFmsk");
    })();

    document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = document.getElementById("contact-form");

    emailjs.sendForm(
        "service_5wzc8z4",
        "template_1d8uovq",
        this
    ).then(function() {
        document.getElementById("status").innerHTML = "Message sent successfully!";
        form.reset();
    }, function(error) {
        document.getElementById("status").innerHTML = "Failed to send message.";
    });
    });

