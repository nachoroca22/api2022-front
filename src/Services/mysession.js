export function isConnected() {
    return getActiveSession() && getToken();
}

export function logOut(cb) {
    removeToken();
    removeActiveSession();
    setTimeout(cb, 100);
}

//Token methods
export function getToken() { return sessionStorage.getItem('token'); }
export function setToken(value) { return sessionStorage.setItem('token', value); }
export function removeToken() { return sessionStorage.removeItem('token'); }

//ActiveSession methods
export function getActiveSession() { return localStorage.getItem('activeSession'); }
export function setActiveSession(value) { return localStorage.setItem('activeSession', value); }
export function removeActiveSession() { return localStorage.removeItem('activeSession'); }
