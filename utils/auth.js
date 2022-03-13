
export function saveTokenToLocalStorage(token, login) {
    localStorage.setItem('Token', token);
    localStorage.setItem('Name', login);
}

export function isAuthorizated() {
    return !!localStorage.getItem('Token');
}

export function isLogout() {
    localStorage.clear();
}