export function isConnected() {
    return getActiveSession() && getToken();
}

export function logOut(cb) {
    removeToken();
    removeActiveSession();
    removeRol();
    setTimeout(cb, 100);
}

//Token methods
export function getToken() { return localStorage.getItem('token'); }
export function setToken(value) { return localStorage.setItem('token', value); }
export function removeToken() { return localStorage.removeItem('token'); }

// ROl
export function setRol(value) { return localStorage.setItem('rol', value); }
export function removeRol() { return localStorage.removeItem('rol'); }

// Id user
export function setID(value) { return localStorage.setItem('id', value); }
export function removeID() { return localStorage.removeItem('id'); }


//ActiveSession methods
export function getActiveSession() { return localStorage.getItem('activeSession'); }
export function setActiveSession(value) { return localStorage.setItem('activeSession', value); }
export function removeActiveSession() { return localStorage.removeItem('activeSession'); }
