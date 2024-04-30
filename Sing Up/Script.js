document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signup-button');

    signUpButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        const fullName = document.getElementById('Full-Name').value;
        const email = document.getElementById('Email').value;
        const password = document.getElementById('Password').value;
        const confirmPassword = document.getElementById('Confirm-Password').value;
        const phoneNumber = document.getElementById('Phone-Number').value;

        // Validar que todos los campos estén llenos
        if (fullName === '' || email === '' || password === '' || confirmPassword === '' || phoneNumber === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Validar que el nombre solo contenga letras
        if (!/^[a-zA-Z\s]*$/.test(fullName)) {
            alert('El nombre solo debe contener letras.');
            return;
        }

        // Validar formato de email
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Validar que la contraseña contenga al menos 2 mayúsculas, un caracter especial y números
        if (!/(?=(.*[A-Z]){2})(?=.*[!@#$%^&*])(?=.*[0-9])/.test(password)) {
            alert('La contraseña debe contener al menos 2 mayúsculas, un caracter especial y números.');
            return;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Validar que el número de teléfono solo contenga números
        if (!/^\d+$/.test(phoneNumber)) {
            alert('El número de teléfono solo debe contener números.');
            return;
        }

        // Si pasa todas las validaciones, mostrar mensaje de éxito
        alert('¡Registro exitoso!');
    });
});
