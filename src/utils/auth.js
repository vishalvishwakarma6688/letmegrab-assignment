export function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
    return JSON.parse(localStorage.getItem('user'))
}

export function login(username, password) {
    const stored = getUser();
    if (!stored) return false;
    return stored.username === username && stored.password === password;
}

export function isLoggedIn() {
    return localStorage.getItem('loggedIn') === "true";
}

export function logOut() {
    localStorage.removeItem('loggedIn');
}