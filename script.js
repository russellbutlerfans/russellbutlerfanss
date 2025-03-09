document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);

    fetch("https://formsubmit.co/russellbutlerfanpage.only@gmail.com", {
        method: "POST",
        body: formData
    }).then(response => {
        document.getElementById("confirmation").innerText = "Message sent successfully!";
        this.reset();
    }).catch(error => {
        document.getElementById("confirmation").innerText = "Error sending message.";
    });
});

