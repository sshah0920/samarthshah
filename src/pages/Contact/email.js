const submitForm = document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    
    sendEmail(name, email, message); 
}
 

function sendEmail(name, email, message) {
    Email.send({
        Host:"smtp.gmail.com",
        Username:"samarthshah@gmail.com",
        Password:"vgnlmwkzahvclfyw",
        To:"samarthshah3140@gmail.com",
        From:"samarthshah3140@gmail.com",
        Subject: `${name} sent you a messahe`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("Mail has been sent successfully"))
}