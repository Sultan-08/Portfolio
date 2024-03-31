// GET DATA BY WhatsApp 
// function sendToWhatsapp() {
//     let number = "+91**********";

//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let message = document.getElementById('message').value;

//     var url = "https://wa.me/" + number + "?text="
//     + "Name : " +name+ "%0a"
//     + "Email : " +email+ "%0a"
//     + "Message : " +message+ "%0a";

//     window.open(url, '_blank').focus();
// }

// Get Data By Gmail

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const mobile = document.getElementById("mobile");
const emailId = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br>
    Mobile: ${mobile.value}<br>
    E-mail ID: ${emailId.value}<br>
    Message: ${message.value}`;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sm.studio7887@gmail.com",
    Password : "D5E2805750079F3476D60C5703B83BBBC9CF",
    To : 'sultanmulani65@gmail.com',
    From : "sm.studio7887@gmail.com",
    Subject : "Enquiry From Sultan's Portfolio !",
    Body : bodyMessage
}).then(
message => {
    if (message == "OK") {
        Swal.fire({
            title: "Success!",
            text: "Message Sent Successfully!",
            icon: "success"
        });
    }
});
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
