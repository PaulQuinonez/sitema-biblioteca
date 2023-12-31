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

    if (!email || !password) {
        Swal.fire({
            title: 'Error',
            text: 'Ambos campos son obligatorios',
            icon: 'error',
            position: 'top-end', // Posición en la parte superior derecha
            toast: true, // Mostrar como toast
            showConfirmButton: false, // No mostrar botón de confirmación
            timer: 3000, // Duración en milisegundos
        });
    } else if (email === "admin@test.com" && password === "123456") {
        Swal.fire({
            title: 'Éxito',
            text: 'Tus credenciales son correctas',
            icon: 'success',
            position: 'top-end',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
        }).then(() => {
            window.location.href = 'dashboard.html';
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Tus credenciales son incorrectas',
            icon: 'error',
            position: 'top-end',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
        });
    }
});


