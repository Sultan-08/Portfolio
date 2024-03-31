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
    const bodyMessage = `<b style="font-size: 1.2rem;">Full Name:</b>
        <span style="font-size: 1.1rem;">${fullName.value}</span><br>
    <b style="font-size: 1.2rem;">Mobile:</b> 
        <span style="font-size: 1.1rem;">${mobile.value}</span><br>
    <b style="font-size: 1.2rem;">E-mail ID:</b> 
        <span style="font-size: 1.1rem;">${email.value}</span><br>
    <b style="font-size: 1.2rem;">Message:</b> 
        <span style="font-size: 1.1rem;">${message.value}</span>`;

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
