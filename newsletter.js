document.addEventListener("DOMContentLoaded",()=>{
    const email = document.getElementById("email");
    const subscribeButton = document.getElementById("subscribe");
    const errorMail = document.querySelector(".error-mail");

    const signupForm = document.getElementById("sign-up-form");
    const image = document.getElementById("img");

    const successMessage = document.getElementById("success-message");
    const dismissButton = document.getElementById("btn2");

    const userEmailDisplay = document.getElementById("user-email");
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    subscribeButton.addEventListener('click',()=>{

        const emailVal = email.value.trim();
        errorMail.style.display = "none";

        email.style.border = "1px solid hsl(231, 7%, 60%)";
        email.style.backgroundColor = "transparent";

        if(!emailVal || !emailRegex.test(emailVal)){
            errorMail.style.display = "block";
            email.style.border = "1px solid hsl(4, 100%, 67%)";
            email.style.backgroundColor = "rgba(255, 98, 87, 0.2)";
        }else{
            userEmailDisplay.textContent = email.value;
            signupForm.style.display = "none";
            image.style.display = "none";
            successMessage.style.display = "block";
        }
        
    });

    dismissButton.addEventListener('click',()=>{
        email.value = "";
        signupForm.style.display = "block";
        image.style.display = "block";
        successMessage.style.display = "none";
    })

})

