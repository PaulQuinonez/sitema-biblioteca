const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

// Función para mostrar/ocultar la contraseña
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                });
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                });
            }
        });
    });
});

// Función para validar el formulario
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Ocultar los mensajes de error iniciales
    emailError.style.display = "none";
    passwordError.style.display = "none";

    // Validar el email
    if (!email) {
        emailError.style.display = "block";
    } else if (!validateEmail(email)) {
        emailError.style.display = "block";
        emailError.textContent = "Email must be valid";
    }

    // Validar la contraseña
    if (!password) {
        passwordError.style.display = "block";
    } else if (password !== "123456") {
        passwordError.style.display = "block";
        passwordError.textContent = "Password is incorrect";
    }

    // Si no hay errores, redirigir al usuario
    if (!emailError.style.display && !passwordError.style.display) {
        window.location.href = "dashboard.html";
    }
});

// Función para validar un email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

// js code to aparecer signup y login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});

login.addEventListener("click", () => {
    container.classList.remove("active");
});
