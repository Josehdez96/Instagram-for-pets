import { useState } from "react";
export function useLocalStorage(key, initialValue) {
    var _a = useState(function () {
        try {
            var item = window.localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.error(error);
            return initialValue;
        }
    }), storedValue = _a[0], setValue = _a[1];
    var setLocalStorage = function (value) {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setValue(value);
        }
        catch (error) {
            console.error(error);
        }
    };
    return [storedValue, setLocalStorage];
}
