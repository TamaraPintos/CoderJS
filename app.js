// Función para obtener los criterios de la contraseña del usuario
function getPasswordCriteria() {
    // Solicitar la longitud de la contraseña
    const length = parseInt(prompt("Introduce la longitud de la contraseña (mínimo 8 caracteres):"), 10);
    
    // Verificar que la longitud es válida
    if (isNaN(length) || length < 8) {
        alert("La longitud debe ser un número entero mayor o igual a 8.");
        return null;
    }
    
    // Solicitar inclusión de números
    const includeNumbers = confirm("¿Quieres incluir números en la contraseña?");
    
    // Solicitar inclusión de símbolos
    const includeSymbols = confirm("¿Quieres incluir símbolos en la contraseña?");
    
    // Solicitar inclusión de letras mayúsculas
    const includeUppercase = confirm("¿Quieres incluir letras mayúsculas en la contraseña?");
    
    return {
        length,
        includeNumbers,
        includeSymbols,
        includeUppercase
    };
}

// Función para generar la contraseña basada en los criterios
function generatePassword({ length, includeNumbers, includeSymbols, includeUppercase }) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/~`";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let charset = lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;
    if (includeUppercase) charset += uppercase;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    return password;
}

// Función para mostrar la contraseña generada
function displayPassword(password) {
    alert(`Tu contraseña generada es: ${password}`);
}

// Función principal que coordina las demás funciones
function main() {
    const criteria = getPasswordCriteria();
    if (criteria) {
        const password = generatePassword(criteria);
        displayPassword(password);
    }
}

// Ejecutar la función principal
main();
