// Dans script.js (pour index.html)
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    function verifyCredentials(username, password) {
        // ... (votre logique de vérification simulée) ...
        const usersData = `gregory.houy:31082009
alicia.blanluet:24062008
aurelien.naurais:03022008`;
        const lines = usersData.split('\n');
        for (const line of lines) {
            const [storedUsername, storedPassword] = line.split(':');
            if (storedUsername && storedUsername.toLowerCase() === username.toLowerCase() && storedPassword === password) {
                return true;
            }
        }
        return false;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        errorMessage.textContent = '';

        if (verifyCredentials(username, password)) {
            localStorage.setItem('username', username); // Ajouter cette ligne
            localStorage.setItem('password', password); // Ajouter cette ligne
            window.location.href = 'page_accueil.html';
        } else {
            errorMessage.textContent = 'Nom d\'utilisateur et/ou mot de passe incorrect(s).';
        }
    });
});