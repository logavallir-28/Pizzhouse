function validateForm() {

    let form = document.getElementById("bookingForm");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("inputState").value;
    let message = document.getElementById("floatingTextarea2").value;


    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    if (email == "") {
        alert("Please enter your email");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return false;
    }

    if (service == "") {
        alert("Please select a service");
        return false;
    }

    if (message == "") {
        alert("Please enter your message");
        return false;
    }


    alert("Table booked successfully!");

    form.reset();

    return false;  
}