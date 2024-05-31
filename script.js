function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%&*()/';

    let characters = lowercase + numbers;
    let mandatoryCharacters = '';

    if (includeUppercase) {
        characters += uppercase;
        mandatoryCharacters += uppercase[Math.floor(Math.random() * uppercase.length)];
    }

    if (includeSymbols) {
        characters += symbols;
        mandatoryCharacters += symbols[Math.floor(Math.random() * symbols.length)];
    }

    let password = '';
    for (let i = 0; i < length - mandatoryCharacters.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    password += mandatoryCharacters;
    password = shuffle(password);

    document.getElementById('password').textContent = password;
}

function shuffle(string) {
    const array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}
