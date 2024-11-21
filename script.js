function showRegistration() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('forgot-password-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function showForgotPassword() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('forgot-password-container').style.display = 'block';
}

function resetPassword(event) {
    event.preventDefault();
    alert('Password reset instructions have been sent to your email!');
    showLogin();
}

function showHome() {
    document.getElementById('home-container').style.display = 'block';
    document.getElementById('invite-container').style.display = 'none';
    document.getElementById('leaderboard-container').style.display = 'none';
    document.getElementById('me-container').style.display = 'none';
}

function showInvite() {
    document.getElementById('home-container').style.display = 'none';
    document.getElementById('invite-container').style.display = 'block';
    document.getElementById('leaderboard-container').style.display = 'none';
    document.getElementById('me-container').style.display = 'none';
}

function showLeaderboard() {
    document.getElementById('home-container').style.display = 'none';
    document.getElementById('invite-container').style.display = 'none';
    document.getElementById('leaderboard-container').style.display = 'block';
    document.getElementById('me-container').style.display = 'none';
}

function showMe() {
    document.getElementById('home-container').style.display = 'none';
    document.getElementById('invite-container').style.display = 'none';
    document.getElementById('leaderboard-container').style.display = 'none';
    document.getElementById('me-container').style.display = 'block';
}

function login(event) {
    event.preventDefault();
    alert('Logged in successfully!');
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('bottom-bar').style.display = 'flex';
    document.getElementById('home-container').style.display = 'block';
}

function logout() {
    alert('Logged out successfully!');
    document.getElementById('home-container').style.display = 'none';
    document.getElementById('bottom-bar').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}
