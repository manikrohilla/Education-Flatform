function reset() {
    document.getElementById("the-name").value = "";
    document.getElementById("the-email").value = "";
    document.getElementById("the-phone").value = "";
    document.getElementById("the-gender").value = "";
    document.getElementById("the-city").value = "";
    document.getElementById("the-message").value = "";
}
function getValues() {
    let name = document.getElementById("the-name").value = "";
    let email = document.getElementById("the-email").value = "";
    let phone = document.getElementById("the-phone").value = "";
    let gender = document.getElementById("the-gender").value = "";
    let city = document.getElementById("the-city").value = "";
    let message = document.getElementById("the-message").value = "";
    let obj = {
        name,
        email,
        phone,
        subject: gender,
        city,
        message
    };
    if (name === "" || email === "" || phone === "" || gender === "" || city === "" || message === "") {
        alert("Please fill all the fields!");
        return;
    }
    else {
        // alert("Data has been saved succesfull!");
        // reset();

        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
            .then((res) => res.status)
            .then((status) => {
                if (status === 200) {
                    alert("Message sent successfully");
                    resetForm();
                } else {
                    alert("Something went wrong");
                }
            })
    }
}

