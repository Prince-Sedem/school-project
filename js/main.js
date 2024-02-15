function sendEmail(){
    Email.send ({
        Host : "smtp.gmail.com",
        Username : "websterprinz@gmail.com",
        Password : "2may1997",
        To : "wilsonprinz@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then (
    message => alert("Message Sent Successfully")    
    );
}

