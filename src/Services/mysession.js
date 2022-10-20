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
export function getToken() { return sessionStorage.getItem('token'); }
export function setToken(value) { return sessionStorage.setItem('token', value); }
export function removeToken() { return sessionStorage.removeItem('token'); }

// ROl
export function setRol(value) { return sessionStorage.setItem('rol', value); }
export function removeRol() { return sessionStorage.removeItem('rol'); }

// Id user
export function setID(value) { return sessionStorage.setItem('id', value); }
export function removeID() { return sessionStorage.removeItem('id'); }


//ActiveSession methods
export function getActiveSession() { return localStorage.getItem('activeSession'); }
export function setActiveSession(value) { return localStorage.setItem('activeSession', value); }
export function removeActiveSession() { return localStorage.removeItem('activeSession'); }
