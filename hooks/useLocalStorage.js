import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error reading local storage key:", key, error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Error setting local storage key:", key, error);
        }
    };

    const removeValue = () => {
        try {
            setStoredValue(undefined);
            window.localStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing local storage key:", key, error);
        }
    };

    return [storedValue, setValue, removeValue];
}

export default useLocalStorage;
