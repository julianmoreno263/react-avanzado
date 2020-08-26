import { useState } from 'react'

export function useLocalStorage (key, initialValue) {

    //este codigo es para inicializar el estado del localstorage
    const [storedValue, setValue] = useState(() => {
        try {
        const item = window.localStorage.getItem(key)
        return item !== null ? JSON.parse(item) : initialValue
        } catch (e) {
        return initialValue
        }
    })

    //este codigo es para actualizar el estado del localstorage

    const setLocalStorage = value => {
        try {
        window.localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
        } catch (e) {
        console.error(e)
        }
    }

    //esto es lo que devuelve el hook

    return [storedValue, setLocalStorage]
}