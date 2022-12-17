// Set Session Token
export const setSessionToken = (name, token) => {
    return sessionStorage.setItem(name, JSON.stringify(token))
}

// Get Session Token
export const getSessionToken = (type) => JSON.parse(sessionStorage.getItem(type))

// Remove Session Token
export const removeSessionToken = (type) => sessionStorage.clear(type)

// Clear Session Storage
export const clearStorage = () => sessionStorage.clear()


// Set Session Token
export const setLocalStorageData = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data))
}

// Get Storage Data
export const getLocalStorageData = (type) => JSON.parse(localStorage.getItem(type))

// Remove Session Token
export const removeLocalStorageData = (type) => localStorage.clear(type)

// Clear Session Storage
export const clearLocalStorage = () => localStorage.clear()