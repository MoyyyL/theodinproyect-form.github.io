const password = document.getElementById("password");
const password2 = document.getElementById("confirm_password");

const temporal = document.querySelector("h3");

password2.addEventListener("input", e => {
    if (password.value === password2.value) {
        password2.classList.add("valid");
        password2.classList.remove("invalid")
    }
    else {
        password2.classList.add("invalid");
    }

    console.log(password2.value);
})
