const $ = selector => document.querySelector(selector);



document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const first_name = $("#first_name");
        let isValid = true;
        

        // check user entries - add text to error message if invalid
        if (email1.value == "") { 
           email1.nextElementSibling.textContent = "Email address is required.";
           isValid = false;
        }
        else {
            email1.nextElementSibling.textContent = ""
        }
        if (email2.value == "") { 
            email2.nextElementSibling.textContent = "Please re-enter the same email address.";
            isValid = false;
        }
        else {
            email2.nextElementSibling.textContent = ""
        }
    
        if (email1.value != email2.value) { 
            email2.nextElementSibling.textContent = "Both emails must match.";
            isValid = false;
        }
        if (first_name.value == "") {
            first_name.nextElementSibling.textContent = "First name is required.";
            isValid = false;
        }
        else {
            first_name.nextElementSibling.textContent = ""
        }
        // submit the form if error message is an empty string
        if (isValid) {
            $("#email_form").submit();
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});